function volume_sphere() {
    //Write your code here
    let radius = document.getElementById('radius').value;
	return 4*(Math.PI)*(Math.pow(radius, 3))/3;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
