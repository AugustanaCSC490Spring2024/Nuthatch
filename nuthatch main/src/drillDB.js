

var listOfDrills = [];

const setListOfDrills = function (data) {
    listOfDrills = data;
}

const getListOfDrills = function () {
    return listOfDrills;
}

const getCardByCode = function ( cardCode ) {
    console.log("Searching for " + cardCode);
    console.log("list of drills=" + listOfDrills);
    return listOfDrills.find(card => card.CODE === cardCode);
}

export {
    setListOfDrills,
    getListOfDrills,
    getCardByCode
}