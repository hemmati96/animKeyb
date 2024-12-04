let $=document
const h1Elem=$.querySelector('.title')
document.addEventListener('keyup',function(event){
    appendValueToDom(event)
    
    let userEventKey=event.key.toUpperCase()
    let mainKeyElem=$.getElementById(userEventKey)
    mainKeyElem.classList.add('hit')
    mainKeyElem.addEventListener('animationend',function(){
        mainKeyElem.classList.remove('hit')
    })

})


function appendValueToDom(event){
    if(event.code ==='Backspace'){
        h1Elem.innerHTML=h1Elem.innerHTML.slice(0,-1)
        return
    }
h1Elem.innerHTML +=event.key
}