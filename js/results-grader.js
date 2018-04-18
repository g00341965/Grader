function gradeResult(){
	
	var myEnglishResult = parseInt(document.getElementById("value1").value);
	var myIrishResult = parseInt(document.getElementById("value2").value);
	var myMathsResult = parseInt(document.getElementById("value3").value);
	var englishGrade;
	
	if(!myEnglishResult){
		alert("Please enter a reuslt!");
	}
	else {
		if(myEnglishResult > 90){
			grade = 'A';
		} else if(myEnglishResult > 80){
			grade = 'B';
		} else {
			grade = 'F';
		}
		
		var message = 'Your result of ' + myEnglsihResult + ' gets you a grade ' + englishGrade;
		console.log(message);
		document.getElementById("resultsentence").innterHTML = message;
	}
}