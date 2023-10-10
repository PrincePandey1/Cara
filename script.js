// Logic for the navbar
const bar = document.getElementById('bar');  //Getting bar icon
const nav = document.getElementById('navbar'); //Getting Nav bar
const close = document.getElementById('close'); //Getting close icon



//If bar is clicked then click event is trigered and 
// respective function would be called(navabar will be displayed from the right)

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

//If close button is clicked then remove the navbar
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}