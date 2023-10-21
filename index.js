let copyButton = document.getElementById("copy-button");
let saveButton = document.getElementById("save-button");
let lockButton = document.getElementById("lock-button");
let contentArea = document.getElementById("content-area");

//Copy button function 
copyButton.addEventListener('click', (event) => {
    const codeCopy = contentArea.innerText;
    navigator.clipboard.writeText(codeCopy)
    .then(() => alert("copied to clipboard!"))
    .catch((error) => console.error("failed: "));
});

//save button function
saveButton.addEventListener('click',()=>{
    alert("code saved");
});

// Lock-unlock button functionality
let isLocked =false;
lockButton.addEventListener("click",()=>{
    isLocked = !isLocked;
    contentArea.contentEditable = !isLocked;
    lockButton.textContent = isLocked ? "Unlock" : "Lock";
    contentArea.classList.toggle("locked", isLocked);
});
