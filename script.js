(function(){

    let screen= document.querySelector('.display');
    let buttons= document.querySelectorAll('.ripple');
    let clear= document.querySelector('.clear');
    let equal= document.querySelector('.equal');
    let del= document.querySelector('.delete');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value= e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value= "";
        }
        else{
            let answer= eval(screen.value);
            screen.value= answer;
        }
    });

    clear.addEventListener('click', function(e){
        screen.value= "";
    })

    del.addEventListener('click', function(e){
        screen.value= screen.value.slice(0, -1);
    })

})();