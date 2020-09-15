function ischecked(self) {
    var checkbox = self;
    var text = document.getElementById('text');

    if(checkbox.checked === true) {
        text.style.color = 'gray';
        text.style.textDecoration = 'line-through';
    } else {
        text.style.color = 'black';
        text.style.textDecoration = 'None';
    }
}

function getdate() {
    var today = document.getElementById('today');
    var weekday = document.getElementById('weekday');
    var dt = new Date();
    var y = dt.getFullYear();
    var m = dt.getMonth();
    var d = dt.getDate();

    var wd = dt.getDay();
    var weekdayar = new Array();
    weekdayar = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

    today.innerHTML = y+'년 '+m+'월 '+d+'일';
    weekday.innerHTML = weekdayar[wd];

}

getdate();

function popup_open() {
    var popup = document.getElementById('popup');

    if (popup.className === 'hidden' ) {
        popup.className = 'flex popup';
    } else {
        popup.className = 'hidden';
    }
}

function popup_close() {
    var popup = document.getElementById('popup');

    if (popup.className === 'flex popup' ) {
        popup.className = 'hidden';
    } else {
        popup.className = 'flex popup';
    }
}

function addtodo() {
    var text = document.getElementById('todotext').value;
    var list = document.getElementById('todolist');

    popup_close();
    var li = document.createElement('li');
    var cb = document.createElement('input');
    li.className = 'contents__todo__item';
    cb.setAttribute('type', 'checkbox');
    cb.setAttribute('onclick', 'ischecked()');
    // ischecked() error
    cb.className = 'contents__todo__cb';
    var span = document.createElement('span');
    span.innerText = text;
    span.className = 'contents__todo__text';

    li.appendChild(cb);
    li.append(' ');
    li.appendChild(span);
    list.appendChild(li);

}
