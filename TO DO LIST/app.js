var i=0;
function create(){


const text=document.getElementsByTagName("input")[0].value;
const main=document.getElementById("insert");
const sub=document.createElement("div");
sub.id="new"+i;
main.appendChild(sub);
var s="new"+i
const new1=document.getElementById(s);
const h2=document.createElement("h2");
h2.innerText=text;
new1.appendChild(h2);
const a1=document.createElement("a")
a1.id="b2"+i;
new1.appendChild(a1);
const i1=document.createElement("i");
i1.className="fa-solid fa-trash-can";
a1.appendChild(i1);
const a2=document.createElement("a");
a2.id="b3"+i;
new1.appendChild(a2);
const i2=document.createElement("i");
i2.className='fa fa-check';
a2.appendChild(i2);
document.getElementsByTagName("input")[0].value="";

i++;
note();

}
function remove1(name1)
{   if(name1!="b1")
    {
    const s=document.getElementById(name1);
    s.parentElement.remove();
    console.log("yes");
    }
}
function note()
{
    const a=document.getElementsByTagName('a');
    for (let name of a) {
        document.getElementById(name.id).addEventListener("click", function(){
            console.log(name.id);
            remove1(name.id);
        });
      }
}





const add=document.getElementById('b1');
add.addEventListener("click",create);



