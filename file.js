function print_contact(){
    let print_contact1 = "skype: helper"
    let print_contact2 = "telegram: @helper"
    let print_contact3 = "tel: 8995345235"
    alert(print_contact1 + "\n" + print_contact2 + "\n" + print_contact3)
}
function f01(){
    /*for(i = 0; i = 1; i++){
        
    }*/
    let a = document.getElementById("a01")
    a.classList.toggle("animate__repeat-3")
}
setInterval(f01, 4000)
function text_color(){
    let a = document.getElementById("i01");
    if(window.getComputedStyle(a).fontFamily == "Comfortaa"){
    a.style.fontFamily = "Comic Sans MS";
    }
    if(window.getComputedStyle(a).fontFamily = "Comic Sans MS"){
    a.style.fontFamily = "Comfortaa";
    }
}
function text_roloc(){
    let a = document.getElementById("a02")
    let b = window.getComputedStyle(a).backgroundColor
    /*if(b != "rgb(0, 0, 0)"){
        a.style.backgroundColor = "black"
    }
    else{
        a.style.backgroundColor = "white"
    }*/
    let a1 = parseFloat(prompt("Введите первое число"))
    let a2 = parseFloat(prompt("Введите второе число"))
    if(a1 > a2){
        alert(a1);
        a.style.backgroundColor = "black"
    }
    else{
        alert(a2);
        a.style.backgroundColor = "white";
    }
}
function printnum(){
    let a1 = parseFloat(prompt("Введите первое число"))
    let a2 = parseFloat(prompt("Введите второе число"))
    if(a1 > a2){
        alert(a1);
    }
    else{
        alert(a2);
    }
}
    // function function1(){
    //     let a = ["i01", "i02", "i03", "i04", "i05", "i06", "i07", "i08"]
    //     for(let i = 0; i < a.length; i++){
    //         let c = document.getElementById(a[i])
    //         c.classList.toggle("c08_button")
    //         c.classList.toggle("c08_button2")
    //     }
    // }
    // function function2(){
    //     let a = document.getElementById("i09")
    //     a.classList.toggle("r01")
    // }
// const c06 = document.querySelector(".c06")
// const c24 = document.querySelector(".c24")
// const c22 = document.querySelector(".c22")
// c06.addEventListener("click", function(){
//     c24.classList.add("c24_1")
// })
function rand2(){
    var var1 = ["file/143945456384e57a5fb692.95730990tshirt_6.png", "file/143945456384e56926c2d9.15400078tshirt_3.png","file/t_shirt1.png", "file/t_shirt2.png"]
    let var2 = ["i10", "i11"];
    for(let i = 0; i < var2.length; i++){
        let a = document.getElementById(var2[i])
        a.src = rand(var1)
    }
}
function rand(var1){
    var rand = Math.floor(Math.random() * (var1.length));
    return var1[rand];
}
const c06 = document.querySelector(".c06");
const c24 = document.querySelector('.c24');
const c22 = document.querySelector('.c22');
const c19 = document.querySelector('.c19');

c06.addEventListener("click", function(){
    c24.classList.add("c24_1");
    c19.classList.add("c19_1");
})
c22.addEventListener("click", function(){
    c24.classList.remove("c24_1")
    c19.classList.remove("c19_1")
})
let offset = 0;
const onset1 = document.querySelector(".prev");
const onset2 = document.querySelector('.next');
const slider_line = document.querySelector(".slider-line")
onset1.addEventListener("click", function(){
    o = document.getElementById('left');
    a = document.getElementById('right')
    if(offset != 0){
        offset = offset - 350;
        slider_line.style.left = -offset + "px";
        o.src = "file/left.png";
        a.src = "file/right.png"
    }
    if(offset == 0){
        o.src = "file/left1.png";
        a.src = "file/right.png";4
    }
    // else{
    //     offset = 700;
    //     slider_line.style.left = -offset + "px";
    // }
})
onset2.addEventListener("click", function(){
     o = document.getElementById('right');
     a = document.getElementById('left')
     if(offset != 700){
        offset = offset + 350;
        slider_line.style.left = -offset + "px";
        o.src = "file/right.png";
        a.src = "file/left.png";
    }
    if(offset == 700){
        o.src = "file/right1.png";
        a.src = "file/left.png";
    }
    // else{
    //     offset = 0;
    //     slider_line.style.left = -offset + "px";
    // }
})
const onset3 = document.querySelector(".prev1");
const onset4 = document.querySelector('.next1');
const slider_line1 = document.querySelector(".slider_line1")
onset3.addEventListener("click", function(){
    o = document.getElementById('left1');
    a = document.getElementById('right1');
    if(offset != 0){
        offset = offset - 350;
        o.src = "file/left.png";
        a.src = "file/right.png";
    }
    else if(offset == 0){
        offset = 700;
    }
slider_line1.style.left = -offset + "px";
})
onset4.addEventListener("click", function(){
        o = document.getElementById('right1');
        a = document.getElementById('left1')
        // alert (offset);
    if(offset != 700){
        offset = offset + 350;
        o.src = "file/right.png";
        a.src = "file/left.png";
    }
    else if(offset == 700){
        offset = 0;
    }
slider_line1.style.left = -offset + "px";
    // else{
    //     offset = 0;
    //     slider_line.style.left = -offset + "px";
    // }
})