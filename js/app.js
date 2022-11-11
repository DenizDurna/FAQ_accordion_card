//Move arrows and p tag incrementally if click event occurs
const clck=(e)=> {
    if(!e.parentElement.lastElementChild.style.height){
    e.lastElementChild.style.transform="rotate(-180deg)"
    e.parentElement.lastElementChild.style.height=e.parentElement.lastElementChild.scrollHeight+"px"
}else{
e.lastElementChild.style.transform="rotate(0deg)"
    e.parentElement.lastElementChild.style.height=""
}}
