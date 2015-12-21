document.getElementById("myButton").onclick = function(){



var myNumber = Math.floor(Math.random()*5)+1;

if(myNumber == document.getElementById("myAnswer").value) {
	
	alert("You're right!");
	
} else {
	
	alert("Nope, that's wrong. Sorry! The answer was " + myNumber);
	
}
if(document.getElementById("myAnswer").value > 5){
	alert("Try again, but remember to pick a number between 1 and 5!");
} 
if(document.getElementById("myAnswer").value < 1){
	alert("Next time please choose a number between 1 and 5! Thanks!");
}
};
