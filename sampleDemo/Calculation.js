
function add()
{
    var firstname = document.getElementById("txt1").value;
    document.getElementById("f").innerHTML = firstname;
    var secondname = document.getElementById("txt2").value;
    document.getElementById("s").innerHTML = secondname;
	
    var addition = +firstname * +secondname;
    document.getElementById("result").innerHTML = addition;

}