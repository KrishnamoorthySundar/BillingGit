/* Shivving (IE8 is not supported, but at least it won't look as awful)
/* ========================================================================== */

(function (document) {
	var
	head = document.head = document.getElementsByTagName('head')[0] || document.documentElement,
	elements = 'article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output picture progress section summary time video x'.split(' '),
	elementsLength = elements.length,
	elementsIndex = 0,
	element;

	while (elementsIndex < elementsLength) {
		element = document.createElement(elements[++elementsIndex]);
	}

	element.innerHTML = 'x<style>' +
		'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
		'audio[controls],canvas,video{display:inline-block}' +
		'[hidden],audio{display:none}' +
		'mark{background:#FF0;color:#000}' +
	'</style>';
	
	return head.insertBefore(element.lastChild, head.firstChild);
})(document);

/* Prototyping
/* ========================================================================== */

(function (window, ElementPrototype, ArrayPrototype, polyfill) {
	function NodeList() { [polyfill] }
	NodeList.prototype.length = ArrayPrototype.length;

	ElementPrototype.matchesSelector = ElementPrototype.matchesSelector ||
	ElementPrototype.mozMatchesSelector ||
	ElementPrototype.msMatchesSelector ||
	ElementPrototype.oMatchesSelector ||
	ElementPrototype.webkitMatchesSelector ||
	function matchesSelector(selector) {
		return ArrayPrototype.indexOf.call(this.parentNode.querySelectorAll(selector), this) > -1;
	};

	ElementPrototype.ancestorQuerySelectorAll = ElementPrototype.ancestorQuerySelectorAll ||
	ElementPrototype.mozAncestorQuerySelectorAll ||
	ElementPrototype.msAncestorQuerySelectorAll ||
	ElementPrototype.oAncestorQuerySelectorAll ||
	ElementPrototype.webkitAncestorQuerySelectorAll ||
	function ancestorQuerySelectorAll(selector) {
		for (var cite = this, newNodeList = new NodeList; cite = cite.parentElement;) {
			if (cite.matchesSelector(selector)) ArrayPrototype.push.call(newNodeList, cite);
		}

		return newNodeList;
	};

	ElementPrototype.ancestorQuerySelector = ElementPrototype.ancestorQuerySelector ||
	ElementPrototype.mozAncestorQuerySelector ||
	ElementPrototype.msAncestorQuerySelector ||
	ElementPrototype.oAncestorQuerySelector ||
	ElementPrototype.webkitAncestorQuerySelector ||
	function ancestorQuerySelector(selector) {
		return this.ancestorQuerySelectorAll(selector)[0] || null;
	};
})(this, Element.prototype, Array.prototype);

/* ========================================================================== */
/* ========================================================================== */
/* Helper Functions
/* ========================================================================== */
/* ========================================================================== */

//This script is for converting bill amount to word format
var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = 'In Words (Rupees):';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only ' : '';
    return str;
}

//This script is for calling the inwords function
function inwordsTrigger(){
	var billAmount = document.getElementById("billAmount").innerHTML;
	var words=inWords(billAmount);
	document.getElementById("idWordsTable").innerHTML=words;
}

//This script is for filling G.R Textiles at the end
function fillFor(){
	var forText = '<p style="float: right;padding-right: 20px;">For G.R. Textiles</p>';
	var temrsAndCondition = '<p style="float: left;padding-left: 20px;font-size: small;">Declaration:<br>We decalare that this invoice shows the<br> actual price of the Goods described and<br> that all particulars are true and correct.</p>';
	var ack='<p style="text-align: center;">Customer\'s Sign</p>';
	var sign='<br><br><p style="float: right;padding-right: 20px;font-size: small;">Authorised Signatory</p>';
	var ackDesc='<p style="text-align: center;font-size: small;">(Received Goods in proper condition)</p>';
	var totalText=forText+temrsAndCondition+ack+sign+ackDesc;
	document.getElementById("forPart").innerHTML=totalText;
}

//Change "Print" to "Thank you"
function printChanger(){
	document.getElementById("forButton").innerHTML='This is a Computer generated Invoice';
}

//Propogation of invoice num
function invoicePropagator() {
	var inv=document.getElementById('summa').value;
	localStorage.setItem("storageName",inv);
}
//This script loads the date in class meta table	
	function dateLoader(){
		var today = moment().format('YYYY-MM-DD');
		document.getElementById("theDate").value = today;
		//this is to propogate invoice typed in loginsuccessful page to begginingHTML page
		document.getElementById("invoice").innerHTML=localStorage.getItem("storageName");
	}
	

//This script disables keystrokes other than numbers, backspace, arrows and delete
function validate(evt) {
	var key = window.event ? event.keyCode : event.which;

	if (event.keyCode == 8 || event.keyCode == 46
	 || event.keyCode == 37 || event.keyCode == 39) {
	    return true;
	}
	else if ( key < 48 || key > 57 ) {
	    return false;
	}
	else return true;
}

//Populating products in drop down of new row
function populate(genereatedClassName){
	var generatedAppendText = '.'+genereatedClassName;
	$.ajax({
        url: "http://localhost:8080/products"
    }).then(function(data) {
       	for(var i=0;i<=data.length;i++){
       		$(generatedAppendText).append("<option>"+data[i].productName+"</option>");
    	}
    });
}

//counterForClassname is to give the class of the select to be different all the time so that it can be easily populated without populating the previous row
var counterForClassname=1;
function generateTableRow() {
	var emptyColumn = document.createElement('tr');
	var genereatedClassName='sel'+counterForClassname;
	var paramForemptyColumnDOTinnerHTML='<td><a class="cut">-</a><span contenteditable></span></td>' +
										'<td><select class="'+genereatedClassName+'"><option>Select a Product </option></select></td>'+
										'<td><span contenteditable><select><option>Select a size</option><option>L&XL</option><option>L</option><option>XL</option><option>XXL</option><option>XXXL</option></select></span></td>' +
										'<td><span></span><span contenteditable onkeypress=\'return validate(event)\'></span></td>' +
										'<td>₹<span contenteditable onkeypress=\'return validate(event)\'></span></td>' +
										'<td><span data-prefix>₹</span><span></span></td>';
	emptyColumn.innerHTML = paramForemptyColumnDOTinnerHTML;
	populate(genereatedClassName);
	counterForClassname++;
	return emptyColumn;
}

function parseFloatHTML(element) {
	return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
}

function parsePrice(number) {
	return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
}

//this is for counterTable updating on row added
var counterForSno=1;
function updatecounterTableOnAdd(){
	counterForSno = counterForSno + 1;
	document.getElementById('productCount').innerHTML=counterForSno;
}

//this is for counterTable updating on row removed
function updatecounterTableOnCut(){
	counterForSno = counterForSno - 1;
	document.getElementById('productCount').innerHTML=counterForSno;
}

/* Update Number
/* ========================================================================== */

function updateNumber(e) {
	var
	activeElement = document.activeElement,
	value = parseFloat(activeElement.innerHTML),
	wasPrice = activeElement.innerHTML == parsePrice(parseFloatHTML(activeElement));

	if (!isNaN(value) && (e.keyCode == 38 || e.keyCode == 40 || e.wheelDeltaY)) {
		e.preventDefault();

		value += e.keyCode == 38 ? 1 : e.keyCode == 40 ? -1 : Math.round(e.wheelDelta * 0.025);
		value = Math.max(value, 0);

		activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
	}

	updateInvoice();
}

/* Update Invoice
/* ========================================================================== */

function updateInvoice() {
	var total = 0;
	var cells, price, total, a, i;
	var totalPieces=0;
	// update inventory cells
	// ======================
	for (var a = document.querySelectorAll('table.inventory tbody tr'), i = 0; a[i]; ++i) {
		// get inventory row cells
		cells = a[i].querySelectorAll('span:last-child');

		// set price as cell[2] * cell[3]
		price = parseFloatHTML(cells[2]) * parseFloatHTML(cells[3]);
		
		// Update SNo whenever required
		(cells[0].innerHTML)=i+1;
		
		// add price to total
		total += price;
		// set total pieces quantity
		totalPieces = totalPieces + parseFloatHTML(cells[2]);
		
		// set row total
		cells[4].innerHTML = price;
	}
	document.getElementById('totalPieces').innerHTML=totalPieces;

	// update balance cells
	// ====================

	// get balance cells
	cells = document.querySelectorAll('table.balance td:last-child span:last-child');

	// set total
	cells[0].innerHTML = total;
	
	//set SGST as 2.5% of total
	cells[1].innerHTML = total*0.025;
	
	//set CGST as 2.5% of total
	cells[2].innerHTML = total*0.025;
	
	//calculation of rounded value
	var roundedVal = Math.round(total + total*0.05);
		
	//set roundOff
	//if is for checking and adding + symbol in front
	if((roundedVal-(total + total*0.05))>0){
		//toFixed is to limit digits after decimal places
		cells[3].innerHTML = "(+) "+(roundedVal-(total + total*0.05)).toFixed(2);
	}else{
		cells[3].innerHTML = "(-) "+((roundedVal-(total + total*0.05)).toFixed(2))*(-1);
	}
	
	//set Bill Amount
	cells[4].innerHTML = roundedVal;
	
	//call trigger
	inwordsTrigger();
	// set balance and meta balance
	//cells[2].innerHTML = document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(total - parseFloatHTML(cells[1]));

	// update prefix formatting
	// ========================

	//var prefix = document.querySelector('#prefix').innerHTML;
	//for (a = document.querySelectorAll('[data-prefix]'), i = 0; a[i]; ++i) a[i].innerHTML = prefix;

	// update price formatting
	// =======================

	for (a = document.querySelectorAll('span[data-prefix] + span'), i = 0; a[i]; ++i) if (document.activeElement != a[i]) a[i].innerHTML = parsePrice(parseFloatHTML(a[i]));
}

/* On Content Load
/* ========================================================================== */

function onContentLoad() {
	updateInvoice();

	var
	input = document.querySelector('input'),
	image = document.querySelector('img');

	function onClick(e) {
		var element = e.target.querySelector('[contenteditable]'), row;

		element && e.target != document.documentElement && e.target != document.body && element.focus();

		if (e.target.matchesSelector('.add')) {
			//checking whether there are 8 rows. if yes adding should not be allowed
			if(counterForSno<8){
				document.querySelector('table.inventory tbody').appendChild(generateTableRow());
				updatecounterTableOnAdd();
			}else{
				alert('Please dont add more than 8 rows');
			}
		}
		else if (e.target.className == 'cut') {updatecounterTableOnAdd
			row = e.target.ancestorQuerySelector('tr');

			row.parentNode.removeChild(row);
			updatecounterTableOnCut();
			
		}
		
		updateInvoice();
	}

	function onEnterCancel(e) {
		e.preventDefault();

		image.classList.add('hover');
	}

	function onLeaveCancel(e) {
		e.preventDefault();

		image.classList.remove('hover');
	}

	function onFileInput(e) {
		image.classList.remove('hover');

		var
		reader = new FileReader(),
		files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
		i = 0;

		reader.onload = onFileLoad;

		while (files[i]) reader.readAsDataURL(files[i++]);
	}

	function onFileLoad(e) {
		var data = e.target.result;

		image.src = data;
	}

	if (window.addEventListener) {
		document.addEventListener('click', onClick);

		document.addEventListener('mousewheel', updateNumber);
		document.addEventListener('keydown', updateNumber);

		document.addEventListener('keydown', updateInvoice);
		document.addEventListener('keyup', updateInvoice);

		input.addEventListener('focus', onEnterCancel);
		input.addEventListener('mouseover', onEnterCancel);
		input.addEventListener('dragover', onEnterCancel);
		input.addEventListener('dragenter', onEnterCancel);

		input.addEventListener('blur', onLeaveCancel);
		input.addEventListener('dragleave', onLeaveCancel);
		input.addEventListener('mouseout', onLeaveCancel);

		input.addEventListener('drop', onFileInput);
		input.addEventListener('change', onFileInput);
	}
}

window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);
