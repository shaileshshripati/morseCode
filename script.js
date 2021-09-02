var inputtext = document.querySelector("#input-txt");
var btnmain = document.querySelector("#btn");
var outputdata = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/morse.json"


function getTranslationURL(data) {
    return serverURL + "?" + "text=" + data
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickhandler()
{
    var data = inputtext.value;
    fetch(getTranslationURL(data))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputdata.innerText = translatedText;
       })
    .catch(errorHandler)
};

btnmain.addEventListener("click", clickhandler)