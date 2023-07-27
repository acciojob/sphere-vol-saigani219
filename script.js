function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
    let radius = document.getElementById('radius').value;
	let volume = 4*(Math.PI)*(Math.pow(radius, 3))/3;
	let input = document.getElementById('volume');

	input.value = volume;
	
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
