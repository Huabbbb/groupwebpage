var modal = document.getElementById("myModal");
				var modalImg = document.getElementById("img01");
				var closeBtn = document.getElementsByClassName("close")[0];
		
				// 获取所有的图片元素
				var images = document.querySelectorAll(".scroll-image");
				var currentIndex = 0;
		
				// 打开弹窗并显示当前点击的图片
				images.forEach((img, index) => {
				img.onclick = function () {
					modal.style.display = "block";
					modalImg.src = img.src;
					currentIndex = index;
				};
				});
		
				// 关闭弹窗
				closeBtn.onclick = function () {
				modal.style.display = "none";
				};
		
				// 点击前一张图片
				document.querySelector(".prev").onclick = function () {
				currentIndex = (currentIndex - 1 + images.length) % images.length;
				modalImg.src = images[currentIndex].src;
				};
		
				// 点击后一张图片
				document.querySelector(".next").onclick = function () {
				currentIndex = (currentIndex + 1) % images.length;
				modalImg.src = images[currentIndex].src;
				};