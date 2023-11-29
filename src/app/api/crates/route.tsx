import { CronJob } from "cron";
import OpenAI from "openai";
import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

import { getENV } from "@apply-up/utils";

// http://jobsite.experimentsinthedeep3.com/api/v2/Jobs/Search?pageNumber=872&pageSize=10
// totalPages

import { sleep } from "openai/core.mjs";

// export async function GET() {
//   const supabaseKey = getENV("SUPABASE_ANON_KEY");
//   const supabaseUrl = getENV("SUPABASE_REST_API_URL");
//   const supabase = createClient(supabaseUrl as string, supabaseKey as string);

//   let { data, error } = await supabase
//     .from("updated_table")
//     .insert([{ job_crates: new Date() }]);
//   console.log(data);

//   return NextResponse.json({ message: "", data, error });
// }

export async function GET() {
  const supabaseKey = getENV("SUPABASE_ANON_KEY");
  const supabaseUrl = getENV("SUPABASE_REST_API_URL");
  const rapidAPIKey = getENV("RAPID_API_KEY");
  const rapidAPIHost = getENV("RAPID_API_HOST");
  const supabase = createClient(supabaseUrl as string, supabaseKey as string);

  let { data } = await supabase.from("job_crates").select("*");

  // let willUpdate = false;

  // const job = new CronJob('* * * * * *', async () => {
  //   console.log('its done', new Date().toLocaleString())
  // })

  // job.start()

  // const { data: job_crates_last_update } = await supabase
  //   .from("updated_table")
  //   .select("updated_at,editing")
  //   .eq("table_name", "job_crates");

  //   console.log('test',
  //     Math.round((new Date().getTime() - new Date(new Date(('2023-11-21 16:25:00.436+00')).setHours(48)).getTime()))/1000)
  //   console.log('actual',
  //     new Date().getTime() - new Date(new Date(new Date(job_crates_last_update![0].updated_at)).setHours(48)).getTime())

  // if (
  //   !job_crates_last_update![0].editing &&
  //   new Date(job_crates_last_update![0].updated_at).getTime() - new Date(new Date(new Date(job_crates_last_update![0].updated_at)).setHours(48)).getTime() -  >=
  //   133200000
  // ) {
  //   willUpdate = true;
  //   await supabase
  //     .from("updated_table")
  //     .upsert({
  //       editing: true,
  //       table_name: "job_crates",
  //       updated_at: new Date().toISOString(),
  //     });
  // }

  // console.log({ willUpdate })

  // if (willUpdate) {
  //   try {
  //     let totalPages = 2;
  //     let currentPage = 1;
  //     do {
  //       const res = await fetch(
  //         `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search?SearchQuery=javascript&PageSize=100&PageNumber=${currentPage}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "X-RapidAPI-Key": rapidAPIKey,
  //             "X-RapidAPI-Host": rapidAPIHost,
  //           },
  //         }
  //       );
  //       const r = await res.json();
  //       totalPages = Math.round(r.totalPages / 100);
  //       ++currentPage;

  //       const { data } = await supabase.from("job_crates").insert([...r.data]).select();

  //       console.log(data?.length, { currentPage })

  //       await sleep(15000);
  //     } while (currentPage <= totalPages);

  //     await supabase
  //     .from("updated_table")
  //     .upsert({
  //       editing: false,
  //       table_name: "job_crates",
  //       updated_at: new Date().toISOString(),
  //     });

  //       console.log('done')

  //   } catch (e: any) {
  //     console.log("error", e);
  //   }
  // }

  return NextResponse.json({ success: true, data });
}

export async function POST(req: Request) {
  const { job } = await req.json();
  const apiKey = getENV("OPENAI_API");

  const openai = new OpenAI({
    apiKey,
  });

  const result = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert in drafting cover letters for applying for jobs, You create succinct cover letters that's not more than 200 words for job titles given to you`,
      },
      {
        role: "user",
        content: `Draft a cover letter for me with the job title ${job.title}, listed at ${job.url}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return NextResponse.json({ data: result.choices[0].message.content });
}
