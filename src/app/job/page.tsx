"use client"
import { useEffect, useState } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { JobView } from "../components"
import { TJob } from '../utils'

export default function JobViewPage() {
  const [job, setJob] = useState<TJob>()
  const router = useSearchParams()


  useEffect(() => {
    const r =  localStorage.getItem("jobs-crates");
    if(r) {
      const allJobs = JSON.parse(r)
      const slug = router.get('name')
      const foundJob = allJobs.find((j: TJob) => j.slug === slug)
      setJob(foundJob)
    }
  }, [router])

  return ( <JobView job={job} /> )
}
