$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/buyers"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$('.products').append("<tr><td>"+data[i].buyerId+"</td><td>HELLO </td></tr>");
    	}
    });
});