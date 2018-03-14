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

const shelterAdminSeeds = {
	defaultShelterAdmin: {
		firstName: "Susan" ,
		lastName: "Kare" ,
		email: "susanKare@gmail.com" ,
		username: "susanKare1" ,
		passwordDigest: "Password1" ,
		shelterId: "" 
	},
	defaultShelter: {
		name: "Chicago Animal Shelter",
		address: "123 N State",
		phone: "330-111-2222"
	},
	update: {
		email: "updatedEmail1!!!@gmail.com"
	},
	defaultAnimal: {
		name: "Jerry",
		age: 6,
		type: "Canine",
		breed: "American Staffordshire Terrier Mix",
		sex: "Male",
		weight: 23.81,
		spayedOrNudered: true,
		adoptionFee: 200,
		likes: ["I'll take as much exercise as I can get!", "Squeak!  Squeak!  I love Squeaky chew toys!", "Did someone say 'treat'?  I'll take them all!", "I'm a people person.", "I love playing with Kong toys!"],
		dislikes: ["I would love to find an adults-only home.", "I prefer to be the only pet in the home."],
		description: "Jerry would love to meet you! Jerry would do best with an experienced owner and in a home without children or other pets. Stop by our Pippin Fasseas Adoption Center at 1997 N. Clybourn Ave., in Chicago's Lincoln Park neighborhood. ",
		personalityTraits: ["affectionate", "active"],
		pictures: ["http://www.pawschicago.org/fileadmin/media/images/Animal_Profile_Photos/Dogs/Rockstar_Animals/54377_Jerry_profile26.jpg", "http://www.pawschicago.org/fileadmin/media/images/Animal_Profile_Photos/Dogs/Rockstar_Animals/54377_Jerry_profile28.jpg"]
	}
}

const animalSeeds = {
	defaultAnimal: {
		name: "Jerry",
		age: 6,
		type: "Canine",
		breed: "American Staffordshire Terrier Mix",
		sex: "Male",
		weight: 23.81,
		spayedOrNudered: true,
		adoptionFee: 200,
		likes: ["I'll take as much exercise as I can get!", "Squeak!  Squeak!  I love Squeaky chew toys!", "Did someone say 'treat'?  I'll take them all!", "I'm a people person.", "I love playing with Kong toys!"],
		dislikes: ["I would love to find an adults-only home.", "I prefer to be the only pet in the home."],
		description: "Jerry would love to meet you! Jerry would do best with an experienced owner and in a home without children or other pets. Stop by our Pippin Fasseas Adoption Center at 1997 N. Clybourn Ave., in Chicago's Lincoln Park neighborhood. ",
		personalityTraits: ["affectionate", "active"],
		pictures: ["http://www.pawschicago.org/fileadmin/media/images/Animal_Profile_Photos/Dogs/Rockstar_Animals/54377_Jerry_profile26.jpg", "http://www.pawschicago.org/fileadmin/media/images/Animal_Profile_Photos/Dogs/Rockstar_Animals/54377_Jerry_profile28.jpg"]
	},
	defaultShelter: {
		name: "Chicago Animal Shelter",
		address: "123 N State",
		phone: "330-111-2222"
	},
	defaultShelterAdmin: {
		firstName: "Susan" ,
		lastName: "Kare" ,
		email: "susanKare@gmail.com" ,
		username: "susanKare1" ,
		passwordDigest: "Password1" ,
		shelterId: "" 
	}
}
module.exports.adminSeeds = adminSeeds;
module.exports.shelterSeeds = shelterSeeds;
module.exports.shelterAdminSeeds = shelterAdminSeeds;
module.exports.animalSeeds = animalSeeds;

