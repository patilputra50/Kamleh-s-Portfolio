
     // Variable fetching from DOM

let dob=document.querySelector("#dob")
console.log(dob.value)

let number=document.querySelector("#number")
console.log(number.value)

 //console.log("hi there")

// taking Date of berth value

let dobvalue=Number('')
let digits
let sum=0

dob.addEventListener("input", function dateofbirth(){
  sum=0
   dobvalue=dob.value
console.log(dobvalue)

 digits=dobvalue.split('')

for(let i=0;i<digits.length;i++)
{

  if(!isNaN(digits[i]))
  {
    sum+=Number(digits[i])
   console.log(digits[i])
  }

  }
   console.log("sum is  ",sum)
  // console.log(if(isNaN(digits[i]))
  
})


// taking luycky number

let numbervalue=Number('')

number.addEventListener("input", function lucknumber(){
  numbervalue=number.value
  console.log("number is  ",numbervalue)
 
})

// checking its luckiness

let check=document.querySelector("#check")

check.addEventListener("click", function checking(){

  if(dobvalue===Number('') || numbervalue===Number(''))
  {
    alert("Please fill all the input boxes")
    return
  }

  if(sum%numbervalue===0)
  {
    document.querySelector("#span").innerHTML="Hurrah!, Your Birthday is Lucky"
  }
  else
  {
    document.querySelector("#span").innerHTML="Sorry!, Your lucky number is not lucky enough to make your birthday lucky. try with another lucky number"
  }

})







