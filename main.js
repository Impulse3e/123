/*function star(k){
    let a = document.getElementById("io1")
    let b = document.getElementById("io2")
    let c = document.getElementById("io3")
    let d = document.getElementById("io4")
    let e = document.getElementById("io5")
    if(k == 1){
        a.src = "file/143945456406143d93e5d9.67304402star_1.png"
    }
    if(k == 2){
        a.src = "file/143945456406143d93e5d9.67304402star_1.png"
        b.src = "file/143945456406143d93e5d9.67304402star_1.png"
    }
    if(k == 3){
        a.src = "file/143945456406143d93e5d9.67304402star_1.png"
        b.src = "file/143945456406143d93e5d9.67304402star_1.png"
        c.src = "file/143945456406143d93e5d9.67304402star_1.png"
    }
    if(k == 4){
        a.src = "file/143945456406143d93e5d9.67304402star_1.png"
        b.src = "file/143945456406143d93e5d9.67304402star_1.png"
        c.src = "file/143945456406143d93e5d9.67304402star_1.png"
        d.src = "file/143945456406143d93e5d9.67304402star_1.png"
    }
    if(k == 5){
        a.src = "file/143945456406143d93e5d9.67304402star_1.png"
        b.src = "file/143945456406143d93e5d9.67304402star_1.png"
        c.src = "file/143945456406143d93e5d9.67304402star_1.png"
        d.src = "file/143945456406143d93e5d9.67304402star_1.png"
        e.src = "file/143945456406143d93e5d9.67304402star_1.png"
    }
}*/
/*function unstar(k){
    let a = document.getElementById("io1")
    let b = document.getElementById("io2")
    let c = document.getElementById("io3")
    let d = document.getElementById("io4")
    let e = document.getElementById("io5")
    if(k == 1){
        a.src = "file/14394545640614572a5374.84355377star_2.png"
    }
    if(k == 2){
        a.src = "file/14394545640614572a5374.84355377star_2.png"
        b.src = "file/14394545640614572a5374.84355377star_2.png"
    }
    if(k == 3){
        a.src = "file/14394545640614572a5374.84355377star_2.png"
        b.src = "file/14394545640614572a5374.84355377star_2.png"
        c.src = "file/14394545640614572a5374.84355377star_2.png"
    }
    if(k == 4){
        a.src = "file/14394545640614572a5374.84355377star_2.png"
        b.src = "file/14394545640614572a5374.84355377star_2.png"
        c.src = "file/14394545640614572a5374.84355377star_2.png"
        d.src = "file/14394545640614572a5374.84355377star_2.png"
    }
    if(k == 5){
        a.src = "file/14394545640614572a5374.84355377star_2.png"
        b.src = "file/14394545640614572a5374.84355377star_2.png"
        c.src = "file/14394545640614572a5374.84355377star_2.png"
        d.src = "file/14394545640614572a5374.84355377star_2.png"
        e.src = "file/14394545640614572a5374.84355377star_2.png"
    }
}*/
function unstar1(k){
    k = k - 1;
    arr = ["io1", "io2", "io3", "io4", "io5"]
    let o = document.getElementById(arr[k])
    if(o.src.indexOf("file/14394545640614572a5374.84355377star_2.png") > -1){
        for(i = 0; i <= k; i++){
            o = document.getElementById(arr[i]);
            o.src = "file/143945456406143d93e5d9.67304402star_1.png";
        }
    }
    else{
        for(i = 0; i <= 5; i++){
            o = document.getElementById(arr[i]);
            o.src = "file/14394545640614572a5374.84355377star_2.png";
        }
    }
}   