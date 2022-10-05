
// selecting variables

let base=document.querySelector("#base")

let height=document.querySelector("#height")

let calc=document.querySelector("#calc")


// taking values

let basevalue=-1
let heightvalue=-1


// basevalue

base.addEventListener("input", function bvalue(){
  basevalue=base.value
})

// heightvalue

height.addEventListener("input", function hvalue(){
  heightvalue=height.value
})

// click event listening

calc.addEventListener("click", function calc(){
  if(basevalue===-1 || heightvalue ===-1)
  {
    alert("Please fill all sides length")
    return
  }

  if(basevalue<0 || heightvalue <0)
  {
    alert("Please enter valid sides length")
    return
  }

let Hypotenus=Math.sqrt(basevalue*basevalue + heightvalue*heightvalue)

document.querySelector("#hypotenus").innerHTML="Hypotenus is: "+ Hypotenus.toFixed(2)+" unit"

})

let clear=document.querySelector("#clear")

clear.addEventListener("click", function reset(){
  document.querySelector("#hypotenus").innerHTML=''
})