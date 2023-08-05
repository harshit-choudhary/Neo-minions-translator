var textInput=document.querySelector('#textinput');
var translateButton=document.querySelector('#translate-btn');
var outputDiv=document.querySelector('#output');

function errorHandler(error){
    console.log("error occured:"+error)
    alert('Free api limit reached! 5 api calls per hour try again after sometime')
}

function fetchApi(text){
 var url = "https://api.funtranslations.com/translate/minion.json?text="+text
 fetch(url)
.then(response => response.json())
.then(json => {
    var translatedText=json.contents.translated;
    outputDiv.innerText=translatedText;
})
.catch(errorHandler)
}

function clickHandler(){
    fetchApi(textInput.value)
}

textInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { 
      e.preventDefault();
      clickHandler();
    }
})


translateButton.addEventListener('click',clickHandler)
