const shelterModelCRUD = (assert, Shelter, seeds) => {
	const shelterSeed = seeds.defaultShelter;

	describe('Shelter model: CRUD Tests...', () => {
		beforeEach((done) => {
			shelter = new Shelter(shelterSeed)
			shelter.save()
				.then(() => done())
		});
		it('CRud: creates and saves an Shelter record into the DB', (done) => {
			Shelter.findOne({name: shelterSeed.name})
			.then((foundShelter) => {
				assert(foundShelter.name === shelterSeed.name)
				done()
			})
		})
		it('crUd: updates and saves a Shelter record using model method #update', (done) =>{
			const newAddress = seeds.update.address
			Shelter.findOne({name: shelterSeed.name})
			.then((foundShelter) => {
				foundShelter.update({address: newAddress})
				.then(() => {
					Shelter.findOne({name: shelterSeed.name})
					.then((foundShelter) => {
						assert(foundShelter.address === newAddress)
						done()
					})
				})
			})
		})
		it('cruD: Use class instance #remove', (done) => {
			Shelter.remove({name: shelter.name})
			.then(() => {
				Shelter.findById(shelter._id)
				.then((foundShelter) => {
					assert(foundShelter === null)
					done()
				})
			})
		})
	})
}

module.exports = shelterModelCRUD;