let nameID = location.hash.substring(1)
let names = getSavedNames()

let searchedName = names.find(oneObject => {
    return oneObject.id === nameID
})

if (searchedName === undefined) {
    location.assign("/index.html")
}

