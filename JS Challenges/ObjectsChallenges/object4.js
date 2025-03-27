// Problem Statement
// For security reasons, when a user logs out, their password should be removed from the user
// object before storing it in logs or analytics.
// Challenge
// Write a function that removes the password property from a user object and returns the
// updated object.
// Constraints
// • user should be a valid object with at least a usemame and password.
// • If password does not exist, return the object as it is.

function deletePassword(password){
    if(UserActivation.hasOwnProperty(password)){
        delete UserActivation.password;
    }
}