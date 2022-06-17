function checkCreds() {
    var Login = document.getElementById("Login").value;
    var badgeNum = document.getElementById("badgeNum").value;
    
    if (Login.length >20 || Login.length <1) {
    
          document.getElementById("loginStatus").innerHTML = "User Name  has invalid number of characters!";
    } 
    else if (badgeNum > 999|| badgeNum <100) {
        document.getElementById("loginStatus").innerHTML = "Badge Number invalid!";
    }
    else {
        alert("Access Granted, Welcome " + Login + "!");
        location.replace("bubblesblastoff.html");
    }
}
//Inputs for User first and last name
//Check if the string is great than >20 characters and give a warning – but do not continue the program if invalid
//Inputs for User badge number
//Check if badge number is valid and 3 digits– but do not continue the program if invalid
//Have at least 1 creative element – images, fonts, background color, etc. 
//eventName = Login
//theme= badge #