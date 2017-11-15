$(function(){
    $('#senha').bind('keyup',function () {

       var txt = $(this).val();
        $('#forca').html(txt);

    });
});