/* Load data from the Local Storage into the variable
If the Local Storage is empty -> assign the variable with an empty array */

const names = getSavedNames()

// Send a form and save to the Local Storage
let myForm = document.querySelector("#test-form")
let myCheckbox = document.querySelector(".my-checkbox")

myForm.addEventListener("submit", event => {
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value,
        adult: myCheckbox.checked
    })

    event.target.elements.firstName.value = ""
    myCheckbox.checked = false

    saveNames(names)
})

// Listing back to the page
let buttonToList = document.querySelector(".to-list")
buttonToList.addEventListener("click", () => {
    // Clear <div class="list-names"> to prevent duplicates
    document.querySelector(".list-names").innerHTML = ""
    
    let namesFromStorage = JSON.parse(localStorage.getItem("names"))

    namesFromStorage.forEach(oneName => {
        const oneNameHTML = generateHTMLStructure(oneName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})

// Reload the main page
window.addEventListener("storage", () => {
    location.reload()
})