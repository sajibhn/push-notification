import express from 'express';
import cors from 'cors';
import webpush from 'web-push';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

let subscription = null;

app.post('/subscribe', (req, res) => {
	subscription = req.body;
	console.log(subscription)
	res.status(201).json({ message: "api called successfully" });
});

const vapidKeys = {
	publicVapidKey: '',
	privateVapidKey: ''
}

webpush.setVapidDetails('mailto:sajib@gmail.com', vapidKeys.publicVapidKey, vapidKeys.privateVapidKey);

app.post('/sendNotification', (req, res) => {
	const payload = JSON.stringify({ title: 'Push Test' });
	console.log(subscription)
	webpush.sendNotification(subscription, payload).catch(error => console.error(error));

	res.status(201).json({});
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});