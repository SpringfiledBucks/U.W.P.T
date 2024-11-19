(async function () {
    const markdownContainer = document.getElementById('markdown-container');

    // 加载并解析 Markdown 文件
    async function loadMarkdown(file) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Unable to load ${file}`);
            const markdown = await response.text();
            const htmlContent = marked(markdown); // 使用 marked.js 解析
            markdownContainer.innerHTML = htmlContent;
        } catch (error) {
            markdownContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }

    // 动态加载指定的 Markdown 文件
    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const file = params.get('file') || "./example.md"; // 默认文件路径
        loadMarkdown(file);
    });
})();
