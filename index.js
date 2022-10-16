const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellon node World!')
})

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01888888' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01888888' },
    { id: 4, name: 'sraboni', email: 'sraboni@gmail.com', phone: '01888888' },
    { id: 5, name: 'sabila', email: 'sabila@gmail.com', phone: '01888888' },
    { id: 6, name: 'sohana', email: 'sohana@gmail.com', phone: '01888888' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    // const user = users[id];
    res.send(user)
})

app.get('/user', (req, res) => {
    console.log('query', req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    } else {
        res.send(users)
    }

})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`its working ${port}`)
})