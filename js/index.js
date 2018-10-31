//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = createElement('div');

var element = document.createElement('div');
undefined
element.innerHTML = "You truly suck";
"You truly suck"
element.style.backgroundColor = '#f9f9f9';
"#f9f9f9"
element.appendChild(element);

document.body.appendChild(element);

element.style.textAlign = 'Center';
"Center"
var ul =document.createElement('ul');
undefined
for (let i = 0; i < 3; i++) {
    let li = document.createElement('li'); li.innerHTML = (i +1).toString(); ul.appendChild(li); }
<li>​3​</li>​
element.appendChild(li)

element.appendChild(ul)
<ul>​…​</ul>​
ul.style.textAlign = 'left';
"left"
ul.removeChild(ul.querySelector("li:nth-child(2)"));
<li>​2​</li>​
ul.remove;

ul.remove();
undefined
