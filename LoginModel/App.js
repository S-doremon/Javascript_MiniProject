function showModel(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.loginf').classList.add('showloginf')
}

function closeModel(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.loginf').classList.remove('showloginf')
}
// we call using onclick="showModel() method also in the button tag->html file. or else we can use below method also click method dirctly
var btnlogin= document.querySelector(".btn");
btnlogin.addEventListener("click",showModel);

var c= document.querySelector("span");
    c.addEventListener("click",closeModel);

