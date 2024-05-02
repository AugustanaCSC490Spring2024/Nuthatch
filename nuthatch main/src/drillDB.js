

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

const getCardsBySearch = function (searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    const returnData = listOfDrills.filter((item) => item['Title'].toLowerCase().includes(searchTerm) + item['CODE'].toLowerCase().includes(searchTerm) + item['Event'].toLowerCase().includes(searchTerm) + item['Category'].toLowerCase().includes(searchTerm) + item['Level'].toLowerCase().includes(searchTerm) + item['Equipment'].toLowerCase().includes(searchTerm) + item['Keywords'].toLowerCase().includes(searchTerm) + item['Gender'].toLowerCase().includes(searchTerm));
    return returnData;

}

export {
    setListOfDrills,
    getListOfDrills,
    getCardByCode,
    getCardsBySearch
}