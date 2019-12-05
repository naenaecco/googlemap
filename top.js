// グローバルナビゲーション位置固定
$(function() {
	var nav = $('#header')
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	});
});


//フォトギャラリー
$(function(){
    $('#thumbnail li a').on('click',function(){
        $('#gallery img').before('<img src="'+
        $(this).attr('href')+'"alt="">');
        $('#gallery img:last').fadeOut('slow', function(){
            $(this).remove();
        });
        return false;
    });
});
