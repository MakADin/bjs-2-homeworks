class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(element => element.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    return this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    return currentDate.toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit' });
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(element => {
        if (element.time === this.getCurrentFormattedTime() && element.canCall) {
          element.canCall = false;
          element.callback();
        } 
      })
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(element => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

clock = new AlarmClock();
for (let i = 10; i < 24; i++) {
  clock.addClock(`${i}:${i+10}`, () => flagToCall = true)
  console.log();  
}
clock.addClock("16:46", () => flagToCall = true);
clock.addClock("12:46", () => flagToCall = true);
clock.addClock("11:46", () => flagToCall = true);
clock.addClock("13:46", () => flagToCall = true);
for (alarm of clock.alarmCollection) {
  console.log(alarm);
}