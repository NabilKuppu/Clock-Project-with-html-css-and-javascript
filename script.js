"use strict";
function clockTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("clock").innerHTML = time;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  let tarik = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let fullDate = `${day}, ${tarik} ${month} ${year}`;
  document.getElementById("date").innerHTML = fullDate;

  let t = setTimeout(function () {
    clockTime();
  }, 1000);
}
clockTime();
