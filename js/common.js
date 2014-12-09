head.ready(function() {

	$(document).on("click", function(){
		$(".js-select-list").slideUp(100);
		$(".js-select").removeClass("is-active");
	});
	$('.js-raty').raty({
		score: function() {
		    return $(this).attr('data-score');
		},
		hints: ['1', '2', '3', '4', '5'],
		path:      'img/',
		starOn:    'corn-act.png',
		starOff:   'corn.png'
	});
	$('.js-raty-readonly').raty({
		readOnly: true,
		score: function() {
		    return $(this).attr('data-score');
		},
		hints: ['1', '2', '3', '4', '5'],
		path:      'img/',
		starOn:    'corn-act.png',
		starOff:   'corn.png'
	});
	// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
        if ($(this).parents(".js-select").hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            $(this).parents(".js-select").toggleClass("is-active");
            $(this).parents(".js-select").find(".js-select-list").slideToggle(100);
        }
       
    });
    $("body").on("click",".js-select-list a",function() {
        var val = $(this).attr("href");
        var text = $(this).text();
        $(this).parents(".js-select").find(".js-select-text").text(text);
        $(this).parents(".js-select").find("option").removeAttr("selected");
        $(this).parents(".js-select").find('option[value="'+val+'"]').attr("selected", "selected");
        $(this).parents(".js-select-list").find("a").removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parents(".js-select").removeClass("is-active").removeClass("is-empty");
        $(this).parents(".js-select-list").slideUp(100);
        return false;
        
    });
});