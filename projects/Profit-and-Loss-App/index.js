
// variable

let initial = document.querySelector("#initial")
let current = document.querySelector("#current")
let amount = document.querySelector("#amount")

// 
let initialprice=-1
let currentprice=-1
let stockamount=-1

initial.addEventListener("input", function price(){
  initialprice=initial.value
})

current.addEventListener("input", function curprice(){
  currentprice=current.value
})

amount.addEventListener("input", function amountno(){
  stockamount=amountno.value
})

let calc=document.querySelector("#calc")

// calculate

calc.addEventListener("click",function  calculate(){

if(initialprice<0 || currentprice<0 || stockamount )
{
  alert("Please fill all enter valid values")
  return
}

let diff=currentprice-initialprice

if(diff>0)
{
  let profit=diff
  let profitPercentage=(profit/initialprice)*100

  document.querySelector(".res").innerHTML="Profit is "+profit.toFixed(2)+" and profit percentage is "+profitPercentage.toFixed(2)+"%"
}

else if(diff<0)
{
  let loss=-diff
  let lossPercentage=(loss/initialprice)*100

  document.querySelector(".res").innerHTML="Loss is of "+loss+" and loss percentage is "+lossPercentage.toFixed(2)+"%"
}
else{
  document.querySelector(".res").innerHTML="No Loss No Profit"
}
})