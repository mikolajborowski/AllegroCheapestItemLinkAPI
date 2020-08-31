import express from "express";
import { MessageHandler } from './MessageHandler';
const message = new MessageHandler();

const app = express();

app.get('/api/search', (req, res) => res.send("Wszystko działa, " + req.query.fraze));
app.get('/*', function (req, res) {
    res.send(message.returnMessage(404, "page not found"));
})

app.listen("8000", () => console.log('Server running!'));