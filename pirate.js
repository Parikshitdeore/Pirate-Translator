var TranslationInput = document.querySelector("#translate-input");
var button = document.querySelector("#translate-button")
var TranslationOutput = document.querySelector("#translate-output")
button.addEventListener("click", buttonClickHandler)
var url = "https://api.funtranslations.com/translate/pirate.json";

function buttonClickHandler(event){
    var input = TranslationInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL)
    fetch(finalURL)
    .then(response => response.json())
    .then(json=>{TranslationOutput.innertext = json.contents.translated;})
    .catch(()=> alert("an error occured"))
}

function constructURL(inputText){
    return url + "?" + "text=" +inputText;
}