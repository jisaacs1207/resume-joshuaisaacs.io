const apiCall = 'https://9k89ikh6uc.execute-api.us-east-1.amazonaws.com/default/retrieveResumeHits';

async function callHits() {
    let hits;
    let hitsString;
    let returnString;
    let response = await fetch(apiCall)
    .then(response => response.json())
        .then(data => hits = Object.values(data)[0])
    returnString = "<h3>" + hits + " other visitors agree, Josh is a solid candidate." + "</h3>";
    document.getElementById("counter").innerHTML = returnString;
    return returnString;
}