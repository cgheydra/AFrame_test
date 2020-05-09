
var rotationSpeed = 0.001;
var growspeed = 1.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);

function grow(){
	myOtherBox.object3D.scale.x += growspeed;
	myOtherBox.object3D.scale.y += growspeed;
	myOtherBox.object3D.scale.z += growspeed;
	//console.log(myOtherBox.object3D.scale);
}


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
});

//clickevent uses the fuse om mobile
myOtherBox.addEventListener('click', function(){
	grow();
	console.log('grew');
});