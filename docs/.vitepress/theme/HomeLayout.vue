<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <!-- 首页底部添加额外内容 -->
    <template #home-features-after v-if="frontmatter.layout === 'home'">
      <div class="home-extra">
        <div class="recent-section">
          <h2 class="section-title">最近更新</h2>
          <div class="post-grid">
            <a href="/my_post/gisPost/地图影像（XYZ切片）下载即发布方案" class="post-card">
              <span class="post-tag">GIS</span>
              <h3>地图影像 XYZ 切片下载方案</h3>
              <p>XYZ 切片的批量下载与本地发布完整方案</p>
            </a>
            <a href="/my_post/gisPost/Cesium地形切片--CTB(cesium-terrain-builder)填坑指南" class="post-card">
              <span class="post-tag">GIS</span>
              <h3>Cesium 地形切片 CTB 填坑指南</h3>
              <p>cesium-terrain-builder 编译使用全流程踩坑记录</p>
            </a>
            <a href="/my_post/gisPost/geoserver自动发布矢量数据" class="post-card">
              <span class="post-tag">GIS</span>
              <h3>Geoserver 自动发布矢量数据</h3>
              <p>使用脚本实现 Geoserver 矢量数据自动化发布</p>
            </a>
            <a href="/my_post/reading/东亚教育浪费了太多生命" class="post-card">
              <span class="post-tag">阅读</span>
              <h3>东亚教育浪费了太多生命</h3>
              <p>对东亚教育体制的深度反思与讨论</p>
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
  margin-bottom: 10px;
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
