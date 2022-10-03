export const paintCards = () => {
    let elem = document.getElementsByTagName('li');
    for(let i = 0; i < elem.length; i++){
        if ( i % 2 === 0 ){
            elem[i].style.backgroundColor = 'red';
        }
    }
};

export const findElement = () => {
    let el = document.querySelector('li');
    
    
    while(el = el.nextElementSibling){
    
        if(el.matches('.likedItem')){
            el.style.backgroundColor = 'blue';
        }
    }
};
