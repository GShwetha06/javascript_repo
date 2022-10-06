/*Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display. */

let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
    ];

    function calcGrades(students){
        let map = new Map();
        for(let student of students ){
            let marks = parseInt(student.marks);
            if(marks >=90){
                var arr = [];
                arr.push({name: student.name, marks: student.marks})
                map.set('A',arr);
            }else if(marks >=80){
                map.set('B', {name: student.name, marks: student.marks});
            }
            else if(marks >=70){
                map.set('C', {name: student.name, marks: student.marks});
            }
            else if(marks >=60){
                map.set('D', {name: student.name, marks: student.marks});
            }
            else if(marks >=50){
                map.set('E', {name: student.name, marks: student.marks});
            }
            else 
                map.set('F', {name: student.name, marks: student.marks});
        }
        for(let entry of map)
        console.log(entry);
    }

    calcGrades(students);

