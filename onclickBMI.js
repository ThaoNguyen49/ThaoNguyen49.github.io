function init(){
	var btn = document.getElementById('send');
	btn.onclick = bmiCalc;
	var clearbtn = document.getElementById('clear');
	clearbtn.onclick = reload;
}

function reload(){
	window.location.reload();
}


function bmiCalc(){
	var weight = document.getElementById('kg').value;
	var height = document.getElementById('cm').value;

	var bmi = (weight/(height*height/10000)).toFixed(2);

	document.getElementById('output').innerHTML = bmi;

	if (bmi<18.6){
		output.innerHTML = "<span style='color: #0cada8'>RESULT: Underweight: </span>" + bmi;
	}else if(bmi>= 18.6 && bmi<24.9){
		output.innerHTML = "<span style='color: #0cada8'>RESULT: Normal: </span>" + bmi;
	}else{
		output.innerHTML = "<span style='color: #0cada8'>RESULT: Overweight: </span>" + bmi;
	}

}

window.onload = init;