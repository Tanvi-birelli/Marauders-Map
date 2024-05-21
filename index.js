const spellInput = document.getElementById("spell");
const replyContainer = document.getElementById("reply-container");
const spellContainer = document.getElementById("spell-container");
const body= document.body;
const type = document.getElementById("type");

const actualSpell ="i solemnly swear that i am up to no good";

document.addEventListener("DOMContentLoaded", ()=>{
    spellInput.addEventListener("input",()=>{
        spellContainer.style.display="none";
        const spell = spellInput.value.trim().toLowerCase();
        if (spell===actualSpell){
            body.setAttribute("class","correct-answer");
            spellInput.value="";
        }else{
            replyContainer.style.display="block";
        }
    })
})


