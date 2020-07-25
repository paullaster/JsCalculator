var item = {
    fname: "paullaster",
    lname: "okoth",
    age: 23,
    education:{
        university: "multimedia university of kenya",
        secondary: "migori boys high school",
        primary: "lwanda magwar"
    },
    experience: {
        JavaScript: "yes",
        NodeJs: "yes"
    }
};
let {education:{university,secondary,primary}, experience:{JavaScript, NodeJs}} = item;
console.log(university,",", secondary,",", primary );
console.log(JavaScript, NodeJs);
let {education ={}}= item;
console.log(education); 