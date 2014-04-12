$(document).ready(function(){
	var container1 = document.getElementById('flipone');
	Hammer(container1).on('doubletap', function() {
		$('#flipone').toggleClass('hover');
	} );

	var container2 = document.getElementById('fliptwo');
	Hammer(container2).on('doubletap', function() {
		$('#fliptwo').toggleClass('hover');
	} );

	var container3 = document.getElementById('flipthree');
	Hammer(container3).on('doubletap', function() {
		$('#flipthree').toggleClass('hover');
	} );

	var container4 = document.getElementById('flipfour');
	Hammer(container4).on('doubletap', function() {
		$('#flipfour').toggleClass('hover');
	} );

	$(".glyphicon").css("visibility", "hidden")

	var send_gift = function(gift_id, callback) {
		/*$.ajax({
			type: 'POST',
			url: 'http://api.glidr.ca:8080/gifts',
			headers: {'X-Session-Token': localStorage.getItem('session-token')},
			data: {'id': gift_id},
			success: function(res, status, xhr) {
				if (res.result == 1) {
					// TODO: Modal
					console.log("Success")
					callback()
				}
			}
		})*/
		callback()
	}

	var plane = document.getElementsByClassName('plane');
	for ( var i = 0; i < plane.length; i++ ) {
		Hammer(plane[i]).on('tap', function(evt) {
			var target = evt.currentTarget;

			send_gift(1, function(){
				if ( target == plane[0] ) {
					$('.sent p').text('Congrats! You just sent someone an awesome app. Thank you for sending kindness');
				} else if ( target == plane[1] ) {
					$('.sent p').text('Congrats! You sent someone an awesome song. Thank you for sending kindness');
				} else if ( target == plane[2] ) {
					$('.sent p').text('Congrats! You just sent someone a coffee. Thank you for sending kindness');
				} else if (target == plane[3] ) {
					$('.sent p').text('Congrats! You just sent someone a treat. Thank you for sending kindness');
				} else {

				}
				$('.flip-container').addClass('slideOutRight', 2000);
				$('.sent').fadeIn('200', function() {
					$('.glider').addClass('rollIn');
				});
				$('.container').fadeOut();	
			})
		} );
	}

	/*if (localStorage.getItem("session-token")) {
		setInterval(function(){
			$.ajax({
				type: 'GET',
				url: 'http://api.glidr.ca:8080/gifts/inbox',
				headers: {'X-Session-Token': localStorage.getItem('session-token')},
				success: function(res, status, xhr) {
					if (res.gifts.length > 0) {
						console.log("You just received a gift!")

						$(".glyphicon").css("visibility", "visible")

						for (var i=0;i<res.gifts.length;i++) {
							$.ajax({
								type: 'GET',
								url: ('http://api.glidr.ca:8080/gifts/inbox/' + res.gifts[i]._id+'/viewed'),
								headers: {'X-Session-Token': localStorage.getItem('session-token')},
							})
						}
					}
				}
			})
			console.log("One poll" + localStorage.getItem("session-token"))
		}, 5000);

		$(".glyphicon").click(function(){
			$('.sent p').text('Congratulations! You just received a free Starbucks coffee gift')

			$('.flip-container').addClass('slideOutRight', 2000);
			$('.sent').fadeIn('200', function() {
				$('.glider').addClass('rollIn');
			});
			$('.container').fadeOut();
		})
	}*/

});
