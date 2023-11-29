import { sleep } from "openai/core.mjs";
import { useCallback } from "react"; 

export const useJobs = () => {

  const loadJobs = useCallback(async(currentPage: number) => {
    const res = await fetch(
      `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search?SearchQuery=javascript&PageSize=100&PageNumber=${currentPage}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "da107207ccmsh6c66098c73c5e9ep143ac5jsn4f046b8cc5c8",
          "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
        },
      }
    );
    const r = await res.json();
    return r;
  }, [])




  return { loadJobs }

}

// const job = new CronJob('* */3 * * * *', async() => {
  // let totalPages = 2;
  // let currentPage = 1;  
  // do {
  //   const res = await fetch(
  //     `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search?SearchQuery=javascript&PageSize=100&PageNumber=${currentPage}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "da107207ccmsh6c66098c73c5e9ep143ac5jsn4f046b8cc5c8",
  //         "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
  //       },
  //     }
  //   );
  //   const r = await res.json();
  //   totalPages = Math.round(r.totalPages / 100);
  //   ++currentPage;
  //   console.log({ currentPage })

  //   const { error } = await supabase.from("ApplyUpGo").insert([r.data]);
  //   if (error) {
  //     console.log({ error })
  //     break;
  //   }
  //   await sleep(15000)
  // } while (currentPage < totalPages);
// })

// job.start()