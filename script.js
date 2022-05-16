/* Load data from the Local Storage into the variable
If the Local Storage is empty -> assign the variable with an empty array */

const names = getSavedNames()

// Send a form and save to the Local Storage
let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", event => {
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value
    })

    event.target.elements.firstName.value = ""

    saveNames(names)

})

// Listing back to the page
let buttonToList = document.querySelector(".to-list")
buttonToList.addEventListener("click", event => {
    let namesFromStorage = JSON.parse(localStorage.getItem("names"))
    console.log(namesFromStorage)

    namesFromStorage.forEach(oneName => {
        const oneNameHTML = generateHTMLStructure(oneName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})