var show = document.getElementById('cpy');

function shuffle(list){
    for(var i = 0; i < list.length; i++){
        var ind = Math.floor(Math.random() * list.length);
        var ind2 = Math.floor(Math.random() * list.length);
        var temp = list[ind];

        list[ind] = list[ind2];
        list[ind2] = temp;
    }
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
}