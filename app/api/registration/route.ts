
import { NextRequest, NextResponse } from "next/server";




export async function POST(req : NextRequest) {
  const { amount } = await req.json();

  const auth = Buffer.from(
    `${process.env.SANDBOX_PAYPAL_CLIENT_ID}:${process.env.SANDBOX_PAYPAL_SECRET}`
  ).toString("base64");

  const res = await fetch(`${process.env.SANDBOX_PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount,
          },
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json({
    data : data
  });
}
