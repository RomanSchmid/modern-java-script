/* Function retrieving data from the Local Storage
Create empty array if the Local Storage is empty */

const getSavedNames = () => {
    const myNames = localStorage.getItem("names")

    if (myNames !== null) {
        return JSON.parse(myNames)
    } else {
        return []
    }
}

/* Function retrieving data from the Local Storage
Create empty array if the Local Storage is empty */

const saveNames = oneName => {
    localStorage.setItem("names", JSON.stringify(oneName))
}

/* Generate HTML structure, which will be placed to the page after clicking the button "To list" */

const generateHTMLStructure = oneName => {
    const newDiv = document.createElement("div")
    const newSpan = document.createElement("span")
    const button = document.createElement("button")

    // Setting delete button
    button.textContent = "Clear the name"
    newDiv.appendChild(button)

    newSpan.textContent = oneName.firstName
    newDiv.appendChild(newSpan)

    return newDiv
}