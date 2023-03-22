const name = document.querySelector(".name")
const type = document.querySelector(".type")
const height = document.querySelector(".height")
const weight = document.querySelector(".weight")
const bio = document.querySelector(".bio")

searchInput.addEventListener("change", (event) => (
    fetch(``)
    .then(response => response.json())
));