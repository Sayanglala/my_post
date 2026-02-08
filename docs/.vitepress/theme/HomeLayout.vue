<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { data as posts } from './posts.data'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

// 取最新的 4 篇文章
const recentPosts = posts.slice(0, 4)

function formatDate(isoDate) {
  const d = new Date(isoDate)
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <Layout>
    <!-- 首页底部添加额外内容 -->
    <template #home-features-after v-if="frontmatter.layout === 'home'">
      <div class="home-extra">
        <div class="recent-section">
          <h2 class="section-title">最近更新</h2>
          <div class="post-grid">
            <a v-for="post in recentPosts" :key="post.url" :href="post.url" class="post-card">
              <div class="post-meta">
                <span class="post-tag">{{ post.tag }}</span>
                <span class="post-date">{{ formatDate(post.date) }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p>{{ post.description }}</p>
            </a>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.home-extra {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.post-card {
  display: block;
  padding: 20px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-soft);
}

.dark .post-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.post-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.post-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.post-date {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.post-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.post-card p {
  font-size: 13px;
  color: var(--vp-c-text-3);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 640px) {
  .post-grid {
    grid-template-columns: 1fr;
  }
}
</style>
