// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, sidebar } from '../components/bars.js'

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('sidebar').innerHTML = sidebar();

let x = JSON.parse(localStorage.getItem('news')) || [];



let append = (arr) => {
    let results = document.getElementById('results');
    results.innerHTML = null;
    arr.forEach((elem, idx) => {
        let news = document.createElement('div');
        news.setAttribute('class', 'news');

        let img = document.createElement('img');
        img.setAttribute('src', elem.urlToImage);

        let news_details = document.createElement('div');
        news_details.setAttribute('class', 'news_details');

        let title = document.createElement('h3');
        title.innerText = elem.title;

        let description = document.createElement('p');
        description.innerText = elem.description;

        news.append(img, news_details)
        news_details.append(title, description);
        results.append(news);

        news.addEventListener('click', () => {
            showDetailedNews(elem, idx);
        })
    })
}

let showDetailedNews = (elem, idx) => {
    localStorage.setItem('news', JSON.stringify(elem));
    window.location.href = 'news.html';
}
append(x);

const search_input = document.getElementById('search_input');

let findNews = async (e)=> {
    if (e.code === 'Enter') {
        let query = document.getElementById('search_input').value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
        let data = await fetch(url);
        let res = await data.json();
        console.log(res);
        //append(res.articles);
        localStorage.setItem('news',JSON.stringify(res.articles));
        window.location.href='search.html';
    }
}
search_input.addEventListener('keydown', findNews);