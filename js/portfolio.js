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
