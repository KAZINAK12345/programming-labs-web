function showDate() {
    let out = document.getElementById('current-date');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let today = new Date();
    let today2 = new Date();
    let today3 = new Date();
    let today4 = new Date();
    let today5 = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');
    out2.innerHTML = today2.toLocaleString('de-LU');
    out3.innerHTML = today3.toLocaleString('es-CR');
    out4.innerHTML = today4.toLocaleString('ja-JP');
    out5.innerHTML = today5.toLocaleString('sv-SE');
}
function showDaysCount() {
    let out = document.getElementById('Days');
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    out.innerHTML = 'Количество дней с дня рождения ' + daysCount;
}
function Otchistit() {
    let out = document.getElementById('Days')
    out.innerHTML = ' ';
}