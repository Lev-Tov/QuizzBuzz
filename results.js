function calculResult(){
	var elem1 = document.getElementById('Q1').value;
	console.log(elem1);
	var value1=parseInt(elem1);

	// console.log(typeof(value1));
	// console.log(value1);
// ------------------------------------------------

var elem2 = document.getElementById('Q2').value;
	console.log(elem2);
	var value2=parseInt(elem2);

	// console.log(typeof(value2));
	// console.log(value2);

// ------------------------------------------------

var elem3 = document.getElementById('Q3').value;
	console.log(elem3);
	var value3=parseInt(elem3);

console.log(typeof(value3));
console.log(value3);

// // ------------------------------------------------

var elem4 = document.getElementById('Q4').value;
console.log(elem4);
var value4=parseInt(elem4);

console.log(typeof(value4));	
console.log(value4);

//---------------------------------------------------------
// var elem5 = document.getElementById('Q5').value;
// 	console.log(elem5);
// 	var value1=parseInt(elem5);

// 	console.log(typeof(value5));
// 	console.log(value5);

var Score= value1+value2+value3+value4;



if (Score<5){
	alert(("Your score is "+" ")+ Score +(" If you are interested you can come ask me interesting book about him, it seems that you do not really who is Vladimir Putin"));
}



else if (Score>6 && Score<10){
		alert(("Your score is "+" ")+ Score +(" Your knowledge about the current russian President are very basic !"));
}

else {
	alert(("Your score is" +" ")+ Score +("Excellent you are eligible to receive the status of Russian Spy !"));
}

}




