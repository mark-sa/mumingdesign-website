# 睦铭空间设计事务所官网

静态网站第一版，使用 HTML、CSS、JavaScript 构建，无复杂框架。

## 文件结构

```text
muming-space-design/
  index.html
  about.html
  projects.html
  project-detail.html
  services.html
  contact.html
  assets/
    css/
      styles.css
    js/
      main.js
    images/
      hero-home.svg
      about-studio.svg
      projects/
        hospitality-01.svg
        hospitality-02.svg
        commercial-01.svg
        commercial-02.svg
        residential-01.svg
        ai-workflow-01.svg
        detail-hero.svg
        detail-01.svg
        detail-02.svg
        detail-03.svg
        detail-04.svg
```

## 本地预览

直接双击 `index.html` 即可在浏览器中打开。

如果希望用本地服务预览，可以在该文件夹中运行：

```bash
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## 替换图片

当前页面使用的是 SVG 占位图片，后续把真实图片放到 `assets/images/` 和 `assets/images/projects/`，并在页面中把对应 `img src` 改为真实图片路径即可。

也可以修改各页面中的 `img src` 路径，指向新的项目图片。

## 部署上线

这是纯静态网站，可以部署到以下平台：

- Netlify：拖拽整个 `muming-space-design` 文件夹上线。
- Vercel：导入项目文件夹，框架选择 Other / Static。
- GitHub Pages：把文件夹内容推送到仓库，开启 Pages。
- 传统服务器：上传全部文件到网站根目录。

部署时不需要构建命令。入口文件为 `index.html`。
