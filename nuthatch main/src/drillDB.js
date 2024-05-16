import { json } from "react-router-dom";


var listOfDrills = [];

const setListOfDrills = function (data) {
    listOfDrills = data;
}

const getListOfDrills = function () {
    return listOfDrills;
}

const getCardByCode = function ( cardCode ) {;
    // console.log(JSON.stringify(listOfDrills));
    // console.log("getting card for cardCode: ", cardCode);
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