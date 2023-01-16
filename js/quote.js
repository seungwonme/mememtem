const quoteSpan = document.querySelector("#quote span:first-child")
const authorSpan = document.querySelector("#quote span:last-child")
const quoteRun = (position) => {
    const url = 'https://api.quotable.io/random'
    fetch(url).then(response => response.json()).then(data => {
        const quote = data.content;
        const author = data.author;
        quoteSpan.innerText = quote;
        authorSpan.innerText = author;
    })
}
const quoteError = () => {
    console.log('Error');
}

navigator.geolocation.getCurrentPosition(quoteRun,quoteError)
