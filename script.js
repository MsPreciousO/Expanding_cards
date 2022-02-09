const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener ('click', () => {
        // alert('You are a nosy method')==== testing
        // panel.classList.add('active')
        // we want to remove the active class from for all panels b4 applying active on the current click
        // panels.forEach(function()){
        //     // what to do
        //     console.log('It works')
        // }
        // remove active class from all another section section and
        // add it to the selected section
        // panels.forEach((panel) => {
        //     panel.classList.remove('active')
        // })
// using document object to select some class called 'panel' [which looks like and Array] so we can use the forEach loop which takes a function - like arrow function [ ()=>{} ] - rules if one argument do not have to put parentheses - using the nosy method - called EventLister (js) 
        removeActiveClass();
        panel.classList.add("active");

    })
})

function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}