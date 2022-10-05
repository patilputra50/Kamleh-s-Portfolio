// variable 

let first=document.querySelector("#first")
let second=document.querySelector("#second")
let third=document.querySelector("#third")
let area=document.querySelector("#area")


// taking values

let firstside=-1
let secondside=-1
let thirdside=-1

// firstside

first.addEventListener("input", function firstlength(){
  firstside=first.value
})

// secondvalue

second.addEventListener("input", function firstlength(){
  secondside=second.value
})

// thirdvalue

third.addEventListener("input", function firstlength(){
  thirdside=third.value
})

// getting area

area.addEventListener("click", function getarea(){

if(firstside==-1 || secondside==-1 || thirdside==-1)
{
  alert("Please give all sides length")
  return
}

if(firstside<0 || secondside<0 || thirdside<0)
{
  alert("Please enter valid sides length")
  return
}

// sum of two sides > third side

if((firstside+ secondside)<= thirdside || (firstside+ third)<=secondside || (secondside+thirdside)<=firstside)
{
  alert("Invalid input: make sure Sum of any two sides would be greater than the third side")
  return
}




// calculate

let s=((Number(firstside) + Number(secondside) + Number(thirdside))/2).toFixed(2)

let gettingarea= Math.sqrt(s*(s-Number(firstside))*(s-Number(secondside))*(s-Number(thirdside)))

document.querySelector("#res").innerHTML="Area of  Triangle is: "+Number(gettingarea).toFixed(2)


})