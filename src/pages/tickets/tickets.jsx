import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SumbintTick } from "../../assets/images";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
    computerName: Yup.string().required("Computer name is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string()
        .required("Description is required")
        .min(10, "At least 10 characters required"),
});

export default function Tickets() {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [successOpen, setSuccessOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [assistance, setAssistance] = useState("");
    const [device, setDevice] = useState("");
    const [form, setForm] = useState({
        computerName: "",
        location: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            assistance,
            device,
            ...form,
        };

    };
    const HERO_CARDS = [
        { id: 1, title: "Submit IT Tickets", description: "Information Technology Tickets" },
        { id: 2, title: "Submit Payable Tickets", description: "Payable Tickets" },
        { id: 3, title: "Submit Payroll Tickets", description: "Payroll Tickets" },
        { id: 4, title: "Submit HR Tickets", description: "HR Tickets" },
        { id: 5, title: "Submit EOD Tickets", description: "EOD Tickets" },
        { id: 6, title: "Submit Logistics Tickets", description: "Logistics Tickets" },
    ];
    return (
        <section>
            <div className="py-8">
                <div className="px-8 py-8 bg-white rounded-2xl border border-[#E2E8F0]">
                    <h2 className="text-2xl font-bold">Tickets Panel</h2>
                    <p className="text-sm text-gray-500">
                        Submit a ticket from one of the following categories
                    </p>
                </div>
                <div className="px-8 py-8 bg-white rounded-2xl border border-[#E2E8F0] mt-4">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                        {HERO_CARDS.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => {
                                    setSelectedTitle(card.title);
                                    setOpen(true);
                                }}

                                className="px-4 py-4 cursor-pointer bg-white rounded-lg border border-[#E2E8F0] hover:border-[#087BB3]"
                            >
                                <h3 className="text-base text-center font-semibold pb-1">
                                    {card.title}
                                </h3>
                                <p className="text-xs text-center text-gray-500">
                                    {card.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {successOpen && (
                    <div className="fixed inset-0 bg-[#00000085] z-35 flex items-center justify-center px-4">
                        <div className="bg-white rounded-xl shadow-lg max-w-170 w-full text-center" >
                            <div className="flex justify-between py-4 px-8 items-center gap-4 border-b border-[#E2E8F0]" >
                                <h2 className="text-lg font-semibold text-[#111B2B]">
                                    {selectedTitle} Submitted
                                </h2>
                                <button className="text-base font-bold cursor-pointer" onClick={() => setSuccessOpen(false)}>✕</button>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-center mb-4">
                                    <div>
                                        <img src={SumbintTick} alt="sumbint-tick" width={100} height={100} loading="lazy" />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-sm text-[#373940] max-w-62 font-medium mb-6 text-center">
                                        Thank you for submitting the request, what would you like to do next?
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <Link
                                        to={"/dashboard"}
                                        className="px-6 py-3 bg-white text-[#030303] text-base font-semibold border border-[#F3F3F5] rounded-lg"
                                    >
                                        Go to My Dashboard
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setSuccessOpen(false);
                                            setOpen(true);
                                        }}

                                        className="cursor-pointer px-5 py-3 text-base font-semibold  bg-[#087BB3] text-white rounded-lg"
                                    >
                                        Submit Another Ticket
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {open && (
                    <>
                        <div
                            className="fixed inset-0 z-50 py-8 flex items-center justify-center bg-black/40"
                            onClick={() => setOpen(false)}
                        >
                            <div
                                className="relative w-full max-w-170 bg-white shadow-xl rounded-lg transform transition-all duration-300 overflow-y-auto max-h-[calc(100vh-50px)] opacity-100 translate-y-0 scale-100"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex px-8 py-4 justify-between border-b border-[#E2E8F0]">
                                    <h2 className="text-lg text-[#111B2B] font-semibold">  {selectedTitle}</h2>
                                    <button className="text-base font-bold cursor-pointer" onClick={() => setOpen(false)}>✕</button>
                                </div>
                                <div className="px-8 py-8">

                                    <Formik
                                        initialValues={{
                                            computerName: "",
                                            location: "",
                                            description: "",
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, { resetForm }) => {
                                            const payload = {
                                                assistance,
                                                device,
                                                ...values,
                                            };

                                            console.log("Submitted Data 👉", payload);

                                            setOpen(false);
                                            setSuccessOpen(true);
                                            resetForm();
                                        }}

                                    >
                                        {() => (
                                            <Form className="space-y-5">
                                                <div>
                                                    <p className="text-sm text-[#373940] font-medium mb-3">
                                                        What would you like assistance with?
                                                    </p>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {["General", "Software", "Hardware"].map((item) => (
                                                            <button
                                                                type="button"
                                                                key={item}
                                                                onClick={() => setAssistance(item)}
                                                                className={`cursor-pointer px-4 py-2 text-sm text-[#373940] font-medium rounded-full border border-[#D0D5DD] ${assistance === item
                                                                    ? "bg-[#087BB3] text-white"
                                                                    : "bg-gray-100 text-gray-600"
                                                                    }`}
                                                            >
                                                                {item}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-sm text-[#373940] font-medium mb-3">
                                                        Which device you have an issue with?
                                                    </p>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {["Imaging", "Computers", "Phones", "X-Rays", "Printers", "Scanners"].map((item) => (
                                                            <button
                                                                type="button"
                                                                key={item}
                                                                onClick={() => setDevice(item)}
                                                                className={`cursor-pointer px-4 py-2 text-sm text-[#373940] font-medium rounded-full border border-[#D0D5DD] ${device === item
                                                                    ? "bg-[#087BB3] text-white"
                                                                    : "bg-gray-100 text-gray-600"
                                                                    }`}
                                                            >
                                                                {item}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-sm text-[#373940] font-medium mb-2 block">
                                                        What is the computer name? *
                                                    </label>

                                                    <Field
                                                        name="computerName"
                                                        placeholder="Enter Computer Name"
                                                        className="w-full text-sm text-[#636E72] font-normal border border-[#D9DADF] rounded-lg px-4 py-2.5"
                                                    />

                                                    <ErrorMessage
                                                        name="computerName"
                                                        component="p"
                                                        className="text-red-500 text-xs mt-1"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm text-[#373940] font-medium mb-2 block">
                                                        Where is the computer located at? *
                                                    </label>
                                                    <Field
                                                        name="location"
                                                        placeholder="Enter Computer Location"
                                                        className="w-full text-sm text-[#636E72] font-normal border border-[#D9DADF] rounded-lg px-4 py-2"
                                                    />

                                                    <ErrorMessage
                                                        name="location"
                                                        component="p"
                                                        className="text-red-500 text-xs mt-1"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm text-[#373940] font-medium mb-2 block">
                                                        Please provide a detailed description of the issue.*
                                                    </label>
                                                    <Field
                                                        as="textarea"
                                                        rows={4}
                                                        name="description"
                                                        placeholder="Enter Ticket Details Here..."
                                                        className="w-full resize-none text-sm text-[#636E72] font-normal border border-[#D9DADF] rounded-lg px-4 py-2"
                                                    />

                                                    <ErrorMessage
                                                        name="description"
                                                        component="p"
                                                        className="text-red-500 text-xs mt-1"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-6">
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpen(false)}
                                                        className="cursor-pointer px-5 py-3 text-[#030303] text-base font-semibold border border-[#F3F3F5] rounded-lg"
                                                    >
                                                        Cancel
                                                    </button>

                                                    <button
                                                        type="submit"
                                                        className="cursor-pointer px-5 py-3 bg-[#087BB3] text-base font-semibold text-white rounded-lg"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>

                    </>
                )}
            </div>
        </section>
    );
}

