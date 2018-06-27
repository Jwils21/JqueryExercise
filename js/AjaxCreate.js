function create() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://192.168.50.253:58868/Customers/Get/"+id)
        .done(function(resp){
            console.log(resp);
            display(resp);
        });
}
