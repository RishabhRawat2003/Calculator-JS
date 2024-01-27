let numBox = document.querySelector("#numBox")
let onOroff = document.querySelector("#togglebtn")
let num = document.querySelectorAll(".num")
let clearNum = document.querySelector("#clear")
let allClear = document.querySelector("#allClearSign")
let equlaTo = document.querySelector("#equalToSign")
let addition = document.querySelector(("#add"))
let subtract = document.querySelector(("#sub"))
let numDivide = document.querySelector(("#divide"))
let numMultiply = document.querySelector(("#multiply"))

//In this set of code whenever user reload the page numBox Value will be removed.
let reload = window.location.reload
if(reload) numBox.value = ''


//In This Set of Codes ,I am Just Setting Disable Attributes So That The User Has to On the Calculator First Before Using The Buttons.
allClear.setAttribute("disabled","")
equlaTo.setAttribute("disabled","")
clearNum.setAttribute("disabled","")
numBox.setAttribute("disabled","")
num.forEach((btnY)=>{
    btnY.setAttribute("disabled","")
})


//Here I Added Eventlistener  in The On/Off Button So whenever User Click The Button, Disable Attributes Has Been Toggle Here Like a Real Life On Off Buttons .
onOroff.addEventListener("click", function (e) {
    numBox.value = ""
    numBox.toggleAttribute("disabled")
    clearNum.toggleAttribute("disabled")
    allClear.toggleAttribute("disabled")
    equlaTo.toggleAttribute("disabled")
    numBox.classList.toggle("toggle")
    equlaTo.classList.toggle("equalToX")
    allClear.classList.toggle("allClearX")
    numBox.classList.toggle("numBoxX")
    clearNum.classList.toggle("clearNumX")
    num.forEach((btnX)=>{
        btnX.toggleAttribute("disabled")
        btnX.classList.toggle("numX")
    })
})


//Here We Use ForEach Loop for Applying a Condition to All The Buttons with (num) Class .
num.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        let one = e.target.innerHTML
        numBox.value += one
    })
})


//Here Adding Eventlistener To Clear The NumBox Value .
allClear.addEventListener("click",function(e){
    numBox.value = ""
})


//In This I add Event in C button So that it Can Clear the Number in NumBox Value One by One .
clearNum.addEventListener("click",function(e){
    e.preventDefault()
    numBox.value = numBox.value.slice(0,-1)
})


//Here is The Final Set of Codes Where The Real Calculations are Made .
equlaTo.addEventListener("click",function(e){
    e.preventDefault()
    if(e.target.innerHTML === "="){
        numBox.value = eval(numBox.value)
        numBox.value = numBox.value
    }
})

//This is the same method as above but difference in this code is when user enter "Enter" key in keyboard calculation takes place.
numBox.addEventListener("keyup" ,function(e){
    e.preventDefault()
    if(e.key ==="Enter"){
        numBox.value = eval(numBox.value)
        numBox.value = numBox.value
    }
})
