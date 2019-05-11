
function createRequest() {
	var xhttp = new XMLHttpRequest();
	if ("withCredentials" in xhttp) {
		xhttp.open("POST", "http://127.0.0.1:1337/", true);
	} else if (typeof XDomainRequest != "undefined") {
		xhttp = new XDomainRequest();
		xhttp.open("POST", "http://127.0.0.1:1337/", true);
	} else {
		xhttp = null;
	}

	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       	// Typical action to be performed when the document is ready:
       	console.log("Response " + this.repsonseText);
    	}
	};

	return xhttp;
}


let request = createRequest();
if (!request) {
	console.log("Not supported");
} else {
	var params = {"Msg": "Hello World!"};
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(params));
}

