function getBill(amount){
    return amount;
}

const billHandler ={
    apply: function(target, context, args){
        console.log("Apply discount of 35%");
        return args[0]-(args[0]* 0.35);
    }
}

const billProxy = new Proxy(getBill, billHandler);

console.log(billProxy(1000));