function calculate() {
    var save = eval(document.getElementById('text').value);
    document.getElementById('result').value = save;
}

function erase() {
    document.getElementById('text').value = document.getElementById('text').value.slice(0 , -1);
}


var r = document.querySelector(':root');

var flag = 0;
function makeDark() {
    if (flag == 0) {
        flag = !flag;
        r.style.setProperty('--bg', '#292929');
        r.style.setProperty('--con_bg', '#151515');
        r.style.setProperty('--btn_bg', '#292929');
        r.style.setProperty('--equal_bg', '#66FF7F');
        r.style.setProperty('--text_color', '#FFFFFF');
        r.style.setProperty('--Cbtn_bg', '#FF5959');
        r.style.setProperty('--img_Url', "url('./images/dark_icon.svg')");
    }
    else {
        flag = !flag;
        r.style.setProperty('--bg', '#DEFCF9');
        r.style.setProperty('--con_bg', '#FFFFFF');
        r.style.setProperty('--btn_bg', '#F0F0F0');
        r.style.setProperty('--equal_bg', '#0047FF');
        r.style.setProperty('--text_color', '#151515');
        r.style.setProperty('--Cbtn_bg', '#FF5959');
        r.style.setProperty('--img_Url', "url('./images/light_icon.svg')");
    }
}




dragElement(document.getElementById("calculator"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById("calculatormove").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}