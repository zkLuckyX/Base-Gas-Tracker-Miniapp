import axios from "axios";

export async function GET() {
  try {
    const { data } = await axios.get("https://api.basescan.org/api?module=proxy&action=eth_gasPrice");
    return Response.json({ gasPrice: data.result });
  } catch (e) {
    return Response.json({ error: "Failed to fetch gas price" });
  }
}
