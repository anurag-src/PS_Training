function mt()
{
tableresult = document.querySelector("#tableresult");
num = document.getElementById("tableinput").value;
num = Number.parseInt(num);
    let str = "";
    for(let i = 1; i<=10; i++)
    {
        str += `${num}*${i} = ${num*i} <br>`;
    }
    tableresult.innerHTML = str;
}

function add()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} + ${num2} = ${num1+num2}`;
    calres.innerHTML = str;
}

function sub()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} - ${num2} = ${num1-num2}`;
    calres.innerHTML = str;
}

function mul()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} x ${num2} = ${num1*num2}`;
    calres.innerHTML = str;
}

function div()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} / ${num2} = ${num1/num2}`;
    calres.innerHTML = str;
}

function mod()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} mod ${num2} = ${num1%num2}`;
    calres.innerHTML = str;
}

function incr()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} ++ = ${num1+1} <br> ${num2} ++ = ${num2+1}`;
    calres.innerHTML = str;
}

function decr()
{
    calres = document.querySelector("#calres");
    num1 = document.getElementById("n1input").value;
    num2 = document.getElementById("n2input").value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let str = "";
    str += `${num1} -- = ${num1-1} <br> ${num2} -- = ${num2-1}`;
    calres.innerHTML = str;
}

function rev()
{
    result = document.querySelector("#result");
    num = document.getElementById("numinput").value;
    num = Number.parseInt(num);
    var ans = 0;

    while(num>0)
    {
        var dig = Number.parseInt(num%10);
        ans = ans*10 + dig;
        num = Number.parseInt(num/10);
    }
    result.innerHTML = ans;
}

function pal()
{
    result = document.querySelector("#result");
    num = document.getElementById("numinput").value;
    num = Number.parseInt(num);
    num1 = document.getElementById("numinput").value;
    num1 = Number.parseInt(num1);
    var ans = 0;

    while(num>0)
    {
        var dig = Number.parseInt(num%10);
        ans = ans*10 + dig;
        num = Number.parseInt(num/10);
    }
    var i = ans-num1;
    if(i == 0)
    result.innerHTML = "YES";

    if(i != 0)
    result.innerHTML = "NO";
}

function arm()
{
    result = document.querySelector("#result");
    num = document.getElementById("numinput").value;
    num = Number.parseInt(num);
    num1 = document.getElementById("numinput").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("numinput").value;
    num2 = Number.parseInt(num2);
    var ans = 0;
    var comp = 0;
    while(num>0)
    {
        ans = ans+1;
        num = Number.parseInt(num/10);
    }

    while(num1>0)
    {
        var dig = Number.parseInt(num1%10);
        comp = comp + dig**ans;
        num1 = Number.parseInt(num1/10);  
    }
    if(num2-comp == 0)
    result.innerHTML = "YES";

    if(num2-comp != 0)
    result.innerHTML = "NO";
}    
    
function isPrime(num)
{
    for(let i = 2; i<=Math.sqrt(num); i++)
    {
        if(num%i === 0)
        return false;
        }
    return true
}

function pfr()
{
    result = document.querySelector("#result");
    num = document.getElementById("numinput").value;
    num = Number.parseInt(num);
    let str = "The prime factors are : <br>";
    for(let i = 1; i<=num; i++)
    {
        if(isPrime(i))
        {
            if(num%i === 0)
            {
                str += `${i}<br>`;
            }
        }
    }
    result.innerHTML = str;
}

function tocel()
{
    temp = document.querySelector("#temp");
    num = document.getElementById("tempinput").value;
    num = Number.parseInt(num);
    num = (num - 32)*(5/9);
    temp.innerHTML = num;
}

function tofar()
{
    temp = document.querySelector("#temp");
    num = document.getElementById("tempinput").value;
    num = Number.parseInt(num);
    num = num*(9/5) + 32;
    temp.innerHTML = num;
}

    
