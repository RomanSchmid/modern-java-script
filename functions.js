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
    const newLink = document.createElement("a")
    const button = document.createElement("button")

    // Setting delete button
    button.textContent = "Clear the name"
    newDiv.appendChild(button)

    button.addEventListener("click", () => {
        removeName(names, oneName.id)
        saveNames(names)
        toListAgain()
    })

    newLink.textContent = oneName.firstName
    if (oneName.adult === true) {
        newLink.classList.add("adult")
    } else {
        newLink.classList.add("no-adult")
    }

    newLink.setAttribute("href", `/edit.html#${oneName.id}`)

    newDiv.appendChild(newLink)

    return newDiv
}

/* According to the ID we will find its index and delete it with splice () */

const removeName = (ourNames, id) => {
    const index = ourNames.findIndex(nameWantToCheck => {
        return nameWantToCheck.id === id
    })

    if (index > -1) {
        ourNames.splice(index, 1)
    }
}

/* When we delete a name from the Local Storage, this function secure rewriting of the Local Storage */

const toListAgain = () => {
    document.querySelector(".list-names").innerHTML = ""

    let newData = getSavedNames()

    newData.forEach(oneName => {
        const newContent = generateHTMLStructure(oneName)
        document.querySelector(".list-names").appendChild(newContent)
    })
}
