$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/products"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$('.products').append("<tr><td>"+data[i].productId+"</td><td>"+data[i].productName+"</td></tr>");
    	}
    });
});