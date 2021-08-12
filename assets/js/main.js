function submitData() {

    let firstName = document.getElementById("vorname");
    let lastName = document.getElementById("nachname");
    let country = document.getElementById("land");

    console.log("Your name is", firstName.value, lastName.value, "and you\'re living in", country.value);
    document.body.innerHTML += ("<p>Your name is " + firstName.value + " " + lastName.value + " and you\'re living in " + country.value + "</p>");

}