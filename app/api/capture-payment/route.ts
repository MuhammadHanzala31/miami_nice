import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest) {
  const { orderId } = await req.json();

  const auth = Buffer.from(
    `${process.env.SANDBOX_PAYPAL_CLIENT_ID}:${process.env.SANDBOX_PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch(
    `${process.env.SANDBOX_PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
