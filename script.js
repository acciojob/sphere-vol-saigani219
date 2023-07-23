function volume_sphere() {
    //Write your code here
    let radius = document.getElementById('radius').value;
	let volume = 4*(Math.PI)*(Math.pow(radius, 3))/3;
	document.getElementById('volume').value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
