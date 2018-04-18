function gradeResult(){
	
	var myEnglishResult = parseInt(document.getElementById("value1").value);
	var myIrishResult = parseInt(document.getElementById("value2").value);
	var myMathsResult = parseInt(document.getElementById("value3").value);
	
	var englishGrade;
	var irishGrade;
	var mathsGrade;
	
	if(!myEnglishResult){
		alert("Please enter a reuslt!");
	}
	else {
		if(myEnglishResult > 90){
			englishGrade = 'A';
		} else if(myEnglishResult > 80){
			englishGrade = 'B';
		} else {
			englishGrade = 'F';
		}
	}	
		
	if(!myIrishResult){
		alert("Please enter a result!");
	}
	else {
		if(myIrishResult > 90){
			irishGrade = 'A';
		} else if(myIrishResult > 80){
			irishGrade = 'B';
		} else {
			irishGrade = 'F';
		}
	}	
		
	if(!myMathsResult){
		alert("Please enter a result!");
	}
	else {
		if(myMathsResult >90){
			mathsGrade = 'A';
		} else if(myMathsResult > 80){
			mathsGrade = 'B';
		} else {
			mathsGrade = 'F';
		}
		
		//Only output to the HTML File if a result for that subject is entered
		console.log(message);
		document.getElementById("resultsentence").innerHTML = message;
	}
}