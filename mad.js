let btn1 = {
    'clicked': function (self) {
        alert("Don't Touch ME!!!");
        self.style.display='none';
        setTimeout(function(){
            document.querySelector('#btn2').style.display = 'block';
        }, 1000)
    }
}

let btn2 = {
    'visable':false,
    'nowMargin':60,
    'goRight': function (self) {
        self.style.marginLeft = this.nowMargin + 'px';
    },
    'onMouseEntereHandler': function () {
        let btn2_ele = document.querySelector('#btn2');
        if (this.nowMargin <= 600) {
            this.nowMargin += 70;
            this.goRight(btn2_ele);
        }
        else {
            btn2_ele.style.display='none';
            setTimeout(function(){
                let btn_list = document.querySelectorAll('.btns')
                for (let i=0; i<btn_list.length; i++){
                    btn_list[i].style.display = 'inline';
                }
            }, 2000)
        }
    }
}

let btns = {
    'onMouseEntereHandler': function (self) {
        self.style.visibility='hidden';
        setTimeout(function(){
            self.style.visibility='visible';
        }, 500)
    }
}