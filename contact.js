document.querySelector(".bars").addEventListener("click",function () {
    document.querySelector(".dropdown").style.display = "block";
    document.querySelector(".bars").style.display = "none";
})
document.querySelector(".closex").addEventListener("click",function () {
    document.querySelector(".dropdown").style.display = "none";
    document.querySelector(".bars").style.display = "block";
})