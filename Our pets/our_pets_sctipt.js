setInterval(() => {
    let slider_items = document.querySelectorAll('.slider_item');
    if(window.innerWidth <= 770){
        for(let i = 7; i < slider_items.length; i++){
            slider_items[i].style.display = 'none'
        }
    }
    else if(window.innerWidth <= 320){
        for(let i = 5; i < slider_items.length; i++){
            slider_items[i].style.display = 'none'
        }
    }
    else if(window.innerWidth >= 770){
        for(let i = 0; i < slider_items.length; i++){
            slider_items[i].style.display = 'block'
        }
    }
    else if(window.innerWidth >= 320){
        for(let i = 7; i < slider_items.length; i++){
            slider_items[i].style.display = 'block'
        }
    }
}, 200)