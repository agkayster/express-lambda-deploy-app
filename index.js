const express = require('express');
const serverless = require('serverless-http');
const app = express();
// const port = 3000;

app.use(express.json());

app.get('/hello', (req, res) => {
	res({
		status: 200,
		body: JSON.stringify({ message: 'Hello World!' }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
});
// app.get('/hello', (req, res) => {
// 	res.send('Hello World!');
// });

// app.listen(port, () => {
// 	console.log(`Server is up and running on port ${port}`);
// });

module.exports.handler = serverless(app);
