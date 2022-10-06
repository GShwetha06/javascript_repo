/*Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune */

let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"HospitalC",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }]

    function filterForNumOfBeds(hospitals){
        let result = hospitals.filter(checkBeds);

        console.log(result);
    }

    function checkBeds(hospital){
        if(hospital.noOfBeds > 200)
        return hospital;
    }

    function filterForBedsAvailablity(hospitals){
        let result = hospitals.filter(checkBedsAvailability);

        console.log(result);
    }

    function checkBedsAvailability(hospital){
        if(hospital.availability === 'Yes')
        return hospital;
    }

    function filterForLocation(hospitals){
        let result = hospitals.filter(checkLocation);

        console.log(result);
    }

    function checkLocation(hospital){
        if(hospital.location === 'Pune')
        return hospital;
    }

    console.log("Hospitals with >200 No. of Beds: ")
    filterForNumOfBeds(hospitals);
    console.log("Hospitals with Availablity of Beds: ")
    filterForBedsAvailablity(hospitals);
    console.log("Hospitals in Pune")
    filterForLocation(hospitals);