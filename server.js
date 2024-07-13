const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8080;

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.telephone = faker.number.int();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.direction = {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
        };
    }

}

const users = new Usuario();
const companies = new Empresa();
const arrayUsersCompanies = [users, companies];

app.get("/users", (req, res) => {
    return res.status(200).json(users);
});

app.get("/companies", (req, res) => {
    return res.status(200).json(companies);
});

app.get("/user-company", (req, res) => {
    return res.status(200).json(arrayUsersCompanies);
});


app.listen(port, () => 
    console.log(`conexion con el server en el puerto ${port}`)
);