var langauges = document.getElementById("langauge");
var websiteNames = document.getElementById("websiteName");
var contents = document.getElementById("content");
var webAdress = document.getElementById("iframe-header");

const websites = [
    {
      websiteName: "beinsports.com.tr",
      website: "https://beinsports.com.tr//",
      langauge: "Turkisch",
      content: "Sport",
     
    },
    {
      websiteName: "evbtraining.de/",
      website: "https://evbtraining.de/full-stack-web-developer/",
      langauge: "Deutsch",
      content: "Bildung-Beratung",
     
    },
    {
      websiteName: "getcssscan.com",
      website: "https://getcssscan.com/",
      langauge: "Englisch",
      content: "Web Tools",
     
    },
    {
      websiteName: "game.de",
      website: "https://www.game.de/",
      langauge: "Deutsch",
      content: "Game",
     
    },
    {  
      websiteName: "washingtonpost.com/",
      website: "https://www.washingtonpost.com/",
      langauge: "Englisch",
      content: "News",
     
    },
  
  ];
  
  
  for (i = 0; i < websites.length; i++) {
    websites[i];
  
}




var randomIndex;
var lastNumber;

function randomNumber() {
  randomIndex = Math.floor(Math.random() * websites.length);
  
         while(randomIndex == lastNumber) {
             randomIndex = Math.floor(Math.random()*websites.length)
        } 
        
        lastNumber = randomIndex; 
        



        webAdress.src= websites[randomIndex].website;
        websiteNames.innerHTML = websites[randomIndex].websiteName;
        langauges.innerHTML = websites[randomIndex].langauge;
        contents.innerHTML = websites[randomIndex].content;
}
