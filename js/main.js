// Changes color of Li's if users selected them...
$('ul').on("click", "li", function (){
    $(this).toggleClass("completed");
})


// Click on X to delete line
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove()
    });
    event.stopPropagation();
});

// 

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //if "enter" key press then grab the text in the input field
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span> x </span>" + todoText + "</li>")
    }
    
})

$(".fa").click(function(){
    $("input[type='text']").fadeToggle();
})