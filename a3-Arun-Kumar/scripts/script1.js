let h=document.getElementById("h1");
h.style.textAlign="center";
h.style.color="red";
h.style.backgroundColor="blue";
h.style.border="solid 5px orange";



var btn=document.getElementById("submit");

btn.onclick=function(){
    var name=document.getElementById("name").value
}


btn.onclick=function(){
    const password=document.getElementById("password").value
    if(password.value.length <=6){
        alert("password must be atleast six digits");
        value.focus();

    }
    if(password.value.length >=12){
        alert("password must be atleast six digits");
        value.focus();
    }

}


  
btn.onclick=function(){
    
var confirm=document.getElementById("confirm").value
if(confirm.value ===password.value){
    alert("password matched");
}
else{
    alert("password not matched");
    value.focus();
}

}
btn.onclick=function(){
    
var address=document.getElementById("address").value

}
btn.onclick=function(){
    
var city=document.getElementById("city").value
op=document.getElementById("op").value
city.value=("op");

}
    
btn.onclick=function(){
    
    var confirm=document.getElementById("confirm").value
    var course=document.getElementById("course").value
op=document.getElementById("cp").value
city.value=("cp");
    
    }
      
        
btn.onclick=function(){
    
    var course=document.getElementById("course").value
    
    }
      








