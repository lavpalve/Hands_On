document.onkeydown = function (e) {
    if(e.key == 37){ //leftKey
        document.querySelector('#container').style.paddingLeft = '10px';
    }else if(e.key == 38){ //up
        document.querySelector('#container').style.paddingTop = '10px';
    }else if(e.key == 39){ //right
        document.querySelector('#container').style.paddingLeft = 'auto';
    }else if(e.key == 40){ //down
        document.querySelector('#container').style.paddingTop = 'auto';
    }
};