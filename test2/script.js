// 返回顶部按钮的功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 检测页面滚动，动态更改导航栏的背景透明度
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {  // 滚动距离大于100px时
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
