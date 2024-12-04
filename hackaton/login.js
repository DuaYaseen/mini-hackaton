
var usersData = []

var loginBtn = document.getElementById("loginButton");
loginBtn.addEventListener("click",function(){

    var rEmail = document.getElementById("email")
    var rPassword = document.getElementById("password")
 


    var userObj = {
        email:rEmail.value,
        password:rPassword.value,
    }


    usersData.push(userObj)
   
   

    rEmail.value = ""
    rPassword.value = ""
    localStorage.setItem("users",JSON.stringify(usersData))
   
   
   
})