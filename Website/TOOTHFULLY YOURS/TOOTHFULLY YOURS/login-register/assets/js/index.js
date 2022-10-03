

function verification(){
  if (document.getElementById("p1").value == document.getElementById("p2").value) {
    document.getElementById("Message").style.color = "Green";
    document.getElementById("Message").style.fontSize = "10px";
    document.getElementById("Message").innerHTML = "Passwords match!"
    return true;
  } else {
    document.getElementById("Message").style.color = "Red";
    document.getElementById("Message").style.fontSize = "10px";
    document.getElementById("Message").innerHTML = "Passwords do NOT match!"
    return false;
  }
}

function validateForm()
{

    return false;
}

function validateUserName(){
   var username = document.getElementById("username").value;
   var userdb =  req.body.p_name().value;

   if(username == userdb){
    alert("Invalid Username")
    return false;
   }else{
    return true;
   }
}
