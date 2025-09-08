import { password } from '@inquirer/prompts';

async function askForPassword() {
  const secret = await password({
    message: 'Please enter your password:',
    mask: ' ', // This is optional, it replaces each character with an asterisk
  });

    var myRegExp = /[^a-z\d ]/i;                                                     
    var bln = myRegExp.test(secret);

    if (!bln) {                                                               
	console.log("Your passphrase contains only valid characters");                      } else {                                                                                 console.log("Your passphrase contains one or more invalid characters");                  }   
   console.log('Password entered:', secret);
  // In a real application, you would use this password for authentication
}

askForPassword();
