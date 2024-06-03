var count=0;
function increaseCount(){
    var pRef= document.querySelector("p");
    pRef.innerText = "Count Value is : " + ++count;
}

function decreaseCount(){
    var pRef= document.querySelector("p");
    pRef.innerText = "Count Value is : " + count--;
}