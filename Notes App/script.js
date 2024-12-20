const notesContainer = document.querySelector(".notes-container")
const createbtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}
// this code creates a new editable note with a delete icon when the createbtn is clicked and adds it to the notesContainer
createbtn.addEventListener("click",()=>{
let inputbox= document.createElement("p")
let img = document.createElement("img");
inputbox.className = "input-box"
inputbox.setAttribute("contenteditable","true")
img.src = "images/delete.png"
notesContainer.appendChild(inputbox).appendChild(img)

})

// this code handles click events within the notes container. If an imaage is clicked it deletes the corresponding note and update the storage .
// if a paragraph is clicked ,it sets up an event listener to update the storage  whenever the content of the note is changed.
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName ==="P"){
        notes = document.quesySelectorAll(".input- box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    
    }
})
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }

})
