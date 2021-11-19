
var picArr = ["Cute1.jpg","Cute2.jpg", "Cute3.jpg","cute4.png" , "cute5.jpg"];
var slideIndex =0;
function changeSlide()
{
  var picChange= document.getElementById("myImgId");
    if (slideIndex >= 4 ) {slideIndex = -1}
    picChange.src = picArr[slideIndex+1];
    console.log(slideIndex)
    console.log(picArr[slideIndex+1])
    slideIndex++;
}

function reverseSlide()
{
  var picChange= document.getElementById("myImgId");
  if (slideIndex <= 0) {slideIndex = 5}
    picChange.src = picArr[slideIndex-1];
    console.log(slideIndex)
    console.log(picArr[slideIndex-1])
    console.log(picArr[0])
    slideIndex--;
}
