// Changes color of Li's if users selected them...
$('li').click(function (){
    $(this).toggleClass("completed");
})


// Click on X to delete line
$("span").click( function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove()
    });
    event.stopPropagation();
})