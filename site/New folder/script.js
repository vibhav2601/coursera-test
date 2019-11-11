function sayHello() {
	var a= document.getElementById('name').value;
	var message="Hello "+ a;
	var g="<button>cLICK HERE</button>";
if (a=="jaan") {
document.getElementById('j').textContent="Hey it's me " + a;
document.getElementById("j").innerHTML= g;

}
else{
	document.getElementById('j').textContent="Wrong input " + a;
}
}

