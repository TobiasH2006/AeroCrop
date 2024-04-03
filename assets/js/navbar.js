/* Navbar scroll effect */
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 350){ /* if user scrolls past 350px color changes from transparent to #29323c */ 
        header.style.backgroundColor = "#29323c"
    }else{
            header.style.backgroundColor = "transparent"
    }
})
