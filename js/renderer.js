let webdriverio = require('webdriverio');
let options = { desiredCapabilities: { browserName: 'chrome' } };
let client = webdriverio.remote(options);

let ipc = require('electron').ipcRenderer;

let loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
	// TODO: get username and password
	let userid = document.getElementById('input-userid').value;
	let password = document.getElementById('input-password'). value;
	ipc.send('loginAction', userid, password);
});
