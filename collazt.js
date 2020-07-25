
function collartz(n,seq){
    var seq = seq || [n];
    if(n%2===0){
        a = n/2;
    }
    else
    {
        a = n*3+1;
    }
    seq.push(a);
    if(a===1){
        console.log("iterate through "+seq.length+ " long");
    }
    else
    {
        return collartz(a,seq)
    }
}
collartz(1008);