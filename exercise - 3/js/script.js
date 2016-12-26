var inputs = document.querySelectorAll('.controls input');
//console.log(inputs);

function updateValue(){
 	//console.log(this.value);
	var suffix =this.dataset.sizing || '';
	//console.log(suffix);
	//console.log(this.name);
	var newvalue =this.value + suffix;
		//console.log(newvalue);
		var name = this.name
	document.documentElement.style.setProperty("--"+name, newvalue);
	
}


function onStart(){
	//inputs[0].addEventListener('change', updateValue);		

for (var i = 0; i < 3; i++) {
	//console.log(inputs);
	inputs[i].addEventListener('change', updateValue);
	inputs[i].addEventListener('mousemove', updateValue);	
}

}
