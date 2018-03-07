function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('btnSearch').click();
        return false;
    }
    return true;
}

function userAuthenticate(){
	var userName= document.getElementById('userName').value;
	var userPassword= document.getElementById('userPassword').value;
	if(userName=='admin' && userPassword=='admin'){
		window.location = "LoginSuccessfulPage.html";
	}else{
		alert('Authentication failed');
	}
}