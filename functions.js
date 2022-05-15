/*
    Function retrieving data from the Local Storage
    Create empty array if the Local Storage is empty
*/

const getSavedNames = () => {
    const myNames = localStorage.getItem("names")

    if (myNames !== null) {
        return JSON.parse(myNames)
    } else {
        return []
    }
}

/*
    Function retrieving data from the Local Storage
    Create empty array if the Local Storage is empty
*/

const saveNames = (oneName) => {
    localStorage.setItem("names", JSON.stringify(oneName))
}