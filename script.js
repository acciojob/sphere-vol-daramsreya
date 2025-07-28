function volume_sphere(event) {
	event.preventDefault();
    //Write your code here
	const r=parseFloat(document.getElementById("radius").value);
	const v=document.getElementById("volume");
	if (isNaN(r) || r < 0) {
        alert("Please enter a valid non-negative number for radius.");
        v.value = "";
        return;
    }
	const vol= (4/3)* Math.PI *Math.pow(r,3);
	v.value=vol.toFixed(4);
} 

window.onload =function(){ document.getElementById('MyForm').onsubmit = volume_sphere; };
