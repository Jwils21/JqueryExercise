"option strict"

$().ready(function() {
    $("#inpbox")
        .val("This is default text in the input box")
        .css("color","red")
        .css("font-weight", "bold")


    $("button").click(function() {
        var txt = $("#inpbox").val();
        $("label").text(txt);
    });

});

