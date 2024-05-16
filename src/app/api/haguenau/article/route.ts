/* Route de l'API qui Fetch les données du LEI */
import { NextResponse } from "next/server";
const mysql = require("mysql2");

export async function GET() {
  const con = mysql.createConnection({
    host: "bdedi27.coraxis.fr",
    user: "haguenaufr",
    password: "2gYWza79",
    database: "haguenaufr",
    port: 3306,
  });
  try {
    con.connect(function (err: Error) {
      if (err) throw err;
      con.query(
        "SELECT * FROM vh_entities",
        function (err: string, result: any, fields: string[]) {
          if (err) throw err;
          console.log(result);
        }
      );
    });
  } catch (e) {
    return NextResponse.json({ error: e, status: "500" });
  }

  return NextResponse.json({ status: "200" });
}
