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
	<div id='websiteViewer' style="display: none;" class="box"></div>
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

			function showWordpress(e) {
				if ($(e.target).hasClass('selected')) {
					if ($('#NON-PROFIT').hasClass('selected')) {
						$('.SQUARESPACE').show();
						$('.NATIONBUILDER').show();
						$('.WORDPRESS').show();
						$('.BUSINESS').hide();
					} else if ($('#BUSINESS').hasClass('selected')) {
						$('.SQUARESPACE').show();
						$('.NATIONBUILDER').show();
						$('.WORDPRESS').show();
						$('.NON-PROFIT').hide();
					} else {
						$('.SQUARESPACE').show();
						$('.NATIONBUILDER').show();
						$('.WORDPRESS').show();
					}
				} else {
					if ($('#NON-PROFIT').hasClass('selected')) {
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide();
						$('.WORDPRESS').show();
						$('.BUSINESS').hide();
					} else if ($('#BUSINESS').hasClass('selected')) {
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide();
						$('.WORDPRESS').show();
						$('.NON-PROFIT').hide();
					} else {
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide();
						$('.WORDPRESS').show();
					}
				}
			}

			function showSquarespace(e) {
				if ($(e.target).hasClass('selected')) {
					if ($('#NON-PROFIT').hasClass('selected')) {
						$('.WORDPRESS').show();
						$('.NATIONBUILDER').show();
						$('.SQUARESPACE').show();
						$('.BUSINESS').hide();
					} else if ($('#BUSINESS').hasClass('selected')) {
						$('.WORDPRESS').show();
						$('.NATIONBUILDER').show();
						$('.SQUARESPACE').show();
						$('.NON-PROFIT').hide()
					} else {
						$('.WORDPRESS').show();
						$('.NATIONBUILDER').show();
						$('.SQUARESPACE').show();
					}
				} else {
					if ($('#NON-PROFIT').hasClass('selected')) {
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide();
						$('.SQUARESPACE').show();
						$('.BUSINESS').hide();
					} else if ($('#BUSINESS').hasClass('selected')) {
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide();
						$('.SQUARESPACE').show();
						$('.NON-PROFIT').hide();
					} else {
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide();
						$('.SQUARESPACE').show();
					}
				}
			}

			function showNationbuilder(e) {
				if ($(e.target).hasClass('selected')) {
					if ($('#NON-PROFIT').hasClass('selected')) {
						$('.SQUARESPACE').show();
						$('.WORDPRESS').show();
						$('.NATIONBUILDER').show();
						$('.BUSINESS').hide()
					} else if ($('#BUSINESS').hasClass('selected')) {
						$('.SQUARESPACE').show();
						$('.WORDPRESS').show();
						$('.NATIONBUILDER').show();
						$('.NON-PROFIT').hide()
					} else {
						$('.SQUARESPACE').show();
						$('.WORDPRESS').show();
						$('.NATIONBUILDER').show();
					}
				} else {
					if ($('#NON-PROFIT').hasClass('selected')) {
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').show();
						$('.BUSINESS').hide();
					} else if ($('#BUSINESS').hasClass('selected')) {
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').show();
						$('.NON-PROFIT').hide();
					} else {
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').show();
					}
				}
			}

			function showNonProfit(e) {
				if ($(e.target).hasClass('selected')) {
					if ($('#WORDPRESS').hasClass('selected')) {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide();
					} else if ($('#SQUARESPACE').hasClass('selected')) {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide();
					} else if ($('#NATIONBUILDER').hasClass('selected')) {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide();
					} else {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
					}
				} else {
					if ($('#WORDPRESS').hasClass('selected')) {
						$('.BUSINESS').hide();
						$('.NON-PROFIT').show();
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide()
					} else if ($('#SQUARESPACE').hasClass('selected')) {
						$('.BUSINESS').hide();
						$('.NON-PROFIT').show();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide()
					} else if ($('#NATIONBUILDER').hasClass('selected')) {
						$('.BUSINESS').hide();
						$('.NON-PROFIT').show();
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide()
					} else {
						$('.BUSINESS').hide();
						$('.NON-PROFIT').show();
					}
				}
			}

			function showBusiness(e) {
				if ($(e.target).hasClass('selected')) {
					if ($('#WORDPRESS').hasClass('selected')) {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide();
					} else if ($('#SQUARESPACE').hasClass('selected')) {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide();
					} else if ($('#NATIONBUILDER').hasClass('selected')) {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide();
					} else {
						$('.NON-PROFIT').show();
						$('.BUSINESS').show();
					}
				} else {
					if ($('#WORDPRESS').hasClass('selected')) {
						$('.BUSINESS').show();
						$('.NON-PROFIT').hide();
						$('.SQUARESPACE').hide();
						$('.NATIONBUILDER').hide();
					} else if ($('#SQUARESPACE').hasClass('selected')) {
						$('.BUSINESS').show();
						$('.NON-PROFIT').hide();
						$('.WORDPRESS').hide();
						$('.NATIONBUILDER').hide();
					} else if ($('#NATIONBUILDER').hasClass('selected')) {
						$('.BUSINESS').show();
						$('.NON-PROFIT').hide();
						$('.SQUARESPACE').hide();
						$('.WORDPRESS').hide();
					} else {
						$('.BUSINESS').show();
						$('.NON-PROFIT').hide();
					}
				}
			}


</script>

<!--<script src='{{site.baseurl}}/js/portfolio.js'></script>-->
