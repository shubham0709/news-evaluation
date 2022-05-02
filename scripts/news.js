// Ude Import export (MANDATORY)
import { navbar, sidebar } from '../components/bars.js'

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('sidebar').innerHTML = sidebar(); 


let elem = JSON.parse(localStorage.getItem('news'));

let author = elem.author;
let content = elem.content;
let description = elem.description;
let title = elem.title;
let  src = elem.urlToImage;

// console.log(author, content, description, title, src);

document.getElementById('author').innerText = author;
document.getElementById('title').innerText = title;
document.getElementById('description').innerText = description;
document.getElementById('content').innerText  = content;
document.getElementById('img').setAttribute('src',src);