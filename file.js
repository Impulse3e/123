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
function rand(){
    let var1 = ["file/143945456384e57a5fb692.95730990tshirt_6.png", "file/143945456384e56926c2d9.15400078tshirt_3.png"]
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
