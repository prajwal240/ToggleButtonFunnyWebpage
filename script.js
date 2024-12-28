let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let rm;

btn1.addEventListener("click", () => {
    if (btn1.innerHTML == "Yes") {
        document.querySelector(".c1").children[1].remove();
        document.querySelector(".c3").remove();
        rm = document.querySelector(".c1");
        rm.innerHTML = "<div class=c4>Congratulations , You Are Soulmates</div>";
        rm.classList.add("c1 rotator");
    } else {
        alert("Think Once Again\nThank You");
    }
});

btn2.addEventListener("click", () => {
    if (btn2.innerHTML == "Yes") {
        document.querySelector(".c1").children[1].remove();
        document.querySelector(".c3").remove();
        rm = document.querySelector(".c1");
        rm.innerHTML = "<div class=c4>Congratulations , You Are Soulmates</div>";
        rm.classList.add("c1 rotator");
    } else {
        alert("Think Once Again , Its very crucial decision\nThank You");
    }
});

btn2.addEventListener("mouseenter", () => {
    setTimeout(() => {
        if (btn2.innerHTML == "No") {
            console.log("Hello2");
            btn2.innerHTML = "Yes";
            btn1.innerHTML = "No";
        }
    }, 1)
})

btn1.addEventListener("mouseenter", () => {
    setTimeout(() => {
        if (btn1.innerHTML == "No") {
            console.log("Hello1");
            btn2.innerHTML = "No";
            btn1.innerHTML = "Yes";
        }
    }, 1)
})


