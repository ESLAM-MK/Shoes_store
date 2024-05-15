let username =document.getElementById("user");
let password = document.getElementById("password");
let sub = document.getElementById("sub");
let action = document.getElementById("action");
let aler =document.getElementById("alert");
sub.onclick= function(){
    if(username.value=="Eslam"&&password.value=="123456"){
        action.setAttribute("action","index.html")
    }
    else{
      let s= aler.innerHTML="Invalid Email or password" ;
       window.localStorage.setItem("s",s)
      
       
    }
    window.localStorage.getItem("s");
};


