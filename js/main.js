var userObject = {
	profiles: [],
	constructUserProfile: function(firstName, lastName, gender, email, number, username, password) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.gender = gender;
			this.email = email;
			this.number = number;
			this.username = username;
			this.password = password;
	},
	addProfile: function(obj) {
		this.profiles.unshift(obj);
	},
	resetUserData: function() {
		document.getElementById('user-first-name').value = '';
		document.getElementById('user-last-name').value = '';
		// store elements by class for radios and select - will loop through later to find user selection
		document.getElementsByClassName("user-gender");
		document.getElementById('user-phone').value = '';
		document.getElementById('user-email').value = '';
		document.getElementById('choose-username').value = '';
		document.getElementById('choose-password').value = '';
		document.getElementById('confirm-password').value = '';
	},
	resetLoginData: function() {
		document.getElementById('username').value = '';
		document.getElementById('password').value = '';
	},
	getUserData: function() {
		var	newProfile;
		var userGender;
		// store vaules for user first & last name, email and phone num
		var userFirst     = document.getElementById('user-first-name').value;
		var userLast      = document.getElementById('user-last-name').value;
		// store elements by class for radios and select - will loop through later to find user selection
		var userGenderEls = document.getElementsByClassName("user-gender");
		var	userPhone     = document.getElementById('user-phone').value;
		var	userEmail     = document.getElementById('user-email').value;
		var	username      = document.getElementById('choose-username').value;
		var	userPassword  = document.getElementById('choose-password').value;
		/*
		GENDER
		*/
		// loop through all elements with class="userGender"
		for(var i = 0; i < userGenderEls.length; i++) {
			// if the radio was selected by the user, do this
			if(userGenderEls[i].checked) {
				// set value of answer 3 to the value in the radio item
				userGender = userGenderEls[i].value;
			}
		}
		newProfile = new userObject.constructUserProfile(userFirst, userLast, userGender, userEmail, userPhone, username, userPassword);
		return newProfile;
	}
};

function validatePassword (password) {
	if (password.length < 6) {
		return false;
	} else {
		return true;
	}
}

function register() {
	var newProfile = userObject.getUserData();
	var	confirmPassword  = document.getElementById('confirm-password').value;
	for (var i = 0; i < userObject.profiles.length; i++) {
		if (newProfile.username === userObject.profiles[i].username) {
			document.getElementById('choose-username').value = '';
			return alert("Sorry the username " + newProfile.username + ", has already been taken. Please select another!");
		}
	}
	if (!validatePassword(newProfile.password)) {
		return alert("This not a valid password. \nYour password must be at least 6 characters long.");
	}
	if (newProfile.password !== confirmPassword) {
		document.getElementById('confirm-password').value = '';
		return alert("Your confirm password entry did not match your password");
	}
	userObject.addProfile(newProfile);
	userObject.resetUserData();
	userObject.resetLoginData();
	showProfile();
}

function showProfile(index) {
	if (index === undefined) {
		index = 0;
	}
	// select some HTML elements by id
	var userName   = document.getElementById('newUserName');
	var userGender = document.getElementById('newUserGender');
	var	userEmail  = document.getElementById('newUserEmail');
	var	userPhone  = document.getElementById('newUserPhone');
	var username   = document.getElementById('newUsername');

	// change the text of these variables using the userProfile object
	userName.innerText   = "Welcome " + userObject.profiles[index].firstName + " " + userObject.profiles[index].lastName;
	userGender.innerText = "Gender: " + userObject.profiles[index].gender;
	userEmail.innerText  = "Email: " + userObject.profiles[index].email;
	userPhone.innerText  = "Phone: " + userObject.profiles[index].number;
	username.innerText   = "Username: " + userObject.profiles[index].username;

	// hide new login form or profile form
	document.getElementById('login-form').style.display = "none";
	document.getElementById('register-form').style.display = "none";
	// display updated profile data
	document.getElementById('show-profile').style.display = "block";
}

function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	for (var i = 0; i < userObject.profiles.length; i++) {
		if (username === userObject.profiles[i].username && password === userObject.profiles[i].password) {			
			userObject.resetLoginData();
			return showProfile(i);
		} 
	}
	return alert("Your username and password do not match or are not correct");
}


// ---=== Hide and show form functions ===--- // 

// Start by hiding the register form and profile
document.getElementById('register-form').style.display = "none";
document.getElementById('show-profile').style.display = "none";

function showRegistrationForm() {
	// hide login form
	document.getElementById('login-form').style.display = "none";
	// display register form
	document.getElementById('register-form').style.display = "block";
}

function showLoginForm() {
	// hide register form
	document.getElementById('register-form').style.display = "none";
	// display login form
	document.getElementById('login-form').style.display = "block";
}

function signOut() {
	// hide register form
	document.getElementById('show-profile').style.display = "none";
	// display login form
	document.getElementById('login-form').style.display = "block";
}


// Event listeners for buttons
document.getElementById('registerButton').addEventListener('click', register, false);
document.getElementById('loginButton').addEventListener('click', login, false);
document.getElementById('showRegisterButton').addEventListener('click', showRegistrationForm, false);
document.getElementById('showLoginButton').addEventListener('click', showLoginForm, false);
document.getElementById('signOutButton').addEventListener('click', signOut, false);
console.log(userObject.profiles);

