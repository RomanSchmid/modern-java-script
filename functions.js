/*
    Function retrieving data from the Local Storage
*/

const getSavedNames = () => {
    const myNames = localStorage.getItem("names")

    if (myNames !== null) {
        return JSON.parse(myNames)
    } else {
        return []
    }
}