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

function buyerDetailsloader(){
	var buyerName = document.getElementById('selectedBuyer').value;
	subLoader1(buyerName);
}

function subLoader1(buyerName){
	var urll="http://localhost:8080/getOneBuyer?buyerName="+buyerName;
	$.ajax({
        url: urll
    }).then(function(data) {
    	if(data!=null){
    		$('.standdstct').empty();
    		$('.stateandcode').empty();
    		$('.mob').empty();
    		$('.gst').empty();
    		$('.standdstct').append(data.buyerStreet+","+data.buyerDistrict);
    		$('.stateandcode').append(data.buyerState+",Code: "+data.buyerCode);
    		$('.mob').append(data.buyerMobile);
    		$('.gst').append(data.buyerGst);
    	}
    });
}
