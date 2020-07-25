let myMap = new Map();
const keyString = "my key string";
keyObj ={};
keyFunc =() =>{};

myMap.set(keyString, "value of string");
myMap.set(keyObj, "value associated with object");
myMap.set(keyFunc, "value associated with function");
 myMap.get(keyObj);
 myMap.get(keyString);
 myMap.get(keyFunc);
