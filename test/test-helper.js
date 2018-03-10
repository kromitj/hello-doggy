const mongoose = require('mongoose');
const database = 'mongodb://localhost/hello-doggy';
mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect(database, {
		 // useMongoClient: true
	});
	mongoose.connection
		.once('open', () => {
			console.log(`---- Connected to mongo at: ${database} -------`)
			console.log(Date())
			done()
		})
		.on('error', (error) => console.error("Eror: ", error))	
})

beforeEach((done) => {
	const { admins, shelters } = mongoose.connection.collections
	admins.drop(() => {
		shelters.drop(() => {
			done()
			
		})
	})
})