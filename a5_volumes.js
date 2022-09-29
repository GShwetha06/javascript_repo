/*1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr

2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr
3
where r is the radius
3) Cone- Volume= πr
2h/3

where r is the radius and h is the height of the cone. */

  class Cylinder{
    constructor(radius, height){
      this.radius = radius;
      this.height = height;
    }

    getVolume(){
      return this.height * Math.PI * this.radius * this.radius;
    }
  }

  class Sphere{
    constructor(radius){
      this.radius = radius;
    }

    getVolume(){
      return (4/3)* Math.PI * this.radius * this.radius * this.radius;
    }
  }

  class Cone{
    constructor(radius, height){
      this.radius = radius;
      this.height = height;
    }

    getVolume(){
      return (Math.PI * this.radius * this.radius * this.height)/3;
    }
  }

  //Enter your inputs here

  let cylinder = new Cylinder(4, 8);
  console.log(cylinder.getVolume().toFixed(4));

  let sphere = new Sphere(4);
  console.log(sphere.getVolume().toFixed(4));

  let cone = new Cone(4,8);
  console.log(cone.getVolume().toFixed(4));