
var rotationSpeed = 0.001;
var myBox = document.getElementById('myBox');

function spin(){
	myBox.object3D.rotation.x += rotationSpeed;
	myBox.object3D.rotation.y += rotationSpeed;
	myBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myBox.object3D.rotation);
}

setInterval(spin, 10);