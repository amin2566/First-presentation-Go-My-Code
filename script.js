var deleteBtn = document.getElementsByClassName("delete")


for(let btn of deleteBtn){

    btn.addEventListener("click", function(){
        btn.parentElement.remove()
    } )
} 


var plusBtn = document.getElementsByClassName("plus")
var muchBtn = document.getElementsByClassName("much")

for(let btn of plusBtn){

    btn.addEventListener("click", function(){
        btn.nextElementSibling.firstElementChild.value++; 
        sum()   
    } )
} 


let moinsBtn = Array.from(document.getElementsByClassName("moins"));
for (let min of moinsBtn) {
  min.addEventListener("click", function () {
    if (min.previousElementSibling.firstElementChild.value > 0) {
      min.previousElementSibling.firstElementChild.value--;
      sum()
    }
  });
}
let hearts=document.getElementsByClassName('fa-heart')
for(let heart of hearts){
  heart.addEventListener('click', function(){

     if(heart.style.color==='red'){
       heart.style.color='black'
     }
     else{
      heart.style.color='red'
    }
  })
}
function sum() {
    let much = Array.from(document.querySelectorAll(".much"));
    let all = Array.from(document.querySelectorAll(".all"));
    let s = 0;
    for (let i = 0; i < much.length; i++) {
      s += much[i].value * all[i].value;
    }
    return (document.getElementById("sum").value =
       s);
  }


  let much = Array.from(document.querySelectorAll(".much"));
  console.log(much)
  let all = Array.from(document.querySelectorAll(".all"));
  console.log(all)