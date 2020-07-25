const fleet = {
    business: 2,
    economy: 3
};

const fleetHandler = {
    get:function( target, property){
        if(property in target && target[property]>0){
            target[property] =-1;
            return `Your ${property} fleet reserved successfully`;
        }
        return `Sorry! we are out of ${property} fleets`;
    }
    
};
const fleetProx = new Proxy(fleet, fleetHandler);

console.log(fleetProx.economy);
console.log(fleetProx.economy);
console.log(fleetProx.economy);

