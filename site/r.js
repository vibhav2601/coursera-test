
function makeultiplier(was) {
	var b=function k(j) {
		return was+j;
	}
	return b;
}
var a=makeultiplier(3);
console.log(a(5));