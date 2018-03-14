

const shelterAdminModelCRUD = (assert, ShelterAdmin, Shelter, seeds) => {
	const shelterAdminSeed = seeds.defaultShelterAdmin;
	const shelterSeed = seeds.defaultShelter;
	describe('ShelterAdmin model: CRUD Tests...', () => {
		beforeEach((done) => {
			shelter = new Shelter(shelterSeed)
			shelter.save()
			.then( () => {
				shelterAdmin = new ShelterAdmin(shelterAdminSeed)
				shelterAdmin.shelterId = shelter
				shelterAdmin.save()
					.then( () => done())				
			})
		});
		it('CRud: creates and saves  ShelterAdmin record into the DB', (done) => {
			ShelterAdmin.findOne({firstName: shelterAdminSeed.firstName})
			.then( ( foundShelterAdmin ) => {
				assert(foundShelterAdmin.firstName === shelterAdminSeed.firstName)
				done()
			})
		})
		it('crUd: updates and saves a ShelterAdmin record using model method #update', (done) =>{
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
		it('cruD: Use class instance #remove', (done) => {
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
}

module.exports = shelterAdminModelCRUD;