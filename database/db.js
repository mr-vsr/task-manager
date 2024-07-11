const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://mr-vsr:C6NdS8oaNBFbKAW6@task-manager.67yhg1n.mongodb.net/?retryWrites=true&w=majority&appName=task-manager';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
