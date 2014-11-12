// student login
function student(){
	window.location = 'student.html'
}

// instructor login
function instructor(){
	window.location = 'instructor.html'
}

//clicked back button
function back_student(){
	window.location = 'student.html'
}

//clicked back button
function back_instructor(){
	window.location = 'instructor.html'
}

// forgot password button
function newPass(){
	//window.location = 'newPass.html'	
	window.location = 'reset.html'
}

// add rows to the student's course table
function addRowStud(){
	var table = document.getElementById("table");
	var courseID = document.getElementById("courseID").value;
	var numRows = table.rows.length - 2;
	
	var row = table.insertRow(numRows + 1);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	
	var chk = document.createElement("INPUT");
	chk.type = "checkbox";
	var tempStr = "chk" + (numRows + 1);
	chk.id = tempStr;
		
	cell0.appendChild(chk);
	cell0.width = "10px";
	cell1.id = "cell" + (numRows + 1);
	cell1.innerHTML = courseID;
	cell2.innerHTML = "Instructor";
	cell3.innerHTML = "Average Grade";
	
	numRows++;
}// end function addRowStud

function addRowInstr(){
	var table = document.getElementById("table");
	var numRows = table.rows.length - 2;
	var courseName = document.getElementById("courseName").value;
	var section = document.getElementById("section").value;
	
	var row = table.insertRow(numRows + 1);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	
	var chk = document.createElement("INPUT");
	chk.type = "checkbox";
		
	cell0.appendChild(chk);
	cell0.width = "10px";
	cell1.innerHTML = courseName;
	cell2.innerHTML = section;
	cell3.innerHTML = "0";
	cell4.innerHTML = "Course ID";
	
	numRowsInstr++;
}// end function addRowInstrdd rows to the instructor's course table

// drop the selected courses from the Student course table
function dropSelected(){
	var table = document.getElementById("table");
	var numRows = table.rows.length - 2;
	var isChecked;
	
	for(var i = 1; i <= numRows; i++){
		isChecked = table.rows[i].cells[0].childNodes[0].checked;
		
		if(isChecked){
			table.deleteRow(i);
			i--;
			numRows--;
		}
	}
}// end function dropSelected

// delete the selected courses from the Instructor course table
function deleteSelected(){
	var table = document.getElementById("table");
	var numRows = table.rows.length - 2;
	var isChecked;
	
	for(var i = 1; i < numRows + 1; i++){
		isChecked = table.rows[i].cells[0].childNodes[0].checked;
		
		if(isChecked){
			table.deleteRow(i);
			i--;
			numRows--;
		}
	}
}// end function dropSelected

// add selected courses to the archive list
function archive(){
	var table = document.getElementById("table");
	var archive = document.getElementById("archive");
	var numRows = table.rows.length - 2;
	
	var name, section, numStud, courseID, isChecked, row, cell0, cell1, cell2, cell3, cell4;
	
	for(var i = 1; i <= numRows; i++){
		isChecked = table.rows[i].cells[0].childNodes[0].checked;
		
		if(isChecked){
			name = table.rows[i].cells[1].innerHTML;
			section = table.rows[i].cells[2].innerHTML;
			numStud = table.rows[i].cells[3].innerHTML;
			courseID = table.rows[i].cells[4].innerHTML;
			
			row = archive.insertRow(2);
			cell0 = row.insertCell(0);
			cell1 = row.insertCell(1);
			cell2 = row.insertCell(2);
			cell3 = row.insertCell(3);
			cell4 = row.insertCell(4);
			
			var chk = document.createElement("INPUT");
			chk.type = "checkbox";
			
			cell0.appendChild(chk);
			cell0.width = "10px";
			cell1.innerHTML = name;
			cell2.innerHTML = section;
			cell3.innerHTML = numStud;
			cell4.innerHTML = courseID;
			
			table.deleteRow(i);
			i--;
			numRows--;
		}
	}
} // end function archive

// check all checkboxes in table
function checkAll(){
	var table = document.getElementById("table");
	var checkAll = table.rows[0].cells[0].childNodes[0].checked;
	var numRows = table.rows.length;
	
	for(var i = 0; i < numRows; i++){
		if(checkAll){
			table.rows[i].cells[0].childNodes[0].checked = true;
		}
		else{
			table.rows[i].cells[0].childNodes[0].checked = false;
		}
	}
} // end function checkAll






				   
	
