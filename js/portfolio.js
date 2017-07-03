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

				function eventFire(el, etype){
				  if (el.fireEvent) {
				    el.fireEvent('on' + etype);
				  } else {
				    var evObj = document.createEvent('Events');
				    evObj.initEvent(etype, true, false);
				    el.dispatchEvent(evObj);
				  }
				}

				function getParameterByName(name, url) {
				    if (!url) url = window.location.href;
				    name = name.replace(/[\[\]]/g, "\\$&");
				    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				        results = regex.exec(url);
				    if (!results) return null;
				    if (!results[2]) return '';
				    return decodeURIComponent(results[2].replace(/\+/g, " "));
				}
				if (getParameterByName('site')) {
					eventFire(document.getElementById(getParameterByName('site')), 'click');
				}
				if (getParameterByName('btag')) {
					console.log(getParameterByName('btag'));
					eventFire(document.getElementById(getParameterByName('btag')), 'click');
				}
				if (getParameterByName('ptag')) {
					console.log(getParameterByName('ptag'));
					eventFire(document.getElementById(getParameterByName('ptag')), 'click');
				}
