import { CronJob } from "cron";


export const job = new CronJob('* * * * * *', async() => {
  console.log('fired')
})

job.start()

// const j = CronJob .scheduleJob(unique_name, '*/1 * * * * *',()=>{
//   //Do some work
// });
// // for some condition in some code
// let my_job = cron.scheduledJobs[unique_name];
// my_job.cancel();


// export const fetchJobsJob = new CronJob(
//   '* */2 * * * *', async () => {
//     console.log('hit')
//   }
// )

