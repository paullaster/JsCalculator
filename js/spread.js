const a =['bonga', 'credit', 'data bundles'];
const b =['storo bonus', 'data with no expiry', 'giga bundles'];
const services =[...a , ...b];
console.log(`Safaricom offers the following services to its customers: ${services}`);
let service = ()=>{

    if(services.includes('credit')){
        return 'Safaricom is for you';
       }
       else{
           return 'Try telcom';
       }

}

console.log(service());
