const form = document.querySelector(".isi");
let nama_kamu = document.querySelector('#nama_kamu');
let nama_pacar = document.querySelector('#nama_pacar');

form.addEventListener("submit", (e)=> {
	e.preventDefault();
	console.log("Clicked");
	console.log(nama_kamu.value);

let text = nama_kamu.value;
let length = text.length;
let result = text.toString().substring(1, length);

let text2 = nama_pacar.value;
let length2 = text2.length;
let result2 = text2.toString().substring(2, length);

console.log(result);

let total = result + result2;

document.getElementById("hasil").innerHTML = total;
}
	)