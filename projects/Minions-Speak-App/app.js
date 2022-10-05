

  let url="https://api.funtranslations.com/translate/minion.json?"


  let translate=document.querySelector("#translate")
  let erase=document.querySelector("#clear")
  
  translate.addEventListener("click",function vanila(){
  
    let EnglishInput=document.querySelector("#textarea-input").value
  
  
  
  var finalURL = buildFinalURL(EnglishInput)
  
  // console.log("eng "+EnglishInput)
  
  
  
  fetch(finalURL).then(function x(response){
  
    return response.json()
  }).then(function y(json){
  
    let minion=json.contents.translated
  
  
    document.querySelector("#textarea-output").innerHTML=minion
  }).catch(errorHandler)
  })
  
  function errorHandler(error){
    
   alert("Some error occured in the server.\nPlease try again after some time !\nSorry for the inconvenience. 🙂")
  }
  
  
  
  
  function buildFinalURL(EnglishInput) {
    var encodedURI = encodeURI(EnglishInput);
    console.log("Encoded URI: " + encodedURI);
    return `${url}?text=${encodedURI}`;
  }
  