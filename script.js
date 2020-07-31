var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var tmp = '';
function generatepass(plength) {
    tmp = '';
    for(var i=0;i<plength;i++) {
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length));
        }
        return tmp;
}
function populateform(enterlength) {
    if(enterlength>=6) {
    	document.passGen.output.value = generatepass(enterlength);
	}
}
