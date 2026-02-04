# 博客部署指南

本博客使用 VitePress 构建，并通过 GitHub Pages 自动部署。

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run docs:dev
```

访问 http://localhost:5173 即可查看博客。

### 构建生产版本
```bash
npm run docs:build
```

### 预览生产版本
```bash
npm run docs:preview
```

## GitHub Pages 部署

博客已配置自动部署到 GitHub Pages，每次推送到 `main` 分支时会自动触发部署。

### 首次部署步骤：

1. **启用 GitHub Pages**
   - 访问仓库的 Settings → Pages
   - 在 "Source" 下选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "Add VitePress blog"
   git push origin main
   ```

3. **查看部署状态**
   - 访问仓库的 Actions 标签页
   - 等待 "Deploy VitePress site to Pages" 工作流完成

4. **访问博客**
   - 部署成功后，可以通过以下地址访问：
   - https://sayanglala.github.io/my_post/

## 目录结构

```
my_post/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── docs/                       # 文档根目录
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 配置文件
│   │   └── dist/               # 构建输出目录（自动生成）
│   ├── gisPost/                # GIS 技术文章
│   │   ├── index.md            # GIS 文章索引页
│   │   └── *.md                # 各种 GIS 相关文章
│   ├── reading/                # 阅读笔记
│   │   ├── index.md            # 阅读笔记索引页
│   │   └── *.md                # 阅读笔记文章
│   ├── other/                  # 其他文章
│   │   └── *.md                # 其他类型文章
│   ├── public/                 # 静态资源
│   │   └── image/              # 图片资源
│   └── index.md                # 首页
├── package.json                # 项目配置
├── DEPLOY.md                   # 部署说明文档
└── README.md                   # 项目说明
```

## 添加新文章

1. 在 `docs/gisPost/` 或 `docs/reading/` 目录下创建新的 Markdown 文件
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 配置中添加新文章链接
3. 提交并推送到 GitHub，会自动部署

## 自定义配置

可以在 `docs/.vitepress/config.mts` 中修改：
- 网站标题和描述
- 导航栏菜单
- 侧边栏结构
- 主题颜色
- 社交链接等

更多配置选项参见 [VitePress 官方文档](https://vitepress.dev/)。

## 常见问题

### 图片无法显示
确保图片路径正确，VitePress 中图片路径应该相对于 Markdown 文件所在位置。

### 部署失败
检查 Actions 标签页的错误日志，常见原因：
- npm 依赖安装失败
- 构建过程中有语法错误
- GitHub Pages 未启用

### 样式或功能异常
清除浏览器缓存，或尝试在无痕模式下访问。
