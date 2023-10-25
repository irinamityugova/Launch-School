// Anonymizer
// Using OLOO create an Account prototype object that anonymizes user objects on init. The created object should not have access to the function that anonymizes a user other than through the init and reanonymize methods. The function that anonymizes creates a 16 character sequence composed of letters and numbers. The following are the properties and methods on the Account object:

// init: The init method sets the email, password, firstName, lastName, and displayName of user. The displayName is a 16 character sequence generated for the user. It's used as the display name of a user.
// reanonymize: This method generates a new 16 character sequence and reassigns it to the displayName property if the password provided is valid. Returns true if successfully re-anonymized. Returns 'Invalid Password' if the password provided is not valid.
// resetPassword: This method asks the user for a new password and reassigns it to the password property. To reset the password, the user must provide the current password. Returns 'Invalid Password' if the password provided is not valid. Returns true if the password is successfully reset.
// firstName: This method returns the first name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
// lastName: This method returns the last name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
// email: This method returns the email name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
// displayName: This property returns the displayName — the 16 character sequence.
// Other than the above properties, methods, and properties inherited from Object.prototype, no other method or property should exist on the object returned by the Account prototype object.

// Here's a sample for your reference:
let Account = (function() {
  function validate(input) {
      return input === userPassword;
  }

  function anonymize() {
    let displayName = '';
    for (let i = 0; i < 16; i++) {
      displayName = displayName.concat(String.fromCharCode(Math.floor(33 + Math.random() * 93))
      );
    }
    return displayName;
  }

  let [userEmail, userPassword, userFirstName, userLastName] = Array(4);

  let errMessage = 'Invalid Password';

  return {
    init(email, password, firstName, lastName) {

      [userEmail, userPassword, userFirstName, userLastName] = [email, password, firstName, lastName];

      this.displayName = anonymize();
      this.reanonymize(password);

      return this;
    },

    reanonymize(input) {
      if (input === userPassword) {
        this.displayName = anonymize();
        return true;
      }
        return errMessage;
    },

    resetPassword(input, newPass) {
      if (validate(input)) {
        userPassword = newPass;
        return true;
      } else {
        return errMessage;
      }
    },

    firstName(input) {
      if (validate(input)) return userFirstName;
      return errMessage;
    },

    lastName(input) {
      if (validate(input)) return userLastName;
      return errMessage;
    },

    email(input) {
      if (validate(input)) return userEmail;
      return errMessage;
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'