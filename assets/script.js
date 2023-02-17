const date = moment().format("Do MMMM YYYY")
console.log(date)
const dateHTML = document.getElementById("date")

dateHTML.append(date)