import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));


const createUser = () => {
    const newFake = {
        _id: faker.random.numeric(5),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.random.numeric(5),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    };
    return newFake;
}
    
// const newFakeUser = createUser();
// console.log(newFakeUser);

// const newFakeCompany = createCompany();
// console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(),
        company: createCompany()});
});

app.listen( port, () => console.log(`Listening on port: ${port}`));