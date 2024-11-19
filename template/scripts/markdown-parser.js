// markdown-parser.js

// 确保浏览器支持现代功能
if (typeof marked === 'undefined') {
    console.error("Error: 'marked' library is not loaded. Please include it in your HTML.");
}

// 解析并渲染 Markdown 文件
async function renderMarkdown(filePath, targetElementId) {
    try {
        // 1. 从服务器获取 Markdown 文件内容
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }

        const markdownText = await response.text();

        // 2. 使用 marked 解析 Markdown 文件内容为 HTML
        const htmlContent = marked.parse(markdownText);

        // 3. 插入 HTML 内容到目标容器
        const container = document.getElementById(targetElementId);
        if (container) {
            container.innerHTML = htmlContent;
        } else {
            console.warn(`Target element with ID '${targetElementId}' not found.`);
        }
    } catch (error) {
        console.error("Error rendering markdown:", error);
    }
}

// 默认加载并渲染
document.addEventListener("DOMContentLoaded", () => {
    // 1. 默认 Markdown 文件路径
    const defaultMarkdownFile = "./example.md";// 请确保文件路径正确
    const targetElementId = "markdown-container"; // 页面中展示内容的容器 ID

    // 2. 检查 URL 中是否指定了 Markdown 文件
    const urlParams = new URLSearchParams(window.location.search);
    const markdownFile = urlParams.get("file") || defaultMarkdownFile;

    // 3. 调用渲染函数
    renderMarkdown(markdownFile, targetElementId);
});
