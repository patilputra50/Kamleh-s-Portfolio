// test
//document.querySelector("#fiveH").innerHTML="Hello 500"

let billInput=document.querySelector("#bill")
let cashInput=document.querySelector("#cash")

let billvalue= -1
let cashvalue= -1

billInput.addEventListener('input',function bill(){
  billvalue=billInput.value
  billvalue=Number(billvalue)
})

cashInput.addEventListener('input',function cash(){
  cashvalue=cashInput.value
  cashvalue=Number(cashvalue)
})

// check

let check=document.querySelector("button")

check.addEventListener("click", function change(){

// reset
document.querySelector("#twoTh").innerHTML=0
document.querySelector("#fiveH").innerHTML=0
document.querySelector("#oneh").innerHTML=0
document.querySelector("#twenty").innerHTML=0
document.querySelector("#one").innerHTML=0
document.querySelector("#ten").innerHTML=0
document.querySelector("#five").innerHTML=0

//document.querySelectorAll(".reset").innerHTML=0

if(cashvalue<0 || billvalue<0 || cashvalue<billvalue)
{
  alert("Please enter positive and valid values")
  return
}

// user message

document.querySelector("#message").textContent="Minimum number of notes in returnable amount"

// logic part

if(cashvalue >= billvalue)
{
  let give= (Number(cashvalue)-Number(billvalue))
  
// 2000 exchange  

  let mod1=Math.trunc(give / 2000)

  console.log("mod1 "+ mod1)

  if(mod1 > 0)
  {

    console.log("modulo  " +(mod1))

    document.querySelector("#twoTh").innerHTML= mod1

    give=give - (2000*mod1)
  }

  // 500 

  let mod2=Math.floor(give/500)

  if(mod2 > 0)
  {
    document.querySelector("#fiveH").innerHTML=mod2
    give= give- (500*mod2)
  }


  // 100
  let mod3=Math.floor(give/100)

  if((mod3) > 0)
  {
    document.querySelector("#oneh").innerHTML=mod3
    give= give- (100*mod3)
  }


  // 20

  let mod4=Math.floor(give/20)

  if(mod4 > 0)
  {
    document.querySelector("#twenty").innerHTML=mod4
    give= give- (20*mod4)
  }

  // 10

  let mod5=Math.floor(give/10)

  if(mod5 > 0)
  {
    document.querySelector("#ten").innerHTML=mod5
    give= give- (10*mod5)
  }

  // 5

  let mod6=Math.floor(give/5)

  if(mod6 > 0)
  {
    document.querySelector("#five").innerHTML=mod6
    give= give- (5*mod6)
  }

  // 1

  let mod7=Math.floor(give/1)
  if(mod7 > 0)
  {
    document.querySelector("#one").innerHTML=mod7
   
  }
}

}

)
