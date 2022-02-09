"use strict";
//Grid items
const container = document.querySelector(".grid-container");
const gItem = document.querySelectorAll(".grid-item");
// console.log(gItem);
//Numbers
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("zero");

// Modes
const modes = document.querySelector('.modes');
const s = document.querySelector(".sunny");
const m = document.querySelector(".moon");

// Input
const input = document.querySelector(".input");

// Operators
const erase = document.getElementById("erase");
const residue = document.getElementById("percentage");
const square = document.getElementById("square");
const division = document.getElementById("/");
const mult = document.getElementById("by");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const root = document.getElementById("root");
const del = document.getElementById("del");
const equal = document.getElementById("equal");

// Result
const result = document.querySelector('.result');
let sqrT=false;

equal.addEventListener("click", ()=>{
    input.style.color = `gray`;
    result.style.color = `#52BF90`;
    result.textContent = eval(input.textContent);
    if(sqrT==true) sqrT=false;
    console.log(eval(input.value));
})

erase.addEventListener("click",()=>{
    input.textContent='';
    if(booleanM==true){
        input.style.color=`gray`;
    }else if(booleanS=true){
        input.style.color=`#111`;
    }
    if(sqrT==true) sqrT=false;
})

del.addEventListener("click",()=>{
    input.innerText = input.innerText.slice(0,-1);
})

// Numbers
const write = (n)=>{
    input.innerText += n.textContent;
    if(booleanM==true){
        result.style.color = `#fff`;
    }else if(booleanS==true){
        result.style.color = `#111`;
    }
    console.log('test');
    
    resolve();
}

one.addEventListener("click", ()=>{
    write(one);
});

two.addEventListener("click",()=>{
    write(two);
});

three.addEventListener("click",()=>{
    write(three);
})

four.addEventListener("click",()=>{
    write(four);
})

five.addEventListener("click",()=>{
    write(five);
})

six.addEventListener("click",()=>{
    write(six);
})

seven.addEventListener("click",()=>{
    write(seven);
})

eight.addEventListener("click",()=>{
    write(eight);
})

nine.addEventListener("click",()=>{
    write(nine);
})

zero.addEventListener("click",()=>{
    write(zero);
})

// Operators
division.addEventListener("click",()=>{
    write(division);
})

mult.addEventListener("click",()=>{
    write(mult);
})

minus.addEventListener("click",()=>{
    write(minus);
})

plus.addEventListener("click",()=>{
    write(plus);
})

// Adition functions
residue.addEventListener("click",()=>{
    write(residue);
})

square.addEventListener("click",()=>{
    input.textContent += `**`;
})

root.addEventListener("click",()=>{
    sqrT=true;
    result.textContent = Math.sqrt(input.textContent);
    console.log('sqrt es true');
})

const resolve = ()=>{
    if(sqrT==false){
        setInterval(()=>{
            try{
                result.textContent = eval(input.textContent);
                result.style.fontSize=`2.5rem`;
            }catch{
                result.textContent = `Put another number`;
                result.style.fontSize=`1.5rem`;
                // console.log('Error');
            }
        },100);
    }
}

// Dark Mode
let booleanM = false;
let booleanS=false;

m.addEventListener("click",()=>{
    if(booleanM==false){
        changeColor("#f7f7f7");
        booleanM=true;
        booleanS=false;
    }
})

s.addEventListener("click",()=>{
    if(booleanS==false){
        changeColor("#111");
        booleanS=true;
        booleanM=false;
    }
})

const changeColor = color=>{
    let b = document.getElementById('body');
    b.classList.toggle('dark-bg');
    modes.classList.toggle('dark-bg2');
    container.classList.toggle('dark-bg2');
    document.querySelector('.calculator').classList.toggle('dark');
    gItem.forEach(e=>{
        e.classList.toggle('dark-keys');
    })
    document.querySelector('.credits').style.color= color;
    input.style.color=color;
    result.style.color=color;
}
