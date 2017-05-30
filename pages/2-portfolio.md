---
title: Portfolio
layout: page
permalink: /portfolio/
group: top-nav
---
<div id='coverTarget' class='center'>
	<div id='tags'>
		<div id='platTags'>
			{% for tags in site.data.platformtags %}
			{% include tags.html content=tags %}
			{% endfor %}
		</div>
		<div id='bizTags'>
			{% for tags in site.data.biztags %}
			{% include tags.html content=tags %}
			{% endfor %}
		</div>
	</div>
	<div class='flex-container 3col flex' >
		{% for website in site.data.websites %}
		{% include website_tile.html website=website %}
		{% endfor %}
	</div>
	<div id='websiteViewer' style="display: none;" class="box clickable"></div>
</div>

<script>
			$("#platTags p").click(function(){
				if ($(this).hasClass('selected')) {
					$(this).removeClass("selected").css('background-color', '');
				} else {
					$(this).addClass("selected").css('background-color', '#BFBFBF').siblings().removeClass("selected").css('background-color', '');
				}
			});
			$("#bizTags p").click(function(){
				if ($(this).hasClass('selected')) {
					$(this).removeClass("selected").css('background-color', '');
				} else {
					$(this).addClass("selected").css('background-color', '#BFBFBF').siblings().removeClass("selected").css('background-color', '');
				}
			});

			function tagClick(e) {
				$('.' + e.target.id).show();
				if ($(e.target).hasClass('selected')) {
					$.each($(e.target).parent().siblings().children(), function (i, v) {
							if ($(v).hasClass('selected')) {
								$('.' + v.id).show();
								$.each($(e.target).siblings(), function (i, v) {
									$('.' + v.id).show();
								});
								$.each($(v).siblings(), function (i, v) {
									$('.' + v.id).hide();
								})
								return false;
							} else {
								$.each($(e.target).siblings(), function (i, v) {
									$('.' + v.id).show();
								});
							}
						});
					} else {
						$.each($(e.target).parent().siblings().children(), function (i, v) {
								if ($(v).hasClass('selected')) {
									$.each($(e.target).siblings(), function (i, v) {
										$('.' + v.id).hide();
									});
									$.each($(v).siblings(), function (i, v) {
										$('.' + v.id).hide();
										});
									return false;
								} else {
									$.each($(e.target).siblings(), function (i, v) {
										$('.' + v.id).hide();
									});
								}
						});
					}
				}

</script>

<!--<script src='{{site.baseurl}}/js/portfolio.js'></script>-->
