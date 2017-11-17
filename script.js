$(function () {
    $('#senha').bind('keyup', function () {

        var txt = $(this).val();
        var forca = 0;

        // letras
        // numeros
        // caracteres especiais
        // numero minimo

        if (txt.length >= 7) {
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        var reg = new RegExp(/[0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        var reg = new RegExp(/[^a-z0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        if (forca >= 75) {
            var aceita = 'Aceita';
        } else {
            var aceita = 'Não Aceita';
        }

        $('#forca').html('Força: ' + forca + '(' + txt +') - '+aceita);

    });
});