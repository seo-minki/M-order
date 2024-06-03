import menu from "./dummy.json";

export async function GET() {
  return Response.json({result : menu});
}