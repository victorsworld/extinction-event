let list1 = document.querySelectorAll('#section-1 li');

for(let i = 0; i < list1.length; i++){
    list1[i].addEventListener('click', function(){
        if(list1[i].style.textDecoration !== 'line-through'){
            list1[i].style.textDecoration = 'line-through'
        } else(list1[i].style.textDecoration = 'none')
    })
}

let list2 = document.querySelector('#section-2');
list2.addEventListener('click', function(event){
    let element = event.target
    element.style.opacity = '0'
})

let list3 = document.querySelector('#row')
list3.addEventListener('click', function(event){
    let element = event.target;
    element.style.width = '0px' 
})

let button = document.querySelector('#destroy-all')

button.addEventListener('click',function(){
    console.log("button clicked!")
    let wow = document.querySelectorAll('#section-2 li')
    list3 = document.querySelectorAll('#row img')
        for(let i = 0; i < list1.length; i++){
        list1[i].style.textDecoration = 'line-through'}

        for(let i = 0; i < wow.length; i++){
        wow[i].style.opacity = '0'}

        for(let i = 0; i < list3.length; i++){
        list3[i].style.width = '0px' }
})
