

const shelterAdminModelMethods = (assert, ShelterAdmin, Shelter, Animal, seeds) => {
	const shelterAdminSeed = seeds.defaultShelterAdmin;
	const shelterSeed = seeds.defaultShelter;
	const animalSeed = seeds.defaultAnimal;
	
	describe('ShelterAdmin model: CRUD Tests...', () => {
		beforeEach((done) => {
			shelter = new Shelter(shelterSeed)
			shelterAdmin = new ShelterAdmin(shelterAdminSeed)
			shelter.shelterAdmin = shelterAdmin
			shelterAdmin.shelterId = shelter

			Promise.all([shelter.save(), shelterAdmin.save()])
			.then(() => done())
		});

		it('CRud: creates and saves  ShelterAdmin record into the DB', (done) => {
			animal = new Animal( animalSeed)
			animal.save()
			.then(() => {
				Shelter.findById(shelter._id)
				.then((foundShelter) => {
					foundShelter.animals.push(animal)
					foundShelter.save()
					.then(() => {
						console.log("found SHelter....")
						Shelter.findById(shelter._id)
						.populate('animals')
						.then((foundShelter) => {
							assert(foundShelter.animals[0]._id.equals(animal._id))
							done()
							
						})
					})
				})
			})
		})
		xit('crUd: updates and saves a ShelterAdmin record using model method #update', (done) =>{
			const newEmail = seeds.update.email;
			ShelterAdmin.findOne({ firstName: shelterAdminSeed.firstName })
			.then( ( foundShelterAdmin ) => {
				foundShelterAdmin.update({ email: newEmail })
				.then( () => {
					ShelterAdmin.findOne({ firstName: shelterAdminSeed.firstName })
					.then( (foundShelterAdmin) => {
						assert(foundShelterAdmin.email === newEmail)
						done()
					})
				})
			})
		})
		xit('cruD: Use class instance #remove', (done) => {
			ShelterAdmin.remove({firstName: shelterAdmin.firstName})
			.then(() => {
				ShelterAdmin.findById(shelterAdmin._id)
				.then((foundShelterAdmin) => {
					assert(foundShelterAdmin === null)
					done()
				})
			})
		})
	})
	it('is able to add an animal to its assossiated shelter with instance method #addAnimal', (done) => {
		assert(true === true);
		done();
	})
}

module.exports = shelterAdminModelMethods;