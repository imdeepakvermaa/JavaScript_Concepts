

var name = "Deepak's Details";

basicDetails();
collegeDetails();

console.log(name);

function basicDetails(){
    var age = 22;
    var height = 175;
    console.table([age,height]);

    
}

function collegeDetails(){
    var collegeName = "NIET";
    var passoutYear = 2024;
    console.table([collegeName,passoutYear]);
    
    
}