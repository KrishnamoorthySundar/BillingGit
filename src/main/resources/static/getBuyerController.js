$(document).ready(function() {
	var PORT_NUMBER =8080;
    $.ajax({
        url: "http://localhost:"+PORT_NUMBER+"/buyers"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$('.products').append("<tr><td>"+data[i].buyerId+"</td><td>"+data[i].buyerName+"</td><td>"+data[i].buyerGst+"</td><td>"+data[i].buyerStreet+"</td><td>"+data[i].buyerDistrict+"</td><td>"+data[i].buyerState+"</td><td>"+data[i].buyerCode+"</td><td>"+data[i].buyerMobile+"</td></tr>");
    	}
    });
});