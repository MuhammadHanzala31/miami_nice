"use client";
import React, { ChangeEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";


export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    licenseNumber: "",
    oeTracker: "",
    mealRequirements: "",
    registrationOption: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paid, setPaid] = useState(false);

  console.log(process.env.NEXT_PUBLIC_SANDBOX_PAYPAL_CLIENT_ID);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Create PayPal Order
      const orderRes = await fetch("/api/registration", {
        method: "POST",
        body: JSON.stringify({
          amount: getAmount(formData.registrationOption),
        }),
      });

      const orderData = await orderRes.json();
      const orderId = orderData.data.id;

      // Step 2: Approve + Capture Payment
      const captureRes = await fetch("/api/capture-payment", {
        method: "POST",
        body: JSON.stringify({ orderId }),
      });

      const captureData = await captureRes.json();

      if (captureData.status === "COMPLETED") {
        // Step 3: Save form + send email
        await fetch("/api/save-form", {
          method: "POST",
          body: JSON.stringify({ formData, orderId }),
        });

        alert("Registration completed successfully!");
      } else {
        alert("Payment failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const getAmount = (opt: string) => {
    const map: any = {
      "sat-reg-mdopa-bcoa-300": 300,
      "sunday-reg-mdopa-bcoa-350": 350,
      "sat-sun-reg-mdopa-bcoa-500": 500,
      "saturday-reg-aoa-400": 400,
      "sunday-reg-aoa-450": 450,
      "sat-sun-reg-aoa-650": 650,
      "saturday-reg-non-member-450": 450,
      "sunday-reg-non-member-500": 500,
      "sat-sun-reg-non-member-800": 800,
    };
    return map[opt] || 0;
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Doctor Registration</h2>
        <p className="text-lg mb-2">
          Complete the form below and submit payment to confirm your attendance to Miami Nice 2025.
        </p>
        <p className="text-base mb-2">Remember you can choose Saturday, Sunday or both dates this year.</p>
        <p className="text-base text-gray-600">Payments through PayPal will say Donation to MDOPA.</p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for registering!</h3>
          <p className="text-green-700">Our team will respond within one business day.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="firstName">First Name:</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e: any) => handleChange("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="middleName">Middle Name:</Label>
              <Input
                id="middleName"
                value={formData.middleName}
                onChange={(e: any) => handleChange("middleName", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name:</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e: any) => handleChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email: *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e: any) => handleChange("email", e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone Number: *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e: any) => handleChange("phone", e.target.value)}
              required
            />
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="addressLine1">Address Line 1: *</Label>
              <Input
                id="addressLine1"
                value={formData.addressLine1}
                onChange={(e: any) => handleChange("addressLine1", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="addressLine2">Address Line 2:</Label>
              <Input
                id="addressLine2"
                value={formData.addressLine2}
                onChange={(e: any) => handleChange("addressLine2", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="city">City: *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e: any) => handleChange("city", e.target.value)}
                required
              />
            </div>
          </div>

          {/* State and Zip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state">State: *</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e: any) => handleChange("state", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="zipCode">Zip Code: *</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e: any) => handleChange("zipCode", e.target.value)}
                required
              />
            </div>
          </div>

          {/* License Number */}
          <div>
            <Label htmlFor="licenseNumber">FL License Number (If Applicable):</Label>
            <Input
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={(e: any) => handleChange("licenseNumber", e.target.value)}
            />
          </div>

          {/* OE Tracker */}
          <div>
            <Label htmlFor="oeTracker">OE Tracker: *</Label>
            <Input
              id="oeTracker"
              value={formData.oeTracker}
              onChange={(e: any) => handleChange("oeTracker", e.target.value)}
              required
            />
          </div>

          {/* Meal Requirements */}
          <div>
            <Label htmlFor="mealRequirements">My Special Meal Requirements are: *</Label>
            <Textarea
              id="mealRequirements"
              value={formData.mealRequirements}
              onChange={(e: any) => handleChange("mealRequirements", e.target.value)}
              rows={4}
              required
            />
          </div>

          {/* Registration Options */}
          <div>
            <Label className="mb-3 block">Please select the option that best applies: *</Label>
            <RadioGroup
              value={formData.registrationOption}
              onValueChange={(value: any) => handleChange("registrationOption", value)}
              required
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sat-reg-mdopa-bcoa-300" id="opt1" />
                  <Label htmlFor="opt1" className="font-normal cursor-pointer">
                    Saturday REG MDOPA/BCOA - $300
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sunday-reg-mdopa-bcoa-350" id="opt2" />
                  <Label htmlFor="opt2" className="font-normal cursor-pointer">
                    Sunday REG MDOPA/BCOA - $350
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sat-sun-reg-mdopa-bcoa-500" id="opt3" />
                  <Label htmlFor="opt3" className="font-normal cursor-pointer">
                    Sat+Sun REG MDOPA/BCOA - $500
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="saturday-reg-aoa-400" id="opt4" />
                  <Label htmlFor="opt4" className="font-normal cursor-pointer">
                    Saturday REG AOA - $400
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sunday-reg-aoa-450" id="opt5" />
                  <Label htmlFor="opt5" className="font-normal cursor-pointer">
                    Sunday REG AOA - $450
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sat-sun-reg-aoa-650" id="opt6" />
                  <Label htmlFor="opt6" className="font-normal cursor-pointer">
                    Sat+Sun REG AOA - $650
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="saturday-reg-non-member-450" id="opt7" />
                  <Label htmlFor="opt7" className="font-normal cursor-pointer">
                    Saturday REG Non-Member - $450
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sunday-reg-non-member-500" id="opt8" />
                  <Label htmlFor="opt8" className="font-normal cursor-pointer">
                    Sunday REG Non-Member - $500
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sat-sun-reg-non-member-800" id="opt9" />
                  <Label htmlFor="opt9" className="font-normal cursor-pointer">
                    Sat+Sun REG Non-Member - $800
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="pt-4">

            {!paid ? (
              <>
                <Button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-500 text-white px-8"
                  onClick={async () => {
                    if (!formData.registrationOption) {
                      alert("Please select a registration option.");
                      return;
                    }

                    setLoading(true);

                    const orderRes = await fetch("/api/registration", {
                      method: "POST",
                      body: JSON.stringify({
                        amount: getAmount(formData.registrationOption),
                      }),
                    });

                    const orderData = await orderRes.json();
                    setOrderId(orderData.data.id);

                    setLoading(false);
                  }}
                >
                  PROCEED TO PAYMENT
                </Button>

                {orderId && (
                  <div className="mt-6">
                    <PayPalScriptProvider
                      options={{
                        clientId: process.env.NEXT_PUBLIC_SANDBOX_PAYPAL_CLIENT_ID!,
                      }}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={async () => {
                          return orderId;
                        }}
                        onApprove={async () => {
                          const captureRes = await fetch("/api/capture-payment", {
                            method: "POST",
                            body: JSON.stringify({ orderId }),
                          });

                          const data = await captureRes.json();

                          if (data.status === "COMPLETED") {
                            setPaid(true);

                            await fetch("/api/save-form", {
                              method: "POST",
                              body: JSON.stringify({ formData, orderId }),
                            });
                          }
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-green-50 p-4 rounded text-center">
                <p className="font-semibold text-green-800">Payment Successful!</p>
                <p className="text-green-600">Your registration has been received.</p>
              </div>
            )}
          </div>
        </form>
      )}
    </main>

  )
}
