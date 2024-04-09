console.log("We are here")              //will appear in the console section in the inspector
console.log(window.location)

const addButton = document.getElementById('addButton')
addButton.addEventListener('click', () => {
    console.log("You selected ADD")
})