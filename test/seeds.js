const adminSeeds = {
	defaultAdmin: {
		fName: "Joe",
		lName: "Kelly",
		email: "joeKelly@gmail.com",
		username: "joeKelly1",
		passwordDigest: "Password1"
	},
	update: {
		email: "updatedEmail1!!!"
	}
}

const shelterSeeds = {
	defaultShelter: {
		name: "Chicago Animal Shelter",
		address: "123 N State",
		phone: "330-111-2222"
	},
	update: {
		address: "999 Updated Adress Ave."
	}
}
module.exports.adminSeeds = adminSeeds;
module.exports.shelterSeeds = shelterSeeds;
