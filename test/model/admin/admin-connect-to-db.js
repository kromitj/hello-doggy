const adminConnectToDB = (assert, Admin, seeds) => {
	describe('Admin model: connects to mongo properly', () => {
		beforeEach((done) => {
			joe = new Admin(seeds.defaultAdmin)
			joe.save()
				.then(() => done())
		});
		it('is connected to mongo with a collection name of superAdmin', (done) => {
			assert( Admin.modelName === 'admin');
			done()
		});
		it('Admin model is a valid model', (done) => {			
			assert( joe instanceof Admin);
			done();
		});
	})
}

module.exports = adminConnectToDB;