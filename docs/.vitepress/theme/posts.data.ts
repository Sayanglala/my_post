import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

interface Post {
  title: string
  url: string
  description: string
  tag: string
  date: string
}

// 目录 → 标签映射
const tagMap: Record<string, string> = {
  gisPost: 'GIS',
  reading: '阅读',
  other: '技术杂记'
}

function getGitLastModified(filePath: string): Date {
  try {
    const timestamp = execSync(
      `git log -1 --format="%ai" -- "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim()
    if (timestamp) return new Date(timestamp)
  } catch {}
  return fs.statSync(filePath).mtime
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)/m)
  return match ? match[1].trim() : '无标题'
}

function extractDescription(content: string): string {
  const noFrontmatter = content.replace(/^---[\s\S]*?---\n*/, '')
  const noHeading = noFrontmatter.replace(/^#.*\n+/, '')
  const lines = noHeading.split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('![') || trimmed.startsWith('```') || trimmed.startsWith('<') || trimmed.startsWith('---') || trimmed.startsWith('#')) continue
    const desc = trimmed
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    return desc.length > 80 ? desc.slice(0, 80) + '…' : desc
  }
  return ''
}

function scanMarkdownFiles(dir: string, base: string): string[] {
  const results: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'public') {
      results.push(...scanMarkdownFiles(fullPath, base))
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      results.push(fullPath)
    }
  }
  return results
}

export default {
  watch: ['../../**/*.md'],
  load(): Post[] {
    const docsRoot = path.resolve(__dirname, '../../')
    const files = scanMarkdownFiles(docsRoot, docsRoot)

    return files
      .map((filePath) => {
        const content = fs.readFileSync(filePath, 'utf-8')
        const date = getGitLastModified(filePath)

        // 相对于 docs 目录的路径
        const relPath = path.relative(docsRoot, filePath)
        // 去掉 .md 后缀，构造 URL
        const urlPath = '/' + relPath.replace(/\.md$/, '').split(path.sep).join('/')
        const url = '/my_post' + urlPath

        // 从第一级目录获取标签
        const dir = relPath.split(path.sep)[0] || ''
        const tag = tagMap[dir] || '其他'

        return {
          title: extractTitle(content),
          url,
          description: extractDescription(content),
          tag,
          date: date.toISOString()
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}
