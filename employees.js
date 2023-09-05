const { faker } = require('@faker-js/faker');

// name, fathers name, mothers name, marital status, gender, country, city, location, street, house number, ph no, dob
const generateEmployees = (startId, endId) => {
    var employees = []

    for(var id = startId; id <= endId; id++) {
         // var father_name = faker.person.firstName("male")
        // var mother_name = faker.person.firstName("female")\
        // var dob = faker.date.birthdate().toString().slice(0, 10),
        var gender = faker.person.sex()
        var fname = faker.person.firstName(gender)
        var lname = faker.person.lastName(gender)
    
        employees.push({
            "id": id,
            "empId": "TEMP" + id.toString().slice(2),
            "gender": gender.charAt(0).toUpperCase(),
            "firstName": fname,
            "lastName": lname,
            "dateOfBirth": faker.date.birthdate({min: 1900, max: 2005, mode: 'year'}),
            "email": fname.slice(0,4).toLowerCase() + lname + '@deloitte.com',
            "cellPhone": faker.phone.number('###-###-###'),
            "married": faker.datatype.boolean(),
            "country": faker.location.country(),
            "city": faker.location.city(),
            "state": faker.location.state(),
            "salary": faker.number.float({ min: 20000, max: 500000, precision: 0.1}),
            "jobTitle": faker.person.jobTitle()
        })
    }

    return employees;
}

module.exports = generateEmployees;