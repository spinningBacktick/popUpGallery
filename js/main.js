const modal = document.querySelector(".mod");
const previews = document.querySelectorAll(".gallery img");
const originalImage = document.querySelector(".full-img");
const imgText = document.querySelector(".caption")

// console.log(previews);

previews.forEach(preview =>{
    preview.addEventListener('click', ()=>{
        modal.classList.add("open")
        originalImage.classList.add("open");
        //dynamic change text and image
        const originalSrc = preview.getAttribute("data-original")
        originalImage.src = `${originalSrc}`;
        const altText = preview.alt;
        imgText.innerHTML = altText;
    })
})

modal.addEventListener("click", (e)=>{
    // console.log(e.target)
    if(e.target.classList.contains("mod")){
        // console.log(e.target)
        modal.classList.remove("open");
        originalImage.classList.remove("open");
    }
});