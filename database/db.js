const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://2021isatrikghosha:qrDvePJbBe0a5EcI@cluster0.bov9qlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
