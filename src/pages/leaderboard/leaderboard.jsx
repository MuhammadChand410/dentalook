import FilterHeader from "../../component/common/components";
import Province from "./province";

const data = [
    { province: "Ontario", total: 12, received: 8, assigned: 6, stuck: 6, completed: 6, days: 30 },
    { province: "Saskatchewan", total: 9, received: 6, assigned: 4, stuck: 2, completed: 7, days: 25 },
    { province: "Alberta", total: 15, received: 10, assigned: 8, stuck: 3, completed: 12, days: 20 },
    { province: "Manitoba", total: 7, received: 5, assigned: 3, stuck: 1, completed: 6, days: 18 },
    { province: "Quebec", total: 20, received: 14, assigned: 11, stuck: 5, completed: 15, days: 22 },
    { province: "BC", total: 11, received: 9, assigned: 6, stuck: 2, completed: 9, days: 21 },
    { province: "Nova Scotia", total: 8, received: 6, assigned: 4, stuck: 1, completed: 7, days: 19 },
];

const DROPDOWN_BUTTON = [
    { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] w-full grow" },
    { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 w-full grow" },
    { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] w-full grow" },
    { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] w-full grow" },
    { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 w-full grow" },
];
export default function Leaderboard() {
    return (
        <>
            <FilterHeader
                title="Leaderboard"
                subtitle=""
                dropdowns={DROPDOWN_BUTTON}
            />
            <div className="grid gap-8">
                <Province data={data} headding={`Province View`} description={`Tickets resolution performance by province`} />
                <Province data={data} headding={`Region Overview`} description={`Tickets submission and resolution status by region`} />
                <Province data={data} headding={`Clinics Overview`} description={`Tickets submission and resolution status by region`} />
            </div>
        </>
    )
}