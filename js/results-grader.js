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
		} else if (myEnglishResult > 70){
			englishGrade = 'B-';
		} else if (myEnglishResult > 60){
			englishGrade = 'C';
		} else if (myEnglishResult > 50){
			englishGrade = 'C-'; 
		} else if (myEnglishResult > 40){
			englishGrade = 'D';
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
		} else if (myIrishResult > 70){
			irishGrade = 'B-';
		} else if (myIrishResult > 60){
			irishGrade = 'C';
		} else if (myIrishResult > 50){
			irishGrade = 'C-'; 
		} else if (myIrishResult > 40){
			irishGrade = 'D';
		} else {
			irishGrade = 'F';
		}
	}	
		
	if(!myMathsResult){
		alert("Please enter a result!");
	}
	else {
		if(myMathsResult > 90){
			mathsGrade = 'A';
		} else if(myMathsResult > 80){
			mathsGrade = 'B';
		} else if (myMathsResult > 70){
			mathsGrade = 'B-';
		} else if (myMathsResult > 60){
			mathsGrade = 'C';
		} else if (myMathsResult > 50){
			mathsGrade = 'C-'; 
		} else if (myMathsResult > 40){
			mathsGrade = 'D';
		} else {
			mathsGrade = 'F';
		}
	}	
	
		//Only output to the HTML File if a result for that subject is entered
		
		var englishMessage = 'Your result of ' + myEnglishResult + ' gets you a grade ' + englishGrade;
		console.log(englishMessage);
		document.getElementById("englishresultsentence").innerHTML = englishMessage;
		
		var irishMessage = 'Your result of ' + myIrishResult +  ' gets you a grade ' + irishGrade;
		console.log(irishMessage);
		document.getElementById("irishresultsentence").innerHTML = irishMessage;
		
		var mathsMessage = 'Your result of ' + myMathsResult +  ' gets you a grade ' + mathsGrade;
		console.log(mathsMessage);
		document.getElementById("mathsresultsentence").innerHTML = mathsMessage;
		
	
		
	
}