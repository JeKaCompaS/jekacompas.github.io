$(document).ready(function() {
	
	var product = $("input[name='product']:first").val();
	var unic = 0;
	
	if (typeof ($.cookie('product'))=="undefined"){
		var currentDate = new Date();
		var expirationDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1, 0, 0, 0);
		$.cookie('product', product, { expires: expirationDate, path: '/' });
		unic = 1;
	};

	var data;
	data 	= "product="    		+ product;
	data 	= data + "&ip="         + $("textarea[name='ip']:first").val();
	data 	= data + "&user_agent=" + navigator.userAgent;
	data 	= data + "&unic="		+ unic;
	data 	= data + "&refferer="   + $("textarea[name='refferer']:first").val();
	
	$.ajax({
		url: 		'http://b969254k.bget.ru/order/php/send_stat.php',
		type: 		"POST",
		data: 		data,
		success :	function() { console.log("Статистика обновлена"); },
		error : 	function() { console.log("Статистика не обновлена"); }
	});
});