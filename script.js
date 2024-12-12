//your code here
let container = document.querySelector("main")

let imagesClassName = ["img1", "img2", "img3", "img4", "img5"]
let randomIndex = parseInt(Math.random()*imagesClassName.length)

imagesClassName.push(imagesClassName[randomIndex])

let count = 1
while(true){

    let set = new Set(imagesClassName)

    if(set.size === 1){
        break
    }

    let pic = document.createElement("img")

    let randomIndex = parseInt(Math.random()*imagesClassName.length)

    if(imagesClassName[randomIndex] == "done"){
        continue
    }

    pic.className = imagesClassName[randomIndex]
    pic.alt = imagesClassName[randomIndex]
    pic.id = `count${count++}`

    imagesClassName[randomIndex] = "done"

    container.append(pic)

    pic.addEventListener("click", changeState)
}

let h3 = document.createElement("h3")
h3.id = "h"
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
container.append(h3)

let numberOfSelectedImages = 0
function changeState(e){
    let clickedImage = e.target

    if(clickedImage.classList[1] == "selected"){
        return
    }
    
    numberOfSelectedImages++

    clickedImage.classList.add("selected")

    if(document.querySelector("#reset") == null){
        let resetBtn = document.createElement("button")
        resetBtn.id = "reset"
        resetBtn.innerText = "Reset"
    
        container.append(resetBtn)

        resetBtn.addEventListener("click", reset)

    }

    if(numberOfSelectedImages == 2){
        let verifyBtn = document.createElement("button")
        verifyBtn.id = "verify"
        verifyBtn.innerText = "Verify"
    
        container.append(verifyBtn)

        verifyBtn.addEventListener("click", verify)

    }

    if(numberOfSelectedImages == 3){
        let verifyBtn = document.querySelector("#verify")
        verifyBtn.remove()
    }
}

function reset(){
    let selectedImages = document.querySelectorAll(".selected")

    for(let t of selectedImages){
        t.classList.remove("selected")
    }

    let resetBtn = document.querySelector("#reset")
    resetBtn.remove()

    let verifyBtn = document.querySelector("#verify")

    if(verifyBtn != null){
        verifyBtn.remove()
    }

    numberOfSelectedImages = 0
}

function verify(){
    let selectedImages = document.querySelectorAll(".selected")
    let para = document.createElement("p")
    para.id = "para"
    container.append(para)

    if(selectedImages[0].className == selectedImages[1].className){
        para.innerText = "You are a human. Congratulations!."
    }
    
    else{
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }
    
    let verifyBtn = document.querySelector("#verify")
    verifyBtn.remove()
}