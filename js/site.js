// get user input
function getValue() {
    // hide alert
    document.getElementById('alert').classList.add('invisible');

    // Get the string from the page
    let userString = document.getElementById('userString').value;

    // check for palindrome
    let retObject = checkForPalindrom(userString);

    displayString(retObject);
}

// Reverse the string
function checkForPalindrom(userString) {
    let revString = [];
    let retObject = {};

    // remove spaces and special characters
    let regEx = /[^A-Za-z0-9]/gi;
    userString = userString.replace(regEx, '');

    // reverse string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    // fill object
    if (userString.toLowerCase() == revString.toLowerCase()) {
        retObject.title = 'Well done! You entered a palindrome.';
    } else {
        retObject.title = 'Sorry! You did not enter a palindrome.';
    }

    retObject.reversed = revString;

    return retObject;
}

// Display the palindrome string to the user
function displayString(retObject) {
    document.querySelector('#alertTitle').innerHTML = retObject.title;
    document.getElementById('msg').innerHTML = `Your phrase reversed is: <strong>${retObject.reversed}</strong>`;
    document.getElementById('alert').classList.remove('invisible');
}
