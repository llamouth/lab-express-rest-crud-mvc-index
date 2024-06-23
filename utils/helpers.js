const peopleArray = require("../models/person.model")
const locationArray = require("../models/location.model")

const organizePeopleWithLocations = () => {
    const copyOfArray = locationArray.slice()
    copyOfArray.forEach(lo =>{ 
        lo.people = []
        peopleArray.forEach(person => {
            lo.zip === person.mainLocation && lo.people.push(person)
        })
    })
    return copyOfArray
}

module.exports = {organizePeopleWithLocations}