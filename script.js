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