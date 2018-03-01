$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/products"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$('.sel').append("<option>"+data[i].productName+"</option>");
    	}
    });
});