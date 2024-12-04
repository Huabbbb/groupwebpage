// 获取所有滚动容器
const scrollContainers = document.querySelectorAll('.scroll-container');

// 动态显示/隐藏滚动条的函数
function updateScrollBars() {
    scrollContainers.forEach(container => {
        // 获取当前容器中的图片项
        const items = container.querySelectorAll('.scroll-item');
        
        // 如果图片项数量超过 4，则显示滚动条，否则隐藏
        if (items.length > 3) {
            container.style.overflowX = 'auto'; // 显示滚动条
        } else {
            container.style.overflowX = 'hidden'; // 隐藏滚动条
        }
    });
}

// 页面加载时和窗口调整大小时调用
window.addEventListener('load', updateScrollBars);
window.addEventListener('resize', updateScrollBars);
