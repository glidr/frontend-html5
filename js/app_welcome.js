$(document).ready(function(){

	
	var login = function(){
		/*$.ajax({
			type: 'POST',
			url: 'http://api.glidr.ca:8080/login',
			data: {'email': $('#email').val(), 'password': $('#password').val()},
			success: function (res, status, xhr){
				localStorage.setItem("session-token",
					xhr.getResponseHeader("X-Session-Token"))
				//alert(res.token)
				document.location = "index.html"
			}
		})*/
		document.location = "home.html"
	};
	$("#name-submit").click(login)

	var gift = function(){
		$.ajax({
			type: 'GET',
			url: 'http://api.glidr.ca:8080/gifts',
			headers: {'X-Session-Token': localStorage.getItem('session-token')},
			success: function(res, status, xhr) {
				var gifts=res.gifts
				/*for (int i=0; i<gifts.length; i++) {

				}*/
				alert(JSON.stringify(res.gifts))
			}
		})
	};

	


})
