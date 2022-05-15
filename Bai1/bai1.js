function laSoNguyenDuong(n){
    return (Number.isInteger(n) && n > 0);
}
function KTSNT(n){
    var a = 1;
    if (n < 2) return a = 0; 
    var i = 2;
    while(i <n){
        if( n % i == 0) {
            a = 0;
            break;
        }
        i++;
    }
    return a;
}

var fs = require("fs");

function InDanhSach(){
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file){
            fs.appendFile('a.txt', file + "\n",  function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            console.log(file);
        });
    });
}

function InNDDS(){
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            fs.readFile(file, function (err, data) {
                if (err) {
                return console.error(err);
                }
                fs.appendFile('b.txt',"File " + file + " :\n" + data + "\n",  function(err) {
                    if (err) {
                        return console.error(err);
                    }
                });
            });
        });
    });
}

var n = -101;
var KiemTra = KTSNT(n);
 var s = laSoNguyenDuong(n);
 if(s== true){
    if( KiemTra == 1) {
        console.log(n + " là số nguyên tố!");
        InDanhSach();
    }
    else {
        console.log(n + " không phải là số nguyên tố!");
        InNDDS();
    }
}
else console.log(n+" k phai la so nguyen duong nen k phai so nguyen to");