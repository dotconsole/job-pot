export * from './supabase'
export * from './pipelines'




export const sleep = (ms: number) => {
  return new Promise((resolve, reject) => {
      return setTimeout(resolve, ms);
  });
}


export type TJob = {
  postDate: string;
  company: string;
  title: string;
  created_at: string;
  dateAdded: string;
  slug: string;
  url: string;
  viewCount: number;
  jobSource: string;
}