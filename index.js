const express = require('express');
const cors = require('cors');
const router = require('./Routes/fetchRoute');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use("/api", router);


const server = app.listen(PORT, () =>{
	console.log("listening on port", PORT);
})

server.on('error', (err) =>{
	console.log(err);
})