let total='';
let input='';
let sign='';
let display = document.getElementById("screen").innerHTML=0;

function userInput(num){
    
    if(sign==''){
        total=total+num;
        display = document.getElementById("screen").innerHTML=total;
    }
    else{
        input=input+num;
        document.getElementById("screen").innerHTML=input;
    } 
}

function operators(operation){
    total=parseFloat(total);
    //display = document.getElementById("screen").innerHTML=total;
    if(sign!=='' &&input!==''){
        evaluation(sign)
    }
    sign=operation;
    console.log(sign) 
}

function evaluation(sign){
    input=parseFloat(input);
    
    if(sign==='+'){
        total=total+input; 
        console.log(total)
        
    }
    else if(sign==='-'){
        total=total-input;  
        console.log(total);
    }

    else if(sign==='*'){
        total=total*input;
        console.log(total);

    }

    else if(sign==='/'){
        if(input===0){
            alert("Error Cannot divide by zero.")
            input='';
            display = document.getElementById("screen").innerHTML=input;
            console.log(total);
            
        }
        else{
            total=total/input;
            console.log(total);
          
        } 
    }
    display = document.getElementById("screen").innerHTML=total;
    input='';//resets the input 
    sign='';  
}

function equalsButton(){
    evaluation(sign)
    display = document.getElementById("screen").innerHTML=total;
}

function clearScreen(){
    total='';
    input='';
    sign='';
    display = document.getElementById("screen").innerHTML=0;
}

function changeValue(){
    if(input===''){
        total= -Math.abs(total)
        display = document.getElementById("screen").innerHTML=total;
    }
    else{
        input=parseFloat(input);
        input=-Math.abs(input);
        display = document.getElementById("screen").innerHTML=input;
        input=input.toString();

    }
}

function percentage(){
    if(input===''){
        total= total*.01;
        display = document.getElementById("screen").innerHTML=total;
    }
    else{
        input=parseFloat(input);
        input= input*.01;
        display = document.getElementById("screen").innerHTML=input;
        input=input.toString();

    }

}

function decimal(){
    if(typeof total=='string'){
        if(total.includes('.')){
            return;
        }
        else{
            total=total+'.';
            display = document.getElementById("screen").innerHTML=total;
        }

    }
    else{
        input=input.toString()
        if(input.includes('.')){
            return;
        }
        else{
            input=input+'.';
            display = document.getElementById("screen").innerHTML=input;
        }
    }
    
}








