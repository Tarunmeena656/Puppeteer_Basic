const schedule = require("node-schedule");

// const job = schedule.scheduleJob("1 * * * * *", function (fireDate) {
//   console.log("success")
//   console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());

// });

// const date = new Date(2023, 4, 22, 12, 7, 0);

// const job = schedule.scheduleJob(date, function () {
//   console.log("The world is going to end today.");
// });


// const date = new Date(2023, 4, 22, 12, 12, 0);
// let x = 'Tada!';
// const job = schedule.scheduleJob(date, function(y){
//   console.log(y);
// }.bind(null,x));
// x = 'Changing Data';



// const rule = new schedule.RecurrenceRule();
// rule.second = 42;

// const job = schedule.scheduleJob(rule, function(){
//   console.log('The answer to life, the universe, and everything!');
// });


const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 10000);
const job = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Time for tea!');
});