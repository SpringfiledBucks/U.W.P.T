// 使用 markdown-it 解析 Markdown 内容
const md = window.markdownit();

// 解析并加载远程的 Markdown 文件
function loadMarkdownContent(url) {
    fetch(url)  // 从链接获取 Markdown 文件
        .then(response => response.text())  // 获取文本内容
        .then(data => {
            const htmlContent = md.render(data);  // 将 Markdown 转换为 HTML
            document.getElementById('content').innerHTML = htmlContent;  // 插入到页面中
        })
        .catch(error => {
            console.error('加载 Markdown 文件出错:', error);
        });
}

// 示例：加载指定的 Markdown 文件
document.addEventListener("DOMContentLoaded", function() {
    const url = new URL(window.location.href);  // 获取当前页面的 URL
    const markdownFile = url.searchParams.get("file") || "./example.md"; // 默认文件路径;  // 获取 URL 中的 "file" 参数

    if (markdownFile) {
        loadMarkdownContent(markdownFile);  // 加载 URL 中指定的 Markdown 文件
    } else {
        console.error("没有提供有效的 Markdown 文件链接参数。");
    }
});
