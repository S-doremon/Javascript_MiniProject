const colors = ['red', 'green','violet', 'yellow', 'coral', 'orange', 'gray','Cyan', 'Chocolate','pink'];

const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

const randomNumber = ()=>{
    return Math.floor(Math.random() * colors.length); 
    //math.floor->used becu random num either interger decimal any number so we no need any integer becu arrays are index like 0,1,2..
};

btn.addEventListener("click", ()=>{
    const num = randomNumber();
    document.body.style.backgroundColor = colors[num];
    color.textContent = colors[num];
});