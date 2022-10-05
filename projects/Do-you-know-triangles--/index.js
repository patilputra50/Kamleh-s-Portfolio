// taking angles

let firstAngle=document.querySelector("#first")

let secondAngle=document.querySelector("#second")

let thirdAngle=document.querySelector("#third")

let IsTriangle=document.querySelector("#IsTriangle")

// Anglevalue
let firstAngleValue=-1
let secondAngleValue=-1
let thirdAngleValue=-1


// firstAnglevalue

firstAngle.addEventListener("input", function first(){
   firstAngleValue=firstAngle.value
})

// secondAnglevalue

secondAngle.addEventListener("input", function second(){
  secondAngleValue=secondAngle.value
})

// thirdAnglevalue

thirdAngle.addEventListener("input", function third(){
  thirdAngleValue=thirdAngle.value
})

// is triangle

IsTriangle.addEventListener("click",function triangle(){

  if(firstAngleValue<0 || secondAngleValue<0|| thirdAngleValue<0 )
  {
    alert("Please fill all valid angles")
    return
  }

  // let ty=typeof(firstAngleValue)
  // console.log("type ", ty)
let sum=(Number(firstAngleValue) + Number(secondAngleValue) + Number(thirdAngleValue))


if(sum==="NaN" )
{
  alert("Please fill all angles")
  return
}
  if( sum==180)
  {
   
    document.querySelector("#triangle").innerHTML="Triangle"
  }
  else{
   
    document.querySelector("#triangle").innerHTML="Not a Triangle"
  }
})