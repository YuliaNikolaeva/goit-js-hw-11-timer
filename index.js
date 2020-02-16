'use strict';
import ref from './ref.js';

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  };

  startTimer() {
    this.timer = setInterval(() => {
    this.currentTime = new Date();
    this.time = this.targetDate.getTime() - this.currentTime;

    if (this.time > 0) {
      ref.days.textContent = Math.floor(this.time / (1000 * 60 * 60 * 24)); 
      ref.hours.textContent = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      ref.minutes.textContent = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
      ref.seconds.textContent = Math.floor((this.time % (1000 * 60)) / 1000);
    } else {
      clearInterval(this.timer);
      ref.days.textContent = 0; 
      ref.hours.textContent = 0;
      ref.minutes.textContent = 0;
      ref.seconds.textContent = 0;
    }
  }, 1000);
 };
};

const firstTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("feb 22, 2020")
});

firstTimer.startTimer();