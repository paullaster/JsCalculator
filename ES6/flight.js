function getFlightDurations(){
    setTimeout(()=>{
        flightIterator.next({
            Qatar:"39h 0m",
            Emirates: "40h 20m"});
    },1200);
}
function getFlightPrices(){
    setTimeout(function (){
        flightIterator.next(
            {
                Qatar: "$2010",
                Emirates: "$1904"
            }
        );
    }, 1000);
}

function *getFlights(){
    const allFlights = ["Qatar", "Emirates"];
    const flightDurations = yield getFlightDurations();
    const flightPrices = yield getFlightPrices();

    for(let flight of allFlights){
        console.log(`Nairobi to Tokyo takes ${flightDurations[flight]} in ${flight} airline for around ${flightPrices[flight]}`);
        
    }
    
}
const flightIterator = getFlights();
console.log(flightIterator.next());