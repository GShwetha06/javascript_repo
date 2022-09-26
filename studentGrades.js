/* 2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.*/

//Enter your marks here to get the grades.
gradesPrinter(86);

function gradesPrinter(marks){

     switch(marks){
        case (marks>=91 && marks <=100): console.log("S grade");
                                         break;
        case (marks>=81 && marks <=90): console.log("A grade");
                                         break;
        case (marks>=71 && marks <=80): console.log("B grade");
                                         break;
        case (marks>=61 && marks <=70): console.log("C grade");
                                         break;
        case (marks>=51 && marks <=60): console.log("D grade");
                                         break;
        case (marks>=41 && marks <=50): console.log("E grade");
                                         break;
        case (marks==0 && marks <=40): console.log("Failed");
                                         break;
        deault: console.log("Invalid marks");
     }
}
