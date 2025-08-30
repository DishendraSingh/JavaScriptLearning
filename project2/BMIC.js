const form=document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault(); 

    const weight=parseFloat(document.querySelector('#weight').value);
    const height=parseFloat(document.querySelector('#height').value)/100; 
    const resultDiv=document.querySelector('#result');
    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
        resultDiv.textContent='Please enter valid weight and height values.';
        return;
        
    }
    const bmi=(weight/(height*height)).toFixed(2);
    let category='';    
    if(bmi<18.5){
        category='Underweight'; 
    }else if(bmi<24.9){
        category='Normal weight'        
    }   
    else if(bmi<29.9){  
         category='Overweight'}        
     else{
            category='Obesity'        
        };


    resultDiv.innerHTML=`Your BMI is ${bmi} (${category})`;
});