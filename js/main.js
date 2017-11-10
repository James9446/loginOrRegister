var userObject = {
	profiles: [],
	constructUserProfile: function(firstName, lastName, gender, email, number) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.gender = gender;
			this.email = email;
			this.number = number;
	},
	addProfile: function(obj) {
		this.profiles.push(obj);
	},
	getUserData: function() {
		var	newProfile;

		// store vaules for user first & last name, email and phone num
		var userFirst     = document.getElementById('user-first-name').value;
		var userLast      = document.getElementById('user-last-name').value;
		// store elements by class for radios and select - will loop through later to find user selection
		var userGenderEls = document.getElementsByClassName("userGender");
		var	userPhone     = document.getElementById('userPhone').value;
		var	userEmail     = document.getElementById('userEmail').value;

		/*
		GENDER
		*/
		// loop through all elements with class="userGender"
		for(var i = 0; i < userGenderEls.length; i++) {
			// if the radio was selected by the user, do this
			if(userGenderEls[i].checked) {
				// set value of answer 3 to the value in the radio item
				userGender = userGenderEls[i].value;
			};
		};

		newProfile = new userObject.constructUserProfile(userFirst, userLast, userGender, userEmail, userPhone);
		console.log(newProfile);

		// this.addProfile(newProfile);
	}
}



function getUserData() {
	
}

// add click function to element with id="register"
document.getElementById('registerButton').addEventListener('click', userObject.getUserData, false);

console.log(userObject.profiles);

// var testObject = new constructUserProfile("james", "reynolds", "male", "me@gmail.com", 123233444);
// console.log(testObject);
