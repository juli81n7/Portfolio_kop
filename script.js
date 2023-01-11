


const clips = document.querySelectorAll(".videoInsert")



clips.forEach(clips => {
    clips.addEventListener("mouseover", playvid);
    clips.addEventListener("mouseout", stopvid);
  });


function playvid(){
console.log("video play")
    this.play()
}
function stopvid(){
    console.log("video pause")
    this.pause()
}



const link_arrow = document.querySelector(".link_arrow") 


const arrow1 = document.querySelector(".arrow_down_1")
const dropdown = document.querySelector(".dropdown_content_1")

const display = document.querySelector(".display")


arrow1.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
  arrow1.classList.toggle("active_arrow");
});


const arrow2 = document.querySelector(".arrow_down_2")
const dropdown2 = document.querySelector(".dropdown_content_2")



arrow2.addEventListener("click", () => {
  dropdown2.classList.toggle("hide");
  arrow2.classList.toggle("active_arrow")
});

const arrow3 = document.querySelector(".arrow_down_3")
const dropdown3 = document.querySelector(".dropdown_content_3")



arrow3.addEventListener("click", () => {
  dropdown3.classList.toggle("hide");
  arrow3.classList.toggle("active_arrow")
});



 

















  

