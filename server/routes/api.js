const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/mydues";

mongoose.connect(db, { useNewUrlParser: true }, err => {
    if (err) {
        console.log('Error connecting to DB : ', err);
    } else {
        console.log('Successfully connected to DB');
    }
});

//middleware
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request');
    } else {
        let token = req.headers.authorization.split(' ')[1];
        if (token === null) {
            return res.status(401).send('Unauthorized Request');
        }
        let payload = jwt.verify(token, 'secretKey');
        if (!payload) {
            return res.status(401).send('Unauthorized Request');
        }
        req.userId = payload.subject;
        next();
    }
}

router.get('/', (req, res) => {
    res.send('From api route');
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log("Error registering the User ", error);
        } else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({ token });
            console.log("User Registered successfully ", registeredUser);
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log("Error registering the User ", error);
        } else {
            if (!user) {
                res.status(401).send('Invalid Email');
            } else {
                if (user.password != userData.password) {
                    res.status(401).send('Invalid Password');
                } else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretKey');
                    console.log("Login successful  : ", user);
                    res.status(200).send({ token });
                }
            }
        }
    });
});

router.get('/events', (req, res) => {
    let events = [{
            "id": "1",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "2",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "3",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "4",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "5",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "6",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "7",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "8",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "9",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "10",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "11",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "12",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "13",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "14",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "15",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        }
    ];
    res.send(events);
});

router.get('/special', verifyToken, (req, res) => {
    let events = [{
            "id": "1",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "1",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "1",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        },
        {
            "id": "1",
            "name": "auto expo",
            "description": "Lorem ipsum",
            "date": "2020-05-25T18:25:45.511Z"
        }
    ];
    res.send(events);
});

module.exports = router;