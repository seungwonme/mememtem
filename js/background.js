setTimeout(function () {
    document.getElementById('loading').classList.add('end')
},1000)

setTimeout(function () {
    document.getElementById('loading').classList.add('hidden')
},2000)

// const Access_Key = config.UNSPLASH_KEY;
const bgImgRun = (position) => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=1&client_id=${UNSPLASH_KEY}&orientation=landscape&per_page=20`;
    fetch(url).then(response => response.json()).then(data => {
        const random = Math.floor(Math.random()*20);
        const source =  data.results[random].urls.full
        document.body.style.background = `url(${source})`
        document.body.style.backgroundSize = 'cover'
    })
}
const bgImgError = () => {
    console.log('Error');
}

navigator.geolocation.getCurrentPosition(bgImgRun,bgImgError)
