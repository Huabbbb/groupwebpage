// 下方新闻按年份普通排列；顶部大图自动读取 News 区域的全部新闻。
(function () {
    'use strict';

    var AUTO_PLAY_DELAY = 4000;
    var containers = document.querySelectorAll('.scroll-container');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var carousel = document.querySelector('.news-carousel');
    var sourceItems = document.querySelectorAll('#News .box.alt .scroll-item');
    var currentIndex = 0;
    var timer = null;
    var paused = false;

    function modalIsOpen() {
        return Array.prototype.some.call(document.querySelectorAll('.modal'), function (modal) {
            return window.getComputedStyle(modal).display !== 'none';
        });
    }

    function updateScrollBars() {
        containers.forEach(function (container) {
            container.style.overflowX = container.scrollWidth > container.clientWidth + 1
                ? 'auto'
                : 'hidden';
        });
    }

    if (carousel && sourceItems.length) {
        var carouselImage = carousel.querySelector('.news-carousel-image');
        var carouselCaption = carousel.querySelector('.news-carousel-caption');
        var previousButton = carousel.querySelector('.news-carousel-previous');
        var nextButton = carousel.querySelector('.news-carousel-next');
        var dotsContainer = carousel.querySelector('.news-carousel-dots');
        var slides = Array.prototype.map.call(sourceItems, function (item) {
            return {
                image: item.querySelector('.scroll-image'),
                caption: item.querySelector('.scroll-text')
            };
        }).filter(function (slide) {
            return slide.image !== null;
        });

        function render() {
            var slide = slides[currentIndex];

            carouselImage.src = slide.image.src;
            carouselImage.alt = slide.caption ? slide.caption.textContent.trim() : slide.image.alt;
            carouselCaption.textContent = slide.caption ? slide.caption.textContent.trim() : '';
            carouselCaption.hidden = carouselCaption.textContent === '';

            Array.prototype.forEach.call(dotsContainer.children, function (dot, index) {
                dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
            });
        }

        function show(index) {
            currentIndex = (index + slides.length) % slides.length;
            render();
        }

        function start() {
            if (timer !== null) window.clearInterval(timer);
            if (reduceMotion.matches || slides.length < 2) return;

            timer = window.setInterval(function () {
                if (!paused && !document.hidden && !modalIsOpen()) show(currentIndex + 1);
            }, AUTO_PLAY_DELAY);
        }

        slides.forEach(function (slide, index) {
            var dot = document.createElement('button');
            dot.className = 'news-carousel-dot';
            dot.type = 'button';
            dot.setAttribute('aria-label', 'Show news ' + (index + 1));
            dot.addEventListener('click', function () {
                show(index);
                start();
            });
            dotsContainer.appendChild(dot);
        });

        previousButton.addEventListener('click', function () {
            show(currentIndex - 1);
            start();
        });

        nextButton.addEventListener('click', function () {
            show(currentIndex + 1);
            start();
        });

        carouselImage.addEventListener('click', function () {
            slides[currentIndex].image.click();
        });

        carousel.addEventListener('mouseenter', function () { paused = true; });
        carousel.addEventListener('mouseleave', function () { paused = false; });
        carousel.addEventListener('focusin', function () { paused = true; });
        carousel.addEventListener('focusout', function () { paused = false; });
        carousel.addEventListener('touchstart', function () { paused = true; }, { passive: true });
        carousel.addEventListener('touchend', function () { paused = false; }, { passive: true });

        render();
        start();
    } else if (carousel) {
        carousel.hidden = true;
    }

    window.addEventListener('load', updateScrollBars);
    window.addEventListener('resize', updateScrollBars);
})();
