const istatus = document.querySelector("h5");
const btn = document.querySelector("#add");
var requestCheck = 0

btn.addEventListener("click", function(){
    if(requestCheck == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Unfriend"
        requestCheck = 1  
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        requestCheck = 0  
    }
})
