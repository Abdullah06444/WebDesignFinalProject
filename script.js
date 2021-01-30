var flag = 1;
var tbl = document.getElementById("table1").innerHTML;

function clear2() {

    tbl = "<tr><td>...............Adınız..................</td><td>............Soyadınız................</td><td>..........Siparişler..................</td></tr>";

    alert(document.getElementById('table1').innerText);
    document.getElementById("table1").innerHTML = tbl;
}

function database(){
    var name=document.getElementById("adiniz").value;
    var surname=document.getElementById("soyadiniz").value;
    var orders=document.getElementById("siparisler").value;
    var str;

    if(flag%3==1){
        str="<tr><td class=\"r1\">"+name+"</td><td class=\"r1\">"+surname+"</td><td class=\"r1\">"+orders+"</td></tr>";
    }
    else if(flag%3==2){
        str="<tr><td class=\"r2\">"+name+"</td><td class=\"r2\">"+surname+"</td><td class=\"r2\">"+orders+"</td></tr>";
    }
    else{
        str="<tr><td class=\"r3\">"+name+"</td><td class=\"r3\">"+surname+"</td><td class=\"r3\">"+orders+"</td></tr>";
    }

    alert(document.getElementById('table1').innerText);

    tbl += str;
    document.getElementById("table1").innerHTML = tbl;
    flag++;
}


function search(){

    alert("Arama kutusuna girildi");
}




// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
}
document.getElementById("myLink").click();

function insert(num) {
    document.form.text.value = document.form.text.value + num;
}
function equal() {
    var exp = document.form.text.value;
    if (exp){
        document.form.text.value=eval(exp);
    }
}
function clear() {
    document.form.text.value="";
}
function back() {
    var exp = document.form.text.value;
    document.form.text.value = exp.substring(0,exp.length-1);
}