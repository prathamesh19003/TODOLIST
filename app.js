const input=document.querySelector("#inputbox");
const task=document.querySelector(".list");
 

const button=document.querySelector(".add");
button.addEventListener('click',add);
function add()
{
    if(input.value=="")
    {
        alert("Enter A Valid Input");
    }
    else{
      let newEle=document.createElement("ul");
      newEle.innerHTML=`${input.value}<i class="gg-trash"></i>`;
      task.appendChild(newEle);
      input.value="";
      newEle.querySelector("i").addEventListener("click",function()
      {
        newEle.remove();
      })
    }
}

