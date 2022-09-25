var translateInput = document.querySelector("#translate-input");
var button = document.querySelector("#translate-button")
button.addEventListener("click", buttonClickHandler)
var translateOutput = document.querySelector("#translate-output")

var url = "https://api.funtranslations.com/translate/pirate.json";

function constructURL(inputText){
    return url + "?" + "text=" +inputText;
}

function buttonClickHandler(event){
    var input = translateInput.value;
    var finalURL = constructURL(input)
    console.log(finalURL)
    
    fetch(finalURL)
    .then(response => response.json())
    .then(json=>{var translatedText = json.contents.translated;
        translateOutput.innerText=translatedText;})
    .catch(()=> alert("an error occured"))
}