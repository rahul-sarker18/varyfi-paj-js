function getPin(){
    const pin = genaratPin();
    const pinString =pin + '';
    
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function genaratPin(){
    const round = Math.round(Math.random()*10000)
    return round;
}

document.getElementById('genarate-pin').addEventListener('click', function(){
    const pin =getPin();

    const displyPin = document.getElementById('disply-pin');
    const displyPinString =displyPin.value;
    displyPin.value =pin;
})

document.getElementById('calclutar').addEventListener('click', function(evan){
    const number = evan.target.innerText;
    const typedNumber =document.getElementById('typed-number');
    const privastype =typedNumber.value;
    if(isNaN(number)){  
// problem solved      
        if(number === 'c'){
            typedNumber.value = '';  
        }
        else if(number === '<'){
            const digits = privastype.split('');
            digits.pop();
            const remainDegits =digits.join('');
            typedNumber.value =remainDegits;
        }
    }   

    else{       
         const newtyped =privastype + number;
         typedNumber.value =newtyped;
    }
})

document.getElementById('varyfi-pin').addEventListener('click', function(){
    const displyPin =document.getElementById('disply-pin');
    const intelejantDisply =displyPin.value;

    const typedPine =document.getElementById('typed-number');
    const typedPineDisplay =typedPine.value;

    const pinSucces =document.getElementById('pin-sucess');
    const pinUnSucces = document.getElementById('pin-unSucces')
    if(intelejantDisply === typedPineDisplay){ 
        pinSucces.style.display ='block';
        pinUnSucces.style.display ='none';
    }
    else{
        pinUnSucces.style.display ='block';
        pinSucces.style.display ='none';
    }
})



