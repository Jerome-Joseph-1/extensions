var show = document.getElementById('cpy');
var gpass = '';

function shuffle(list){
    for(var i = 0; i < list.length; i++){
        var ind = Math.floor(Math.random() * list.length);
        var ind2 = Math.floor(Math.random() * list.length);

        var temp = list[ind];
        list[ind] = list[ind2];
        list[ind2] = temp;
    }
}

function tog(){
    var one = document.getElementById('click');
    var two = document.getElementById('gen');
    var form = document.getElementById('form1');
    if(form.style.display == 'none'){
        console.log('Shown');
        one.style.display = 'none';
        two.style.display = 'none';
        form.style.display = 'flex';
    }
    else{
        console.log('hidden');
        one.style.display = 'block';
        two.style.display = 'block';
        form.style.display = 'none';
    }
}

function add_to_file(){
    const fs = require("fs");
    fs.open("pass.txt", "a" ,(err, file)=>{
        if(err) throw err;
        console.log(file);
    });
}

var letters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var nums = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['.','!','@','%','&'];


shuffle(letters);
shuffle(nums);
shuffle(special);

var l = 11;
var n = 3;
var s = 2;

document.getElementById('gen').addEventListener("click", generate);
document.getElementById('gen').addEventListener("click", copy);
document.getElementById('cpy').addEventListener("click", copy);
document.getElementById('click').addEventListener("click", tog);
document.getElementById('form1').style.display = 'none';
document.getElementById('submit').addEventListener("click", add_to_file);


function copy(){
    var text = document.getElementById('cpy').innerText;
    navigator.clipboard.writeText(text);
}

function generate(){
    var res = [];

    for(var i = 0; i < l; i++){
        res.push(letters[Math.floor(Math.random() * letters.length)]);
    }
    
    for(var o = 0; o < n; o++){
        res.push(nums[Math.floor(Math.random() * nums.length)]);
        
    }
    for(var j = 0; j < s; j++){
        res.push(special[Math.floor(Math.random() * special.length)]);
    }
    shuffle(res);

    var pass = '';
    for(var k = 0; k < 16; k++){
        pass += res[k];
        if((k+1)%4 == 0 && k!=15) pass += '-';
    }


    show.innerText = '';
    show.innerText = pass;
    document.getElementById('pass').innerText = '';
    document.getElementById('pass').innerText = pass;
}