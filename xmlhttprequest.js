var xhr = new XMLHttpRequest();
xhr.onreadystatechange = processResponse;
xhr.open("GET", "path/to/resource", true);
//key=value
xhr.send("name = paullaster");
//or as JSON string
xhr.send("name:paullaster");
function processResponse(){
    if(xhr.readyState===4 && xhr.status===200){
        console.log("paullaster");
    }
}
 