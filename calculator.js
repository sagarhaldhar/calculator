const display=document.getElementById("display");
const button=document.getElementsByClassName("btn");

function clearDisplay()
{
    display.innerHTML='0';
}

function append(value)
{
    if(display.innerHTML==='0')
    {
        display.innerHTML='';
    }
    display.innerHTML+=value;
}

function solve()
{
    try{
        display.innerHTML=eval(display.innerHTML);
    }
    catch(e){
        display.innerHTML="Invalid Expression";
    }
    
}