
let container = document.querySelector(".decode");
let text = container.innerText;
let showClassName = "show";


text = text.replace(/[{]/g, "<ul>")
text = text.replace(/[}]/g, "</ul>")

text = text.replace(/[[]/g, "<li>[")
text = "<li class='root'>"+text;
text = text.replace(/<ul>/g, "</li><ul>")

container.innerHTML = text;

let li = document.querySelectorAll("li");

li.forEach(item => {
    if(item.nextElementSibling){
        if(item.nextSibling.localName == "ul"){
            item.classList.add("multilevel");
        }
    }
    item.addEventListener("click",e => {
        let elem = e.currentTarget.nextSibling;
        if(elem && elem.localName == "ul"){
            if(elem.classList.contains(showClassName)){
                elem.classList.remove(showClassName);
            }
            else{
                elem.classList.add(showClassName);
            }
          }    
    })
})



