const express = require("express");
const app = express();

const path = require("path");
const port = 5000;

let users = []
const usernames = []

let index = 0

app.use(express.static('static'))

function registerUser(req, res) {
    let data = ''
    req.on('data', chunk => data += chunk)
    req.on('end', () => {
        res.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });
        const json = JSON.parse(data)

        json.id = index; index++;
        console.log(json);

        if (!usernames.includes(json.login)) {
            users.push(json)
            usernames.push(json.login)
            res.end('registered')
        } else {
            res.end('userexists')
        }

        console.log(users)
    })
}

function getUsers(req, res) {
    res.end(JSON.stringify(users))
}

function deleteUser(req, res) {



    let data = ''
    req.on('data', chunk => data += chunk)
    req.on('end', () => {

        const json = JSON.parse(data)

        console.log(users)
        users.map(user => {
            if (user.id === json.id) {
                console.log(user.login)
                usernames.splice(usernames.indexOf(user.login), 1)
            }
        })
        users = users.filter(user => user.id !== json.id)
        console.log(users, json.id)

        res.end('deleted')
    })

    console.log(data)

}

app.post('/delete', (req, res) => deleteUser(req, res))
app.post('/getUsers', (req, res) => getUsers(req, res))
app.post('/register', (req, res) => registerUser(req, res))
app.listen(port, () => console.log("start serwera na porcie " + port))