var emailid = document.getElementById("emailtextfield");

var password = document.getElementById("passwordtextfield");

var isValid = true;



function validemail(){

    if (emailid=="admin" && password =="pass123"){

        isValid=true;
        alert("Log-in Sucessfull");
        
}

else {
    isValid=false;
    alert("Restricted Access");
}
}

const Signin = document.getElementById("signInButton");
Signin.addEventListener("click", validemail());