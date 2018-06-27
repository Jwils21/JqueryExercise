function loaded() {
    $.getJSON("http://192.168.50.253:58868/Customers/List")
        .done(function(resp){
            console.log(resp);
        });

}

function get() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://192.168.50.253:58868/Customers/Get/"+id)
        .done(function(resp){
            console.log(resp);
            display(resp);
        });
}

function display(customer) {
    document.getElementById("pId").textContent = customer.id;
    document.getElementById("pName").textContent = customer.name;

}
// function display(customer) {
//     var tbody =document.getElementById("tbody");
//     tbody.innerHTML="";
//     for (var customer of customers) {
//         var row = ""
//         row += "<tr>"
//         row += "<td>" + customer.Id + "</td>"
//         row += "<td>" + customer.Name + "</td>"
//         row += "<td>" + customer.City + "</td>"
//         row += "<td>" + customer.State + "</td>"
//         row += "<td>" + customer.Preferred + "</td>"
//         row += "</tr>"
//         tbody.innerHTML += row
//     }
// }