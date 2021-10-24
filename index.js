
const express = require('express'); //step-1:import par
const cors = require('cors')
const app = express();//step-2:create app
app.use(cors())
app.use(express.json())
const port = 5000;//step-3:require port

app.get('/',  (req, res) => {//step-4:req part
    res.send('Hello my second ever Node & express !')
});

const users=[
    {
       id: 0,
       name: "Monitoring the heart rate",
       image:"https://i.ibb.co/Yt9V7YV/blog-05-1024x1024.jpg",
       email:"by Gts Medil 02 Admin",
       date: "10-10-2021" 
    },
    {
       id: 1,
       name: "Monitoring the pulse",
       image:"https://i.ibb.co/8XZhwmx/blog-06-1024x1024.jpg",
       email:"by Gts Medil 02 Admin",
       date: "10-10-2021" 
    },
    {
       id: 2,
       name: "Monitoring the blood regulatory",
       image:"https://i.ibb.co/8XZhwmx/blog-06-1024x1024.jpg",
       email:"by Gts Medil 02 Admin",
       date: "10-10-2021" 
    },
    {
       id: 3,
       name: "Monitoring the oxygen",
       image:"https://i.ibb.co/PGyx8Zj/blog-04-1024x1024.jpg",
       email:"by Gts Medil 02 Admin",
       date: "10-10-2021" 
    }
]
app.get('/users', (req, res) => {//step-4:req part
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users) 
    }
});

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user);
})


app.listen(port, () => {//step-5:listen app
    console.log('listening to port', port);
  })