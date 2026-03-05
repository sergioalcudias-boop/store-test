export async function GET() {
  const response = await fetch("https://v1.baseball.api-sports.io/players?search=ohtani", {
    method: "GET",
    headers: {
      "x-apisports-key": "0a43ecd485c67999b7c5cc818e608929"
    }
  });

  const data = await response.json();

  return Response.json(data);
}