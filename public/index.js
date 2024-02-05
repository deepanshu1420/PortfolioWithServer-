let bag = document.querySelectorAll(".nav-bar a");
bag = Array.from(bag);
console.log(bag);
bag.forEach(ele =>{
    ele.addEventListener("click" , ()=>{
        ele.classList.add("green-border");
    })
})
    