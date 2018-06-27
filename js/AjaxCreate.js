"option strict"

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
        UserName: Document.getElementById("pUsername").value,
        Password: Document.getElementById("pPassword").value,
        FirstName: Document.getElementById("pFirstName").value,
        LastName: Document.getElementById("pLastName").value,
        Phone: Document.getElementById("pPhone").value,
        Email: Document.getElementById("pEmail").value,
        Phone: Document.getElementById("pPhone").value,
        isReviewer: Document.getElementById("pReviewer").value,
        isAdmin: Document.getElementById("pAdmin").value,
        isActive: Document.getElementById("pActive").value,
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
        UserName: Document.getElementById("pUsername").value,
        Password: Document.getElementById("pPassword").value,
        FirstName: Document.getElementById("pFirstName").value,
        LastName: Document.getElementById("pLastName").value,
        Phone: Document.getElementById("pPhone").value,
        Email: Document.getElementById("pEmail").value,
        Phone: Document.getElementById("pPhone").value,
        isReviewer: Document.getElementById("pReviewer").value,
        isAdmin: Document.getElementById("pAdmin").value,
        isActive: Document.getElementById("pActive").value,
    };

        $.post("http://localhost:#####/Users/Remove", user)
            .done(function(resp) {
                console.log(resp);
                clearForm();
        });

}

function clearForm() {
    
}
