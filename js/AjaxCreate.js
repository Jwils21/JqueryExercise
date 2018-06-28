"option strict"

$().ready(function() {
    $("body").css("background-color","Chartreuse")
    $("#pId").css("background-color","Brown")
    $("#pUserName").css("background-color","DarkMagenta")
    $("#pPassword").css("background-color","DarkOliveGreen")
    $("#pFirstName").css("background-color","DeepPink")
    $("#pLastName").css("background-color","Fuschia")
    $("#pEmail").css("background-color","LightSalmon")
    $("#pPhone").css("background-color","MediumVioletRed")
    $("#pReviewer").css("background-color","violet")
    $("#pAdmin").css("background-color","tomato")
    $("#pActive").css("background-color","tan")
});


function get() {
    var id = document.getElementById("sId").value;
    $.getJSON("http://localhost::580778/Users/Get/" + id)
        .doe(function(resp) {
            console.log(resp);
            load(resp);
        });
}

function load(jsonResponse) {
    var user = jsonResponse.data;
    document.getElementById("pId").value = user.id;
    document.getElementById("pUsername").value = user.UserName;
    document.getElementById("pPassword").value = user.Password;
    document.getElementById("pFirstName").value = user.FirstName;
    document.getElementById("pLastName").value = user.LastName;
    document.getElementById("pEmail").value = user.Email;
    document.getElementById("pPhone").value = user.Phone;
    document.getElementById("pReviewer").value = user.isReviewer;
    document.getElementById("pAdmin").value = user.isAdmin;
    document.getElementById("pActive").value = user.isActive;

}

function change() {
    var user = {
        Id: 0,
        UserName: document.getElementById("pUsername").value,
        Password: document.getElementById("pPassword").value,
        FirstName: document.getElementById("pFirstName").value,
        LastName: document.getElementById("pLastName").value,
        Phone: document.getElementById("pPhone").value,
        Email: document.getElementById("pEmail").value,
        Phone: document.getElementById("pPhone").value,
        isReviewer: document.getElementById("pReviewer").value,
        isAdmin: document.getElementById("pAdmin").value,
        isActive: document.getElementById("pActive").value,
    };

        $.post("http://localhost:#####/Users/Change", user)
            .done(function(resp) {
                console.log(resp);
                clearForm();
        });

}

function remove() {
    var user = {
        Id: 0,
        UserName: document.getElementById("pUsername").value,
        Password: document.getElementById("pPassword").value,
        FirstName: document.getElementById("pFirstName").value,
        LastName: document.getElementById("pLastName").value,
        Phone: document.getElementById("pPhone").value,
        Email: document.getElementById("pEmail").value,
        Phone: document.getElementById("pPhone").value,
        isReviewer: document.getElementById("pReviewer").value,
        isAdmin: document.getElementById("pAdmin").value,
        isActive: document.getElementById("pActive").value,
    };

        $.post("http://localhost:#####/Users/Remove", user)
            .done(function(resp) {
                console.log(resp);
                clearForm();
        });

}

function clearForm() {
    
}
