const hideButton = document.getElementById("hideButton");
const password = document.getElementById("validationDefault03");
const submit = document.getElementById("submit");

password.addEventListener("keyup",(e)=>{
    if(e.target.value.length<6){
        submit.setAttribute("disabled",'false');
        submit.style.background="#000";
    }
    else{
        submit.removeAttribute("disabled"); 
        submit.style.background="#FFC107";
    }
});


hideButton.addEventListener("click",()=>{
    if(password.type == "password"){
    password.setAttribute('type','text');
    hideButton.innerHTML = '<i class="fas fa-eye"></i>';
}
    else{
        password.setAttribute('type','password');
        hideButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
});

