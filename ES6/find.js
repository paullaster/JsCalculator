const candidates =[
    {name: "Edick Anyanga", party:"ODM"},
    {name: "Mark Ogola", party: "PNU"},
    {name: "Dr. Ogutu", party:"ARP"}
]

let winner = candidates.find((mp)=> mp.name ==="Edick Anyanga");
console.log(winner.name, winner.party);