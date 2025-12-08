"use client";

import { useEffect, useState } from "react";

export default function PayPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load PayPal script dynamically
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AS7bk_mhNPNv3mnnWq8vCrtE38wNQ_v6URThprbXW4otjn1s5Poc5binWsTxxxxxxxxxxxxxx";
    script.defer = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!loaded || !window.paypal) return;

    window.paypal
      .Buttons({
        createOrder: async () => {
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            body: JSON.stringify({ amount: "10.00" }),
          });

          const data = await res.json();
          return data.id;
        },

        onApprove: async (data) => {
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            body: JSON.stringify({ orderId: data.orderID }),
          });

          const capture = await res.json();
          console.log("Payment Completed:", capture);

          window.location.href = "/pay/success";
        },
      })
      .render("#paypal-button");
  }, [loaded]);

  return (
    <div className="w-full flex justify-center mt-10">
      <div id="paypal-button"></div>
    </div>
  );
}
