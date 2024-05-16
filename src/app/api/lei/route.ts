/* Route de l'API qui Fetch les données du LEI */

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const response = await fetch(process.env.LEI_DB_URL as string);
    return NextResponse.json(await response.json());
  } catch (e) {
    return NextResponse.json(e);
  }
}
