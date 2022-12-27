
function sum(){
    var x1 = document.getElementById('n1').value;
    var x2 = document.getElementById('n2').value;
    var x3 = document.getElementById('n3').value;
    var x4 = document.getElementById('n4').value;
    var x5 = document.getElementById('n5').value;
    var x6 = document.getElementById('n6').value;
    var x7 = document.getElementById('n7').value;
    var x8 = document.getElementById('n8').value;
    var x9 = document.getElementById('n9').value;
    var x10 = document.getElementById('n10').value;
    var x11 = document.getElementById('n11').value;
    var x12 = document.getElementById('n12').value;
    var x13 = document.getElementById('n13').value;
    var x14 = document.getElementById('n14').value;
    
    var result1 = parseInt(x1) + parseInt(x2) + parseInt(x3) + parseInt(x4) + parseInt(x5) + parseInt(x6) + parseInt(x7);
    if (!isNaN(result1)) {
        document.getElementById('tot1').value = result1;
    }
    var result2 = parseInt(x8) + parseInt(x9) + parseInt(x10) + parseInt(x11) + parseInt(x12) + parseInt(x13) + parseInt(x14);
    if (!isNaN(result2)) {
        document.getElementById('tot2').value = result2;
    }
}

function sum1(){
    var r1 = parseInt(x1) + parseInt(x8);
    if (!isNaN(r1)) {
        document.getElementById('a1').value = r1;
        //console.log(r1);
    }
    var r2 = parseInt(x2) + parseInt(x9);
    if (!isNaN(r2)) {
        document.getElementById('a2').value = r2;
    }
    var r3 = parseInt(x3) + parseInt(x10);
    if (!isNaN(r3)) {
        document.getElementById('a3').value = r3;
    }
    var r4 = parseInt(x4) + parseInt(x11);
    if (!isNaN(r4)) {
        document.getElementById('a4').value = r4;
    }
    var r5 = parseInt(x5) + parseInt(x12);
    if (!isNaN(r5)) {
        document.getElementById('a5').value = r5;
    }
    var r6 = parseInt(x6) + parseInt(x13);
    if (!isNaN(r6)) {
        document.getElementById('a6').value = r6;
    }
    var r7 = parseInt(x7) + parseInt(x14);
    if (!isNaN(r7)) {
        document.getElementById('a7').value = r7;
    }
    var r8 = parseInt(result1) + parseInt(result2);
    if (!isNaN(r8)) {
        document.getElementById('a8').value = r8;
    }
}