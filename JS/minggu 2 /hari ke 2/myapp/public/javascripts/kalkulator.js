function tambah(){
    var bil1=parseFloat(document.ffrom.bil1.value);
    var bil2=parseFloat(document.ffrom.bil2.value);
    var jumlah=bil1+bil2;
    document.ffrom.jumlah.value=jumlah;
    }
    function kurang(){
    var bil1=parseFloat(document.ffrom.bil1.value);
    var bil2=parseFloat(document.ffrom.bil2.value);
    var jumlah=bil1-bil2;
    document.ffrom.jumlah.value=jumlah;
    }
    function bagi(){
    var bil1=parseFloat(document.ffrom.bil1.value);
    var bil2=parseFloat(document.ffrom.bil2.value);
    var jumlah=bil1/bil2;
    document.ffrom.jumlah.value=jumlah;
    }
    function kali(){
    var bil1=parseFloat(document.ffrom.bil1.value);
    var bil2=parseFloat(document.ffrom.bil2.value);
    var jumlah=bil1*bil2;
    document.ffrom.jumlah.value=jumlah;
    }
    