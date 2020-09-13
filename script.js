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
    var d = new Date();
    var y = d.getFullYear();

    today.innerHTML = y;
}
// 날짜 가져와서 띄워주는거부터

getdate();