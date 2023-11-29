import { NextResponse, NextRequest } from "next/server"

import { supabase } from "@apply-up/utils"

type Weather = {
    location_name: string,
    location_country: string,
    current_last_updated: string,
    condition_wind_kph: number,
    condition_humidity: number,
    condition_cloud: number,
    condition_precip_mm: number,
    current_temp: number,
    condition_tem_feels_like: number,
}


export async function POST(req: NextRequest) {
  const weather = await req.json()
  try {
    const { data, error } = await supabase
      .from('Weather')
      .insert(weather)
      .select()

    return NextResponse.json({ message: 'new weather data', data, error }, { status: 201 })
  } catch(error: any) {
    return NextResponse.json({ message: 'error', data: null, error }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
    .from('Weather')
    .select('*')
    return NextResponse.json({ message: 'new weather data', data, error }, { status: 200 })

  } catch(error: any) {
  return NextResponse.json({ message: 'error', data: null, error }, { status: 400 })
  }
}
