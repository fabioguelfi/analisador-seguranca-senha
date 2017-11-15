$(function(){
    $('#senha').bind('keyup',function () {

       var txt = $(this).val();
       var forca = 0;

        // letras
        // numeros
        // caracteres especiais
        // numero minimo

        if(txt.length > 6){
            forca += 25;
        }
        $('#forca').html(forca)

    });
});