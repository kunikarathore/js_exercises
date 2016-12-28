// to find the inputs = range
var inputs = document.querySelectorAll('.controls input');

//=================================== to update the value ===================================
function updateValue(){
 // to add the suffix i.e. px
	var suffix =this.dataset.sizing || '';

 // new value / changed value
	var newvalue =this.value + suffix;
		//console.log(newvalue);

// name of the div/input
		var name = this.name

// change value of the property
	document.documentElement.style.setProperty("--"+name, newvalue);
	
}

// ======================= function runs on the load of the page===============================
function onStart(){
	//inputs[0].addEventListener('change', updateValue);		

for (var i = 0; i < 3; i++) {
// change of the value
	inputs[i].addEventListener('change', updateValue);

// change on the movement of mouse
	inputs[i].addEventListener('mousemove', updateValue);	
}

}
