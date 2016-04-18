

$(document).ready(function(){
$('.tt li').click(function(){
	var tab_id = $(this).attr('data-tab');
	$(this).addClass('current');

$('.tt li').removeClass('current')
$('.list').removeClass('current');
$("#"+tab_id).addClass('current');

});
});
