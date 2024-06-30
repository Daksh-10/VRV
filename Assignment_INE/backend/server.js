const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const crypto = require('crypto');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [];
const userOrder = [];
const secretKey = crypto.randomBytes(64).toString('hex');

app.post('/signup', (req, res) => {
    
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    users.push({ username, password: hashedPassword });
    res.status(200).send({ message: 'User registered successfully' });
    
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).send({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.username }, secretKey, { expiresIn: 86400 }); // 24 hours
    res.status(200).send({ token });
});

app.get('/dashboard', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: 'Failed to authenticate token' });
        }

        res.status(200).send({ message: `Welcome to the dashboard, ${decoded.id}` });
        console.log(decoded.id);
    });
});

app.post('/handleOrder',(req,res) => {
    const {username, foodList} = req.body;
    userOrder.push({username, foodList});
    console.log(userOrder);
    res.status(200).send({ message: 'Order placed successfully' });
});

app.post('/getOrder',(req,res)=> {
    res.status(200).send({userOrder});
    console.log(userOrder);
    console.log("order sent to staff");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
