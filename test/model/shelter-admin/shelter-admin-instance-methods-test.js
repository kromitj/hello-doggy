

const shelterAdminModelMethods = (assert, ShelterAdmin, Shelter, Animal, seeds) => {
	const shelterAdminSeed = seeds.defaultShelterAdmin;
	const shelterSeed = seeds.defaultShelter;
	const animalSeed = seeds.defaultAnimal;
	
	describe('ShelterAdmin model: Instance methods', () => {
		beforeEach((done) => {
			shelter = new Shelter(shelterSeed)
			shelterAdmin = new ShelterAdmin(shelterAdminSeed)
			shelter.shelterAdmin = shelterAdmin
			shelterAdmin.shelterId = shelter

			Promise.all([shelter.save(), shelterAdmin.save()])
			.then(() => done())
		});

		it('#addAnimal', (done) => {
			animal = new Animal( animalSeed)
			animal.save()
			.then(() => {
				Shelter.findById(shelter._id)
				.then((foundShelter) => {
					foundShelter.animals.push(animal)
					foundShelter.save()
					.then(() => {
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
	})
}

module.exports = shelterAdminModelMethods;