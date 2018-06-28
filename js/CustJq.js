function loaded() {
    $.getJSON("http://localhost:56649/Orders/List")
        .done(function(resp){
            console.log(resp);
        });

}

function get() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://localhost:56649/Orders/Get/"+id)
        .done(function(resp){
            console.log(resp);
            display(resp);
        });
}

function display(customer) {
    document.getElementById("pId").textContent = customer.id;
    document.getElementById("pName").textContent = customer.name;

}