// Variable for the Moment.JS function, sets the format
const date = moment().format("Do MMMM YYYY")
// Variable to target the HTML element
const dateHTML = document.getElementById("date")
// Attaches the date to the HTML
dateHTML.append(date)