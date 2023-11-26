import React from "react";

const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
const countdown = setInterval(function () {

  const christmas = 25;

  const now = new Date().getTime();
  const distance = countDownDate - now;

  // get today's date (you only need the day)
  const d = new Date();

  const today = d.getDate();

  let remainingTime = christmas - today;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownDisplay =
    remainingTime +
    " " +
    "days" +
    " " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s ";
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("demo").innerHTML = "Merry Christmas";
  }

  return (
    <>
    
        <div className="countdownDisplay">{countdown}-</div>
        <div className="animate__animated animate__flash">
          <p className="countdownText">Days 'til Christmas!</p>
        </div>
      
    </>
  );
})
export default countdown;
