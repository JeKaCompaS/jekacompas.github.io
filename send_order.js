$(document).ready(function() {
	
	//Отправляем форму
	$("form").submit(function( event ) {
		event.preventDefault();
		//console.log($(this).serialize());
		var data = $(this).serialize();
		console.log(data);
		$.ajax({
			url: 		'http://b969254k.bget.ru/order/php/send_order.php',
			type: 		"POST",
			data: 		data,
			success :	function() { 
				console.log("Заявка отправлена"); 
				alert("Заявка отправлена");
				$('form input[name="name"], form input[name="phone"]').val('');
			},
			error : 	function() { console.log("Заявка не отправлена"); }
		});
	});
});