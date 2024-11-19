// 滚动动画
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const threshold = window.innerHeight / 1.5;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < threshold) {
            section.classList.add('visible');
        }
    });
});

// 多语言切换 (需扩展为多语言库)
function changeLanguage(lang) {
    if (lang === 'zh') {
        document.documentElement.lang = 'zh-CN';
    } else if (lang === 'en') {
        document.documentElement.lang = 'en';
    }
}
// 切换侧边栏显示状态
function toggleSideMenu(side) {
    const menu = document.getElementById(`${side}-menu`);
    menu.classList.toggle('open');
}

