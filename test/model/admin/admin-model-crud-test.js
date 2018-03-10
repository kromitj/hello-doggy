const adminModelCRUD = (assert, Admin, seeds) => {
	const joeSeed = seeds.defaultAdmin;

	describe('Admin model: CRUD Tests...', () => {
		beforeEach((done) => {
			joe = new Admin(joeSeed)
			joe.save()
				.then(() => done())
		});
		it('CRud: creates and saves an Admin record into the DB', (done) => {
			Admin.findOne({username: joeSeed.username})
			.then((user) => {
				assert(user.email === joeSeed.email)
				done()
			})
		})
		it('crUd: updates and saves an Admin record using model method #update', (done) =>{
			const newEmail = seeds.update.email
			Admin.findOne({username: joeSeed.username})
			.then((user) => {
				user.update({email: newEmail})
				.then(() => {
					Admin.findOne({username: joeSeed.username})
					.then((user) => {
						assert(user.email === newEmail)
						done()
					})
				})
			})
		})
		it('cruD: Use class instance #remove', (done) => {
			Admin.remove({username: joe.username})
			.then(() => {
				Admin.findById(joe._id)
				.then((user) => {
					assert(user === null)
					done()
				})
			})
		})
	})
}

module.exports = adminModelCRUD;