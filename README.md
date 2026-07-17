# Vibecoding Personal Homepage

一个清竹绿、米白色调的个人主页项目，用于展示城市迁移路线、三语首页文案、学术发展路径和职业实习发展路径。

## 页面

- `/`：首页，包含动态路线图与中英德三语文案。
- `/paths`：完整路径页，包含“学术发展路径”和“职业实习发展路径”两个分页。

## 本地预览

```bash
npm install
npm run dev
```

打开终端提示的本地地址即可预览。

## 部署到 Vercel

推荐流程：

1. 将项目推送到 GitHub。
2. 在 Vercel 中导入该 GitHub 仓库。
3. Vercel 会自动识别 Next.js 项目。
4. 默认构建命令使用 `npm run build`。

## 后续可扩展方向

- 增加 Notebook / Markdown 博客页。
- 将 Python 可视化结果导出为 HTML 或图片后嵌入网站。
- 增加作品集、联系表单、访问统计。
- 将路径内容抽离为 JSON 或 Markdown，方便日后维护。
