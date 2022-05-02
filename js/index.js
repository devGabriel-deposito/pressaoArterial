$(document).ready(function () {
    //PRIMEIRO DIA
    $('#primeiroDiaPrimeiraMedidaUp').val(15);
    $('#primeiroDiaSegundaMedidaUp').val(11);
    $('#primeiroDiaTerceiraMedidaUp').val(12);
    $('#primeiroDiaQuartaMedidaUp').val(10);
    $('#primeiroDiaQuintaMedidaUp').val(10);
    $('#primeiroDiaSextaMedidaUp').val(10);

    $('#primeiroDiaPrimeiraMedidaDown').val(8);
    $('#primeiroDiaSegundaMedidaDown').val(9);
    $('#primeiroDiaTerceiraMedidaDown').val(7);
    $('#primeiroDiaQuartaMedidaDown').val(6);
    $('#primeiroDiaQuintaMedidaDown').val(8);
    $('#primeiroDiaSextaMedidaDown').val(6);

    //SEGUNDO DIA
    $('#segundoDiaPrimeiraMedidaUp').val(9);
    $('#segundoDiaSegundaMedidaUp').val(11);
    $('#segundoDiaTerceiraMedidaUp').val(11);
    $('#segundoDiaQuartaMedidaUp').val(10);
    $('#segundoDiaQuintaMedidaUp').val(12);
    $('#segundoDiaSextaMedidaUp').val(12);

    $('#segundoDiaPrimeiraMedidaDown').val(6);
    $('#segundoDiaSegundaMedidaDown').val(7);
    $('#segundoDiaTerceiraMedidaDown').val(6);
    $('#segundoDiaQuartaMedidaDown').val(7);
    $('#segundoDiaQuintaMedidaDown').val(7);
    $('#segundoDiaSextaMedidaDown').val(8);

    //TERCEIRO DIA
    $('#terceiroDiaPrimeiraMedidaUp').val(15);
    $('#terceiroDiaSegundaMedidaUp').val(11);
    $('#terceiroDiaTerceiraMedidaUp').val(12);
    $('#terceiroDiaQuartaMedidaUp').val(10);
    $('#terceiroDiaQuintaMedidaUp').val(10);
    $('#terceiroDiaSextaMedidaUp').val(10);

    $('#terceiroDiaPrimeiraMedidaDown').val(8);
    $('#terceiroDiaSegundaMedidaDown').val(9);
    $('#terceiroDiaTerceiraMedidaDown').val(7);
    $('#terceiroDiaQuartaMedidaDown').val(6);
    $('#terceiroDiaQuintaMedidaDown').val(8);
    $('#terceiroDiaSextaMedidaDown').val(6);

    //QUARTO DIA
    $('#quartoDiaPrimeiraMedidaUp').val(9);
    $('#quartoDiaSegundaMedidaUp').val(11);
    $('#quartoDiaTerceiraMedidaUp').val(11);
    $('#quartoDiaQuartaMedidaUp').val(10);
    $('#quartoDiaQuintaMedidaUp').val(12);
    $('#quartoDiaSextaMedidaUp').val(11);

    $('#quartoDiaPrimeiraMedidaDown').val(6);
    $('#quartoDiaSegundaMedidaDown').val(7);
    $('#quartoDiaTerceiraMedidaDown').val(6);
    $('#quartoDiaQuartaMedidaDown').val(7);
    $('#quartoDiaQuintaMedidaDown').val(7);
    $('#quartoDiaSextaMedidaDown').val(8);

    //QUINTO DIA
    $('#quintoDiaPrimeiraMedidaUp').val(15);
    $('#quintoDiaSegundaMedidaUp').val(11);
    $('#quintoDiaTerceiraMedidaUp').val(12);
    $('#quintoDiaQuartaMedidaUp').val(10);
    $('#quintoDiaQuintaMedidaUp').val(10);
    $('#quintoDiaSextaMedidaUp').val(10);

    $('#quintoDiaPrimeiraMedidaDown').val(8);
    $('#quintoDiaSegundaMedidaDown').val(9);
    $('#quintoDiaTerceiraMedidaDown').val(7);
    $('#quintoDiaQuartaMedidaDown').val(6);
    $('#quintoDiaQuintaMedidaDown').val(8);
    $('#quintoDiaSextaMedidaDown').val(6);

    //SEXTO DIA
    $('#sextoDiaPrimeiraMedidaUp').val(9);
    $('#sextoDiaSegundaMedidaUp').val(11);
    $('#sextoDiaTerceiraMedidaUp').val(11);
    $('#sextoDiaQuartaMedidaUp').val(10);
    $('#sextoDiaQuintaMedidaUp').val(12);
    $('#sextoDiaSextaMedidaUp').val(11);

    $('#sextoDiaPrimeiraMedidaDown').val(6);
    $('#sextoDiaSegundaMedidaDown').val(7);
    $('#sextoDiaTerceiraMedidaDown').val(6);
    $('#sextoDiaQuartaMedidaDown').val(7);
    $('#sextoDiaQuintaMedidaDown').val(7);
    $('#sextoDiaSextaMedidaDown').val(8);

    //SETIMO DIA
    $('#setimoDiaPrimeiraMedidaUp').val(15);
    $('#setimoDiaSegundaMedidaUp').val(11);
    $('#setimoDiaTerceiraMedidaUp').val(12);
    $('#setimoDiaQuartaMedidaUp').val(10);
    $('#setimoDiaQuintaMedidaUp').val(10);
    $('#setimoDiaSextaMedidaUp').val(10);

    $('#setimoDiaPrimeiraMedidaDown').val(8);
    $('#setimoDiaSegundaMedidaDown').val(9);
    $('#setimoDiaTerceiraMedidaDown').val(7);
    $('#setimoDiaQuartaMedidaDown').val(6);
    $('#setimoDiaQuintaMedidaDown').val(8);
    $('#setimoDiaSextaMedidaDown').val(6);
});

function primeiroDia() {
    var primeriraMedidaUp = parseFloat($('#primeiroDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#primeiroDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#primeiroDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#primeiroDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#primeiroDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#primeiroDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#primeiroDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#primeiroDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#primeiroDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#primeiroDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#primeiroDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#primeiroDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown) / 6);

    $('#primeiroDiaMediaUp').val(mediaUp);
    $('#primeiroDiaMediaDown').val(mediaDown);
}

function segundoDia() {
    var primeriraMedidaUp = parseFloat($('#segundoDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#segundoDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#segundoDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#segundoDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#segundoDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#segundoDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#segundoDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#segundoDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#segundoDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#segundoDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#segundoDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#segundoDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown) / 6);

    $('#segundoDiaMediaUp').val(mediaUp);
    $('#segundoDiaMediaDown').val(mediaDown);
}

function terceiroDia() {
    var primeriraMedidaUp = parseFloat($('#terceiroDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#terceiroDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#terceiroDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#terceiroDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#terceiroDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#terceiroDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#terceiroDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#terceiroDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#terceiroDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#terceiroDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#terceiroDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#terceiroDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown) / 6);

    $('#terceiroDiaMediaUp').val(mediaUp);
    $('#terceiroDiaMediaDown').val(mediaDown);
}

function quartoDia() {
    var primeriraMedidaUp = parseFloat($('#quartoDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#quartoDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#quartoDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#quartoDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#quartoDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#quartoDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#quartoDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#quartoDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#quartoDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#quartoDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#quartoDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#quartoDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown) / 6);

    $('#quartoDiaMediaUp').val(mediaUp);
    $('#quartoDiaMediaDown').val(mediaDown);
}

function quintoDia() {
    var primeriraMedidaUp = parseFloat($('#quintoDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#quintoDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#quintoDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#quintoDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#quintoDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#quintoDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#quintoDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#quintoDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#quintoDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#quintoDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#quintoDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#quintoDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown) / 6);

    $('#quintoDiaMediaUp').val(mediaUp);
    $('#quintoDiaMediaDown').val(mediaDown);
}

function sextoDia() {
    var primeriraMedidaUp = parseFloat($('#sextoDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#sextoDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#sextoDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#sextoDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#sextoDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#sextoDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#sextoDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#sextoDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#sextoDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#sextoDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#sextoDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#sextoDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown) / 6);

    $('#sextoDiaMediaUp').val(mediaUp);
    $('#sextoDiaMediaDown').val(mediaDown);
}

function setimoDia() {
    var primeriraMedidaUp = parseFloat($('#setimoDiaPrimeiraMedidaUp').val());
    var primeriraMedidaDown = parseFloat($('#setimoDiaPrimeiraMedidaDown').val());

    var segundaMedidaUp = parseFloat($('#setimoDiaSegundaMedidaUp').val());
    var segundaMedidaDown = parseFloat($('#setimoDiaSegundaMedidaDown').val());

    var terceiraMedidaUp = parseFloat($('#setimoDiaTerceiraMedidaUp').val());
    var terceiraMedidaDown = parseFloat($('#setimoDiaTerceiraMedidaDown').val());

    var quartaMedidaUp = parseFloat($('#setimoDiaQuartaMedidaUp').val());
    var quartaMedidaDown = parseFloat($('#setimoDiaQuartaMedidaDown').val());

    var quintaMedidaUp = parseFloat($('#setimoDiaQuintaMedidaUp').val());
    var quintaMedidaDown = parseFloat($('#setimoDiaQuintaMedidaDown').val());

    var sextaMedidaUp = parseFloat($('#setimoDiaSextaMedidaUp').val());
    var sextaMedidaDown = parseFloat($('#setimoDiaSextaMedidaDown').val());

    var mediaUp = parseInt((primeriraMedidaUp + segundaMedidaUp + terceiraMedidaUp + quartaMedidaUp + quintaMedidaUp + sextaMedidaUp) / 6);
    var mediaDown = parseInt((primeriraMedidaDown + segundaMedidaDown + terceiraMedidaDown + quartaMedidaDown + quintaMedidaDown + sextaMedidaDown + sextaMedidaDown) / 6);

    $('#setimoDiaMediaUp').val(mediaUp);
    $('#setimoDiaMediaDown').val(mediaDown);
}

function mediaGeral() {

    primeiroDia();
    segundoDia();
    terceiroDia();
    quartoDia();
    quintoDia();
    sextoDia();
    setimoDia();

    var mediaPrimeiroDiaUp = parseFloat($('#primeiroDiaMediaUp').val());
    var mediaPrimeiroDiaDown = parseFloat($('#primeiroDiaMediaDown').val());

    var mediaSegundoDiaUp = parseFloat($('#segundoDiaMediaUp').val());
    var mediaSegundoDiaDown = parseFloat($('#segundoDiaMediaDown').val());

    var mediaTerceiroDiaUp = parseFloat($('#terceiroDiaMediaUp').val());
    var mediaTerceiroDiaDown = parseFloat($('#terceiroDiaMediaDown').val());

    var mediaQuartoDiaUp = parseFloat($('#quartoDiaMediaUp').val());
    var mediaQuartoDiaDown = parseFloat($('#quartoDiaMediaDown').val());

    var mediaQuintoDiaUp = parseFloat($('#quintoDiaMediaUp').val());
    var mediaQuintoDiaDown = parseFloat($('#quintoDiaMediaDown').val());

    var mediaSextoDiaUp = parseFloat($('#sextoDiaMediaUp').val());
    var mediaSextoDiaDown = parseFloat($('#sextoDiaMediaDown').val());

    var mediaSetimoDiaUp = parseFloat($('#setimoDiaMediaUp').val());
    var mediaSetimoDiaDown = parseFloat($('#setimoDiaMediaDown').val());

    var mediaUp = parseInt((mediaPrimeiroDiaUp + mediaSegundoDiaUp + mediaTerceiroDiaUp + mediaQuartoDiaUp + mediaQuintoDiaUp + mediaSextoDiaUp + mediaSetimoDiaUp) / 7);
    var mediaDown = parseInt((mediaPrimeiroDiaDown + mediaSegundoDiaDown + mediaTerceiroDiaDown + mediaQuartoDiaDown + mediaQuintoDiaDown + mediaSextoDiaDown + mediaSetimoDiaDown) / 7);

    $('#mediaGeralUp').val(mediaUp);
    $('#mediaGeralDown').val(mediaDown);
}