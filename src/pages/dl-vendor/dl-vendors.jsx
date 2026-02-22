import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FilterHeader from "../../component/common/components";
import { DentallChair } from "../../assets/images";
const CATEGORIES = [
    {
        id: 1,
        title: "CAD/CAM & Scanners / Lab Equipment",
        items: [
            { id: 1, subheading: 'CAD/CAM & Scanners / Lab Equipment', hedding: "Scanner A", span: "Digital", text: "Maple Dental Equipment", desc: "Mississauga, ON", price: "$1200", day: "5d", detail: 'View', },
            { id: 2, subheading: 'CAD/CAM & Scanners / Lab Equipment', hedding: "Scanner B", span: "Digital", text: "Maple Dental Equipment", desc: "Mississauga, ON", price: "$1500", day: "7d", detail: 'View', },
            { id: 3, subheading: 'CAD/CAM & Scanners / Lab Equipment', hedding: "Scanner C", span: "Digital", text: "Maple Dental Equipment", desc: "Mississauga, ON", price: "$1800", day: "8d", detail: 'View', },
        ],
    },
    {
        id: 2,
        title: "Dental Chairs & Stools",
        items: [
            { id: 1, subheading: 'Dental Chairs & Stools', hedding: "Chair A", span: "Comfort", text: "Basic", desc: "Manual", price: "$900", day: "4d", detail: 'View', },
            { id: 2, subheading: 'Dental Chairs & Stools', hedding: "Chair B", span: "Premium", text: "Auto", desc: "Electric", price: "$1400", day: "6d", detail: 'View', },
            { id: 3, subheading: 'Dental Chairs & Stools', hedding: "Chair C", span: "Luxury", text: "Smart", desc: "AI assist", price: "$2000", day: "8d", detail: 'View', },
            { id: 4, subheading: 'Dental Chairs & Stools', hedding: "Chair D", span: "Standard", text: "Plus", desc: "Durable", price: "$1100", day: "5d", detail: 'View' },
        ],
    },
    {
        id: 3,
        title: "Handpieces & Motors",
        items: [
            { id: 1, subheading: 'Handpieces & Motors', hedding: "X-Ray A", span: "Portable", text: "Mini", desc: "Low rad", price: "$700", day: "3d", detail: 'View', },
            { id: 2, subheading: 'Handpieces & Motors', hedding: "X-Ray B", span: "Digital", text: "Pro", desc: "HD", price: "$1300", day: "5d", detail: 'View', },
        ],
    },
    {
        id: 4,
        title: "Imaging / X-Ray",
        items: [
            { id: 1, subheading: 'Imaging / X-Ray', hedding: "Unit A", span: "Steam", text: "Auto", desc: "Fast", price: "$600", day: "2d", detail: 'View', },
            { id: 2, subheading: 'Imaging / X-Ray', hedding: "Unit B", span: "Dry", text: "Manual", desc: "Compact", price: "$500", day: "3d", detail: 'View', },
            { id: 3, subheading: 'Imaging / X-Ray', hedding: "Unit C", span: "Hybrid", text: "Smart", desc: "Energy save", price: "$800", day: "4d", detail: 'View' },
        ],
    },
    {
        id: 5,
        title: "IT Hardware",
        items: [
            { id: 1, subheading: 'IT Hardware', hedding: "Accessory A", span: "Tool", text: "Basic", desc: "Steel", price: "$120", day: "2d", detail: 'View', },
            { id: 2, subheading: 'IT Hardware', hedding: "Accessory B", span: "Tool", text: "Pro", desc: "Alloy", price: "$180", day: "3d", detail: 'View', },
            { id: 3, subheading: 'IT Hardware', hedding: "Accessory C", span: "Tool", text: "Ultra", desc: "Titanium", price: "$250", day: "4d", detail: 'View', },
            { id: 4, subheading: 'IT Hardware', hedding: "Accessory D", span: "Tool", text: "Max", desc: "Carbon", price: "$300", day: "5d", detail: 'View' },
            { id: 5, subheading: 'IT Hardware', hedding: "Accessory E", span: "Tool", text: "Lite", desc: "Aluminum", price: "$90", day: "1d", detail: 'View' },
        ],
    },
];
const SPAN_INPUT = [
    { id: 1, heading: 'Item Name', value: 'EVOGUE Q33 Dental Chair', },
    { id: 2, heading: 'Vendor', value: 'Maple Dental Equipment', },
    { id: 3, heading: 'Purchase Price', value: '$1,590.00', },
    { id: 4, heading: 'Estimated Delivery Time', value: '5 Days', },
]

const TABLE_HEADING = [
    { id: 1, text: "Category", width: "22%" },
    { id: 2, text: "Item", width: "22%" },
    { id: 3, text: "Vendor", width: "18%" },
    { id: 4, text: "Purchase Price", width: "14%" },
    { id: 5, text: "Est. Delivery Time", width: "16%" },
    { id: 6, text: "Item Details", width: "16%" },
];

const DROPDOWN_BUTTON = [
    { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] w-full grow" },
    { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 w-full grow" },
    { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] w-full grow" },
    { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] w-full grow" },
    { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 w-full grow" },
];
export default function Vendors() {
    const [openId, setOpenId] = useState(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const images = [DentallChair, DentallChair, DentallChair, DentallChair];
    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const [showItemDetails, setShowItemDetails] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    return (
        <div>
            <FilterHeader
                title="Dentalook Catalog of Vendors"
                dropdowns={DROPDOWN_BUTTON}
            />
            <div className="bg-white rounded-2xl border border-[#E5E7EE]">
                <div className="py-4 px-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-semibold text-[#333] mb-2">Parts pricing matrix</h2>
                        <p className="text-xs font-normal text-[#8B909C] max-w-80">Each row is an item offer from a vendor. “Best” marks lowest price for that item.</p>
                    </div>
                    <span className="text-[10px] font-medium text-[#4A5554] px-4 py-1 border border-[#E5E7EE] rounded-2xl">Items: 13</span>
                </div>

                <div className="px-8 flex gap-6 bg-[#F9FAFB] sticky top-33 z-20 border-b border-[#E0E0E0]">
                    {TABLE_HEADING.map((heading) => (
                        <h4
                            key={heading.id}
                            style={{ width: heading.width }}
                            className="py-3.5 text-xs font-medium text-[#63716E]"
                        >
                            {heading.text}
                        </h4>
                    ))}
                </div>

                {CATEGORIES.map((cat, index) => (
                    <div key={cat.id} className="">
                        <button
                            key={cat.id}
                            onClick={() =>
                                setOpenId(openId === cat.id ? null : cat.id)
                            }
                            className={`w-full hover:bg-gray-50 text-start flex px-8 py-4 gap-2 cursor-pointer
                                        text-xs font-medium text-[#131313]
                                        ${index === CATEGORIES.length - 1 ? "border-b-0" : "border-b border-[#E0E0E0]"}`}
                        >
                            <span className="text-xs font-medium text-[#131313]">
                                {openId === cat.id ? "−" : "+"}
                            </span>
                            {cat.title}
                        </button>

                        {openId === cat.id && (
                            <div>
                                {cat.items.map((item) => (
                                    <div key={item.id}
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setShowItemDetails(true);
                                        }}
                                        className="px-8 py-4 flex gap-6 items-center
                                                 border-b border-[#E0E0E0] cursor-pointer hover:bg-gray-50"
                                    >
                                        <div className="w-[22%] text-xs text-gray-400">
                                            {item.subheading}
                                        </div>

                                        <div className="w-[22%] flex gap-2 items-end">
                                            <img src={DentallChair} width={28} />
                                            <div>
                                                <h4 className="text-xs font-medium">{item.hedding}</h4>
                                                <p className="text-[10px] text-gray-400">{item.span}</p>
                                            </div>
                                        </div>

                                        <div className="w-[18%]">
                                            <h4 className="text-xs font-medium">{item.text}</h4>
                                            <p className="text-[10px] text-gray-400">{item.desc}</p>
                                        </div>

                                        <div className="w-[14%] text-sm font-medium">
                                            {item.price}
                                        </div>

                                        <div className="w-[16%] text-sm font-medium">
                                            {item.day}
                                        </div>

                                        <div className="w-[16%]">
                                            <div className="flex items-center gap-2 px-2 w-fit bg-[#E9EFFC] border border-[#E5E7EE] rounded-2xl">
                                                <span className="text-[10px] font-medium text-[#4A5554]">
                                                    {item.detail}
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M20 12.0017C20 14.0778 16.0028 18.2218 11.9892 18.2218C7.97558 18.2218 4 14.0778 4 12.0017C4 9.92549 7.99349 5.77744 11.9981 5.77734C16.0028 5.77725 20 9.92549 20 12.0017Z" stroke="#4B5C6C" stroke-width="1.5" />
                                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#4B5C6C" stroke-width="1.5" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {showItemDetails && selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm">
                        <div className="bg-white w-full max-w-125  rounded-2xl shadow-xl relative ">
                            <div className="flex sticky top-0 z-20 p-6 bg-white items-center rounded-t-2xl justify-between gap-2 pb-3 border-b border-[#E0E0E0]">
                                <h2 className="text-lg text-[#0E121B] font-semibold">Item Details</h2>
                                <button
                                    onClick={() => {
                                        setShowItemDetails(false);
                                        setSelectedItem(null);
                                    }}
                                    className="flex items-center gap-2 text-[10px] font-medium text-[#4A5554]"
                                >
                                    Close Item Details
                                    <span className="cursor-pointer text-base text-[#4B5C6C]">✕</span>
                                </button>
                            </div>
                            <div className="p-6 overflow-y-auto max-h-[80vh]">
                                <div className="border border-[#F2F2F2] shadow-xs rounded-2xl mb-4 md:mb-8">
                                    <div className="relative mt-5 h-60 flex items-center justify-center">
                                        <ChevronLeft
                                            className="absolute left-4 text-black cursor-pointer rounded-full hover:bg-gray-50"
                                            onClick={handlePrev}
                                        />
                                        <img
                                            src={images[activeIndex]}
                                            className="h-45 object-contain"
                                        />
                                        <ChevronRight
                                            className="absolute right-4 text-black rounded-full hover:bg-gray-50 cursor-pointer"
                                            onClick={handleNext}
                                        />
                                    </div>

                                    <div className="flex justify-center gap-4 mb-4 mt-4">
                                        {images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                onClick={() => setActiveIndex(i)}
                                                className={`h-12 w-12 cursor-pointer transition-all
                                                       ${activeIndex === i ? "opacity-100" : "opacity-[0.35]"}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {SPAN_INPUT.map(card => (
                                        <div key={card.id} className="flex flex-col">
                                            <p className="mb-1 text-sm font-medium text-[#0E121B]">
                                                {card.heading}
                                            </p>
                                            <span className="p-2.5 border border-[#F2F2F2] text-[#0E121B] text-xs rounded-[10px]">
                                                {card.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button type="submit" className="mt-6 cursor-pointer w-full bg-[#087BB3] text-white py-3 rounded-xl">
                                    Add Item
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}