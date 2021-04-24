
var colors=[
    "red",
    "green",
    "black",
    "blue",
    "yellow",
    "orange",
    "white",
    "pink",
    "purple",
    "golden",
    "silver",
    "gray",
    "violet",
    "indigo",
    "brown"
]
var Arr=[];
var input=document.querySelector("#word");

function randomcolorgenerate()
{
    wordgen=colors[Math.floor(Math.random() * colors.length)];
}

function start()
{
    for( var i=0; i<wordgen.length; i++)
    {
        Arr[i]="_";
    }

    str=Arr.join(" ");
    document.getElementById("answer").innerHTML=str;
}

randomcolorgenerate();
start();

var count=6;
var check=document.querySelector("#check");


check.addEventListener("click",function check()
{ 
    if(count>0)
    {
    var word=input.value;
 
    var match=0;
    for(var i=0; i< wordgen.length; i++)
        {
            if(wordgen[i] === word)
            {
                Arr[i] = word;
                match=1;
            }
            else
            {
                match=0;
            }
        }
    answer.innerText = Arr.join(" ");

        if(match===0)
        {
            count=count-1;
            document.getElementById("status").innerHTML="Chances Left: "+count;
            
        }
   

    if(count===0)
    {
        output.innerText = "Oops, You Lost! \n Right answer is: "+wordgen+"\n Try Again."
        answer.innerText = wordgen;
    }
    
    
     input.value="";
}
});

