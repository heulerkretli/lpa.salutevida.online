const clickid = '{subid}';
const address = `${window.location.protocol}//${window.location.hostname}?_update_tokens=1&sub_id=${clickid}`;


document.addEventListener('DOMContentLoaded', function(){
	var tries = 0
	
	let checkInterval = setInterval(function() {
		let fbp = getCookie('_fbp');
		
		if(fbp) {
			clearInterval(checkInterval);
			createPixel(`${address}&sub_id_8=`+fbp)
		}
		
		if(tries > 5){
			clearInterval(checkInterval);
		}else
			tries += 1;
	}, 500);
});


function getCookie(name) {
	let value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	}
	
	return null;
}

function createPixel(url){
	var img = document.createElement('img');
	img.class = 'event';
	img.src = url;
	img.referrerPolicy = 'no-referrer-when-downgrade';
	img.style.display = 'none';
	
	document.body.appendChild(img);
}