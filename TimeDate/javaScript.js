function getDayDateTime() {
    let time = document.getElementById("time");
    let din = document.getElementById("day");
    let date = document.getElementById("date");



    let today = new Date();
    let dd=today.getDate();
    let mm=today.getMonth();
    let yy=today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    if(yy<10) yy='0'+yy;
    date.innerHTML=dd+"/"+mm+"/"+yy;
    

    let day = today.getDay();

    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "saterday"];
    din.innerHTML = daylist[day];



    // Time
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let prepand = (hour >= 12) ? "PM" : "AM";

    hour = (hour >= 12) ? hour - 12 : hour;

    if (hour === 0 && prepand === "PM") {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = "Noon"
        } else {
            hour = 12;
            prepand = "PM";
        }
    }
    if (hour === 0 && prepand === "AM") {


        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = "Mid night"
        }
        else {
            hour = 12;
            prepand = "AM";
        }
    }
    let prefix = 0
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;


    time.innerHTML = (hour + " " + prepand + " : " + minute + " : " + second);
    let t = setTimeout(function () { getDayDateTime() }, 1000);


}