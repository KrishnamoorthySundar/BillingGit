//Populating products in drop down of the first generated row
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/buyers"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$('.buyerSel').append("<option>"+data[i].buyerName+"</option>");
    	}
    });
});
