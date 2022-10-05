
// taking variable

let date=document.querySelector("#date")

let check=document.querySelector("#check")

let datevalue=-1

date.addEventListener("input", function Date(){
  datevalue=date.value
})

console.log("value ",datevalue )

check.addEventListener("click", function checking(){

if(datevalue=='-1'){
  alert("Please fill birth date")
  return
}

  let hyphen=datevalue.replaceAll('-','')
//alert(hyphen)
console.log(hyphen)

  let arrdate=hyphen.split('');
  // ";" necessary here for destructring

// destructring (required ";" before it)

[arrdate[4], arrdate[5]] = [arrdate[5], arrdate[4]];

for(let i=0;i<8;i++)
  console.log(arrdate[i])

  for(let i=3;i>=0;i--)
  {
    if(Number(arrdate[i])!=Number(arrdate[7+(i-3)]))
    {
document.querySelector("#output").innerHTML=" Oh no!,  Not a Palindrome 😌"
return
    }
  }

  document.querySelector("#output").innerHTML=" Hurrah!, A Palindrome 🤩"

})
