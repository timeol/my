window.onload = function () {
    var fa = document.querySelector('.fa');
    var cube = document.querySelector('.cube');
    var mi = document.querySelector('.mi');
    var first = document.querySelector('.first');
    var redmi = document.querySelector('.redmi');
    var second = document.querySelector('.second');
    var third = document.querySelector('.third');
    var tv = document.querySelector('.tv');
    var four = document.querySelector('.four');
    var notebook = document.querySelector('.notebook');
    var vrv = document.querySelector('.vrv');
    var five = document.querySelector('.five');
    var six = document.querySelector('.six');
    var nts = document.querySelector('.nts');
    var seven = document.querySelector('.seven');
    var wan = document.querySelector('.wan');
    var sdsa = document.querySelector('.sdsa');
    var eight = document.querySelector('.eight');
    var name = document.querySelector('.name');
    var inp = document.querySelector('.seek input');
    var menu = document.querySelector('.menu');
    var li= document.querySelector('.seek i');
    var bli = document.querySelectorAll('.banner-1 ul li a');
    var dil = document.querySelectorAll('.banner-1 ul li div');
    var bi = document.querySelectorAll('.bigphoto ul li');
    var sp = document.querySelectorAll('.bigphoto img');
    var lt = document.querySelector('.lt');
    var gt = document.querySelector('.gt');
    var las = document.querySelector('.las');
    var bh = document.querySelectorAll('.home1 h3 a');
    var dh = document.querySelectorAll('.home2 div ul');
    console.log(dh)

    fa.onmouseover = function () {
        cube.style.display='block';
        fa.onmouseout = function () {
            cube.style.display = 'none';
        }
    };
    first.onmouseover = function () {
        mi.style.display = 'block';
        first.onmouseout = function () {
            mi.style.display = 'none';
        }
    };
    second.onmouseover = function () {
        redmi.style.display = 'block';
        second.onmouseout = function () {
            redmi.style.display = 'none';
        }
    };
    third.onmouseover = function () {
        tv.style.display = 'block';
        third.onmouseout = function () {
            tv.style.display = 'none';
        }
    };
    four.onmouseover = function () {
        notebook.style.display = 'block';
        four.onmouseout = function () {
            notebook.style.display = 'none';
        }
    };
    five.onmouseover = function () {
        vrv.style.display = 'block';
        five.onmouseout = function () {
            vrv.style.display = 'none';
        }
    };
    six.onmouseover = function () {
        nts.style.display = 'block';
        six.onmouseout = function () {
            nts.style.display = 'none';
        }
    };
    seven.onmouseover = function () {
        wan.style.display = 'block';
        seven.onmouseout = function () {
            wan.style.display = 'none';
        }
    };
    eight.onmouseover = function () {
        sdsa.style.display = 'block';
        eight.onmouseout = function () {
            sdsa.style.display = 'none';
        }
    };
    inp.onclick = function () {
        name.style.display = 'none';
        menu.style.display = 'block';
        inp.style.borderColor = '#ff6700';
        menu.style.borderColor = '#ff6700';
        li.style.borderColor = '#ff6700';
    };
    inp.onblur = function () {
        menu.style.display='';
        name.style.display='';
        menu.style.borderColor='';
        inp.style.borderColor='';
        li.style.borderColor='';
    };
    for (var i=0;i<bli.length;i++){
        bli[i].index = i;
        bli[i].onmouseover = function (){
            for (var j=0;j<bli.length;j++){
                dil[j].style.display = 'none';
            }
            dil[this.index].style.display = 'block';
        };
        bli[i].onmouseout = function () {
            for (var j=0;j<bli.length;j++){
                dil[j].style.display = 'none'
            }
        }
    }
    function update(num){
        for(var j=0;j<length;j++){
            bi[j].className = '';
            sp[j].style.display = 'none';
        }
        bi[num].className = 'active';
        sp[num].style.display = 'block';
    }
    function autoplay(){
        ++num;
        if(num >= length){
            num = 0;
        }
        update(num);
    }
    var length = bi.length;
    var timer = null;
    var num = null;
    for(var i=0;i<length;i++){
        bi[i].index = i;
        bi[i].onmouseover = function(){
            clearInterval(timer);
            update(this.index);
        };
        bi[i].onmouseout = function(){
            num = this.index;
            timer = setInterval(autoplay,5000);
        }
    }
    timer = setInterval(autoplay,5000);

    // lt.onclick = function(){
    //     if(las.offsetLeft > -4960){
    //         las.style.left = (las.offsetLeft - 992) + 'px';
    //     }};
    // gt.onclick = function(){
    //     if(las.offsetLeft < 0){
    //         las.style.left = (las.offsetLeft +992) + 'px';
    //     }
    // };
    for (var i=0;i<bh.length;i++){
        bh[i].index = i;
        bh[i].onmouseover = function (){
            for (var j=0;j<bh.length;j++){
                dh[j].style.display = 'none';
            }
            dh[this.index].style.display = 'block';
            bh[this.index].style.color = '#ff6700';
            bh[this.index].style.borderBottomColor = '#FF6700';
        };
        bh[i].onmouseout = function () {
            bh[this.index].style.color='';
            bh[this.index].style.borderBottomColor = '';
        }
    }
};