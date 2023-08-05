var textInput=document.querySelector('#textinput');
var translateButton=document.querySelector('#translate-btn');
var outputDiv=document.querySelector('#output');


function fetchApi(text){
 var url = "https://api.funtranslations.com/translate/minion.json?text="+text
 fetch(url)
.then(response => response.json())
.then(json => {
    var translatedText=json.contents.translated;
    outputDiv.innerText=translatedText;
})
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
