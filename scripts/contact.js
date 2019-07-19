function AddPattern() {
    var a = document.getElementById("firstname").value;
    var b = document.getElementById("lastname").value;
    var c = document.getElementById("phone").value;
    var d = document.getElementById("clientemail").value;
    var e = document.getElementById("message").value;
    
//    var clientdata = new Form(a, b, c, d, e);
    
    var fullname = [a, b]
    var clientdata = new Form(fullname, c, d, e);

    //create new object. 
    function Form(fullname, phone, email, message) {
//        this.firstname = firstname;
//        this.lastname = lastname;
        this.fullname = fullname;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }

//    document.getElementById("printMe11").innerHTML = clientdata.firstname;
//    document.getElementById("printMe12").innerHTML = clientdata.lastname;

    document.getElementById("printMe11").innerHTML = clientdata.fullname[0];
    document.getElementById("printMe12").innerHTML = clientdata.fullname[1];
    document.getElementById("printMe13").innerHTML = clientdata.phone;
    document.getElementById("printMe14").innerHTML = clientdata.email;
    document.getElementById("printMe15").innerHTML = clientdata.message;

    //convert clientdata to text
    var patternJSON = JSON.stringify(clientdata);
    document.getElementById("printMe16").innerHTML = patternJSON;

    //save clientdata to localStorage
    localStorage.setItem("patternText", patternJSON);

    //retrieve client from localStorage
    var text = localStorage.getItem("patternText");
    var clientdatasaved = JSON.parse(text);

    document.getElementById("printMe17").innerHTML = clientdatasaved.fullname[0];
    document.getElementById("printMe18").innerHTML = clientdatasaved.fullname[1];
    document.getElementById("printMe19").innerHTML = clientdatasaved.phone;
    document.getElementById("printMe20").innerHTML = clientdatasaved.email;
    document.getElementById("printMe21").innerHTML = clientdatasaved.message;
}
