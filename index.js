const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(x){
    return function(y){
        return x*y;
    }
}
const fareDoubler = function(x){
    return x*2;
}
const fareTripler = function(x){
    return x*3;
}
const selectDifferentDrivers = function(drivers,z){
    return z(drivers);
}