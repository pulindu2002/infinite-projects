import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div className="h-screen sticky top-0 left-0">
        {/* <div className="h-screen bg-slate-950 px-2 py-2 ">sidebar</div> */}
        {/* //? -------- Sidebar goes here ----------- */}
        <Sidebar />
      </div>
      <div className="bg-slate-900 h-[200vh]">Codes</div>
    </div>
  );
}
