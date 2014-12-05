head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
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
});