"use client";

import { useState } from "react";

type FormData = {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    area: string;
    customerType: string;
    quantity: string;
    dailyWaste: string;
    mainProblem: string;
    installationNeeded: boolean;
    contactTime: string;
    bookingPayment: string;
    paymentMethod: string;
    separateWaste: boolean;
    garden: boolean;
    pilotProgram: boolean;
    launchDiscounts: boolean;
    additionalMessage: string;
    consent: boolean;
};

const initialState: FormData = {
    fullName: "",
    phone: "",
    email: "",
    city: "",
    area: "",
    customerType: "",
    quantity: "",
    dailyWaste: "",
    mainProblem: "",
    installationNeeded: false,
    contactTime: "",
    bookingPayment: "",
    paymentMethod: "",
    separateWaste: false,
    garden: false,
    pilotProgram: false,
    launchDiscounts: false,
    additionalMessage: "",
    consent: false,
};

export default function PreBookForm() {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const update = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const target = e.target;

        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            setForm({
                ...form,
                [target.name]: target.checked,
            });
        } else {
            setForm({
                ...form,
                [target.name]: target.value,
            });
        }
    };

    async function submit(e: React.FormEvent) {
        e.preventDefault();

        if (!form.fullName) return alert("Full Name is required");
        if (!form.phone) return alert("Phone Number is required");
        if (!form.email.includes("@")) return alert("Enter valid email");
        if (!form.city) return alert("City is required");
        if (!form.area) return alert("Area is required");
        if (!form.consent) return alert("Please accept consent");

        setLoading(true);
        setMessage("");

        try {
            const body = new URLSearchParams();

            Object.entries(form).forEach(([key, value]) => {
                body.append(key, String(value));
            });

            const res = await fetch(
                process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!,
                {
                    method: "POST",
                    body,
                }
            );
            const data = await res.json();

            console.log("Apps Script Response:", data);

            if (data.success) {
                setMessage("✅ Thank you! Your EcoBuck pre-booking has been received.");
                setForm(initialState);
            } else {
                setMessage(data.error || "Something went wrong.");
            }
        } catch {
            setMessage("❌ Network error. Please try again.");
        }

        setLoading(false);
    }

    return (
        <form
            onSubmit={submit}
            className="mx-auto max-w-3xl space-y-6 rounded-2xl border bg-white p-8 shadow"
        >
            <h2 className="text-3xl font-bold">Pre-book EcoBuck</h2>

            <div className="grid gap-4 md:grid-cols-2">
                <input
                    className="rounded border p-3"
                    placeholder="Full Name *"
                    name="fullName"
                    value={form.fullName}
                    onChange={update}
                />

                <input
                    className="rounded border p-3"
                    placeholder="Phone Number *"
                    name="phone"
                    value={form.phone}
                    onChange={update}
                />

                <input
                    className="rounded border p-3"
                    placeholder="Email *"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                />

                <input
                    className="rounded border p-3"
                    placeholder="City *"
                    name="city"
                    value={form.city}
                    onChange={update}
                />

                <input
                    className="rounded border p-3 md:col-span-2"
                    placeholder="Area / Locality *"
                    name="area"
                    value={form.area}
                    onChange={update}
                />
            </div>

            <select
                className="w-full rounded border p-3"
                name="customerType"
                value={form.customerType}
                onChange={update}
            >
                <option value="">Customer Type</option>
                <option>Household</option>
                <option>Apartment Society</option>
                <option>Restaurant</option>
                <option>Office</option>
                <option>School</option>
                <option>Other</option>
            </select>

            <select
                className="w-full rounded border p-3"
                name="quantity"
                value={form.quantity}
                onChange={update}
            >
                <option value="">Quantity Required</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
            </select>

            <select
                className="w-full rounded border p-3"
                name="dailyWaste"
                value={form.dailyWaste}
                onChange={update}
            >
                <option value="">Daily Wet Waste Estimate</option>
                <option>Less than 1 kg</option>
                <option>1–3 kg</option>
                <option>3–5 kg</option>
                <option>More than 5 kg</option>
            </select>

            <textarea
                className="w-full rounded border p-3"
                rows={4}
                placeholder="Main Problem"
                name="mainProblem"
                value={form.mainProblem}
                onChange={update}
            />

            <label className="flex gap-2">
                <input
                    type="checkbox"
                    name="installationNeeded"
                    checked={form.installationNeeded}
                    onChange={update}
                />
                Need Installation / Demo
            </label>

            <select
                className="w-full rounded border p-3"
                name="contactTime"
                value={form.contactTime}
                onChange={update}
            >
                <option value="">Preferred Contact Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
            </select>

            <div>
                <p className="font-semibold mb-2">Willing to Pay Booking Amount?</p>

                <label className="mr-5">
                    <input
                        type="radio"
                        name="bookingPayment"
                        value="Yes"
                        checked={form.bookingPayment === "Yes"}
                        onChange={update}
                    />{" "}
                    Yes
                </label>

                <label>
                    <input
                        type="radio"
                        name="bookingPayment"
                        value="No"
                        checked={form.bookingPayment === "No"}
                        onChange={update}
                    />{" "}
                    No
                </label>
            </div>

            <select
                className="w-full rounded border p-3"
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={update}
            >
                <option value="">Preferred Payment Method</option>
                <option>JazzCash</option>
                <option>Easypaisa</option>
                <option>Bank Transfer</option>
                <option>Cash</option>
            </select>

            <div className="grid gap-2">
                <label><input type="checkbox" name="separateWaste" checked={form.separateWaste} onChange={update} /> Separate Wet & Dry Waste</label>
                <label><input type="checkbox" name="garden" checked={form.garden} onChange={update} /> Have Garden / Plants</label>
                <label><input type="checkbox" name="pilotProgram" checked={form.pilotProgram} onChange={update} /> Interested in Pilot Program</label>
                <label><input type="checkbox" name="launchDiscounts" checked={form.launchDiscounts} onChange={update} /> Receive Launch Discounts</label>
            </div>

            <textarea
                className="w-full rounded border p-3"
                rows={4}
                placeholder="Additional Message"
                name="additionalMessage"
                value={form.additionalMessage}
                onChange={update}
            />

            <label className="flex gap-2">
                <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={update}
                />
                I agree to be contacted by Eco Zindagi regarding my pre-booking.
            </label>

            <button
                disabled={loading}
                className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white disabled:opacity-50"
            >
                {loading ? "Submitting..." : "Submit Pre-booking"}
            </button>

            {message && (
                <div className="rounded bg-green-50 p-3 text-center">
                    {message}
                </div>
            )}
        </form>
    );
}