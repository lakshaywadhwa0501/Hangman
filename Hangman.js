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


function randomcolorgenerate()
{
    wordgen=colors[Math.floor(Math.random() * colors.length)];
}



var answer=document.querySelector("#answer");
var Arr=[];
function start()
{
    for( var i=0; i<wordgen.length; i++)
    {
        Arr[i]="_";
    }

    str=Arr.join(" ");
    answer.innerText=str;
}

randomcolorgenerate();
start();



var count=6;
var check=document.querySelector("#check");
var input=document.querySelector("#word");
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
        }
    answer.innerText = Arr.join(" ");

    var status=document.querySelector("#status");
        if(match===0)
        {
            count=count-1;
            status.innerText="Chances Left: "+count;
            
        }
   

    if(count===0)
    {
        output.innerText = "Oops, You Lost! \n Right Answer is: "+wordgen+"\n Try Again."
        answer.innerText = wordgen;
    }


    var c=0;

        for(var x=0; x < wordgen.length;x++)
        {
            if(Arr[x]===wordgen[x])
            {
                c++;
            }
        }
  
    
    if(c===wordgen.length)
    {
        output.innerText = "Well Played, \nYou Won!"
    }
    
     input.value="";
}
});

