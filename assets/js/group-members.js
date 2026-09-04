(function () {
	'use strict';

	var memberLists = document.querySelectorAll('#main .posts');

	memberLists.forEach(function (list, listIndex) {
		list.classList.add('member-list');

		list.querySelectorAll(':scope > article').forEach(function (article, memberIndex) {
			var heading = article.querySelector(':scope > h3');

			if (!heading) return;

			var detail = document.createElement('div');
			var button = document.createElement('button');
			var detailId = 'member-details-' + listIndex + '-' + memberIndex;
			var originalChildren = Array.prototype.slice.call(article.children);

			detail.className = 'member-details';
			detail.id = detailId;
			detail.hidden = true;

			button.className = 'member-toggle';
			button.type = 'button';
			button.innerHTML = heading.innerHTML;
			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-controls', detailId);

			originalChildren.forEach(function (child) {
				if (child !== heading) detail.appendChild(child);
			});

			heading.replaceWith(button);
			article.appendChild(detail);

			button.addEventListener('click', function () {
				var willOpen = button.getAttribute('aria-expanded') !== 'true';

				document.querySelectorAll('.member-toggle[aria-expanded="true"]').forEach(function (openButton) {
					openButton.setAttribute('aria-expanded', 'false');
					document.getElementById(openButton.getAttribute('aria-controls')).hidden = true;
				});

				if (willOpen) {
					button.setAttribute('aria-expanded', 'true');
					detail.hidden = false;
				}
			});
		});
	});
})();
