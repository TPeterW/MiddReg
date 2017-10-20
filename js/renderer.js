let webdriverio = require('webdriverio');
let options = { desiredCapabilities: { browserName: 'chrome' } };
let client = webdriverio.remote(options);

let ipc = require('electron').ipcRenderer;

let loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
	// TODO: get username and password
	ipc.send('loginAction', '00635836', '123456');
})

// class BannerClient extends Object {
// 	login(userid, password) {
// 		console.log('Not working');
// 		// client.init()
// 		// 		.url('https://ssb-prod.ec.middlebury.edu/PNTR/twbkwbis.P_WWWLogin?')
// 		// 		.setValue('#UserID', userid)
// 		// 		.setValue('#PIN > input', password)
// 		// 		.click('[value=Login]')
// 		// 		.getTitle().then(function(title) {
// 		// 			console.log('Title is: ' + title);
// 		// 		})
// 		// 		.end();
// 	};
		
// 	registerForClass() {
		
// 	};
		
// };

// function login(userid, password) {
// 	console.log(userid, password);
// }


// module.exports = {
// 	BannerClient,
// 	login
// };