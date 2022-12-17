const base1 = document.querySelector('.base1');
const base2 = document.querySelector('.base2');
const pizzaTopp1 = document.querySelector('.pizzaTopp1');
const pizzaTopp2 = document.querySelector('.pizzaTopp2');
const pizzaTopp3 = document.querySelector('.pizzaTopp3');
const circle = document.querySelector('.pizzaBuilder');

let temp;
let tempTopping;


base1.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    temp = base1;
});
base2.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    temp = base2;
});


pizzaTopp1.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    tempTopping = pizzaTopp1;
});
pizzaTopp2.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    tempTopping = pizzaTopp2;
});
pizzaTopp3.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    tempTopping = pizzaTopp3;
});



circle.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('DragOver has been triggered');
});

if(temp == base1){
    base1.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });
}else{
    base2.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });
}


let baseSelector;
circle.addEventListener('drop', (e) => {
    console.log('Drop has been triggered');
    e.target.append(temp);
    baseSelector = temp;
    document.getElementsByClassName('pTopping')[0].style.visibility = 'visible';
    document.getElementsByClassName('pizzaBuilder')[0].style.border = 'none';
})

base1.addEventListener('drop', (e) => {
    console.log('Drop has been triggered');
    console.log(tempTopping);
    if(tempTopping == pizzaTopp1){
        console.log('topping 1');
        let toppingsPizza = document.getElementsByClassName('top1')
        for(let top of toppingsPizza){
            top.style.visibility = 'visible';
        } 
    }else if(tempTopping == pizzaTopp2){
        console.log('topping 2');
        let toppingsPizza = document.getElementsByClassName('top2')
        for(let top of toppingsPizza){
            top.style.visibility = 'visible';
        } 
    }else{
        console.log('topping 3');
        let toppingsPizza = document.getElementsByClassName('top3')
        for(let top of toppingsPizza){
            top.style.visibility = 'visible';
        } 
    } 
})
base2.addEventListener('drop', (e) => {
    console.log('Drop has been triggered');
    console.log(tempTopping);
    if(tempTopping == pizzaTopp1){
        console.log('topping 1');
        let toppingsPizza = document.getElementsByClassName('top1')
        for(let top of toppingsPizza){
            top.style.visibility = 'visible';
        } 
    }else if(tempTopping == pizzaTopp2){
        console.log('topping 2');
        let toppingsPizza = document.getElementsByClassName('top2')
        for(let top of toppingsPizza){
            top.style.visibility = 'visible';
        } 
    }else{
        console.log('topping 3');
        let toppingsPizza = document.getElementsByClassName('top3')
        for(let top of toppingsPizza){
            top.style.visibility = 'visible';
        } 
    } 
})