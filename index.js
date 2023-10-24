
// -----Quantite Changes-------//
let q1=3;
let t1;
let t;
function totalp() {
    t1=q1+q2;
    document.getElementById("7").innerText = t1;
}
function total(){
    t=q1*19+q2*20;
    document.getElementById("8").innerText = t +".00 $";
}
document.getElementById("1").addEventListener("click", ()=>{
     q1++;
    document.getElementById("2").innerText = q1;
    totalp();
    total();
}
)
document.getElementById("3").addEventListener("click", ()=>{
    if(q1>1){
    q1--;
   document.getElementById("2").innerText = q1;
   totalp();
   total();
    }
}
)
let q2=1
document.getElementById("4").addEventListener("click", ()=>{
    q2++;
   document.getElementById("5").innerText = q2;
   totalp();
   total();
}
)
document.getElementById("6").addEventListener("click", ()=>{
    if(q2>1){
   q2--;
  document.getElementById("5").innerText = q2;
  totalp();
  total();
    }
}
)
// -------Remove-------//

document.getElementById("11").addEventListener("click", ()=>{
    document.getElementById("10").style.display = "none";
    document.getElementById("111").style.display = "none";
    q1=0;
    totalp();
    total();
}
)
document.getElementById("22").addEventListener("click", ()=>{
    document.getElementById("20").style.display = "none";
    document.getElementById("222").style.display = "none";
    q2=0;
    totalp();
    total();
}
)

