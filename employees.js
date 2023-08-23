const { faker } = require('@faker-js/faker');
const fs = require("fs");

const generateEmployees = (ids) => {
    var employees = []

    for(var id=1; id <= ids; id++) {
        var fname = faker.person.firstName()
        var lname = faker.person.lastName()
        var email = faker.internet.email()
        var cntry = faker.location.country()

        employees.push({
            "id": id,
            "firstName": fname,
            "lastName": lname,
            "email": email,
            "country": cntry
        })
    }

    return employees;
}

module.exports = generateEmployees;