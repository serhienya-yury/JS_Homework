$(document).ready(function(){
    $("#showHideContent").click(function () {
        if ($("#content").is(":hidden")) {
            $("#content").show("slow");
        } else {
            $("#content").hide("slow");
        }
        return false;
    });
});

$(function(){
    $('.bars').on('click', function() {
        $('.menuToggle').slideToggle(300, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
});