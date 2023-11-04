import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const SERVER_PORT = 3000;

app.use(morgan("combined"));

app.get('/api', (req, res) => {

    res.json({"users": ["user1", "Nuser2"]});

  });

app.get('/fischi', (req, res) => {
    res.send("Ich bin ein schwuler Fisch hihi");
    res.sendStatus(201);
  });


app.listen(SERVER_PORT, ()=>{
    console.log(`Server running on port ${SERVER_PORT}`)
});