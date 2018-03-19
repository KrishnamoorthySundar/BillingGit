$(document).ready(function() {
	var PORT_NUMBER =8080;
    $.ajax({
        url: "http://localhost:"+PORT_NUMBER+"/products"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$('.products').append("<tr><td>"+data[i].productId+"</td><td>"+data[i].productName+"</td></tr>");
    	}
    });
});