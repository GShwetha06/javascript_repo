//Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

let side1 = 3;
let side2 = 3;
let side3 = 5;

 let valid = ((side1+side2)>side3)&&((side2+side3)>side1)&&((side3+side1)>side2);

if (valid) {
  console.log("Its a valid Triangle");
}else{
  console.log("Its not a valid Triangle")
}

if(side1==side2&&side2==side3){
  console.log("equilateral Triangle");
}else if(side1==side2||side2==side3||side3==side1){
  console.log("isosceles triangle")
}else{
  console.log("scalene triangle");
}