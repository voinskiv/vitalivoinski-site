export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="max-w-2xl w-full text-left">
        <h1 className="text-3xl font-semibold">Vitali Voinski</h1>
        <p className="mt-2 text-xl font-normal">
          Operations Consultant — Industry & Logistics
        </p>

        <p className="mt-12">
        I help mid-sized companies stabilize operations, strengthen workforce performance, and achieve measurable efficiency gains. Drawing on hands-on experience in industrial and logistics sites, combined with 15+ years in IT and automation, I deliver pragmatic solutions that cut friction and unlock resilience.
        </p>

        <p className="mt-8">
          Recent projects include stabilizing multi-shift teams in a Baden-Württemberg foundry ({">"}95% reliability, reduced downtime), securing KPI-beating output during seasonal peaks at Berlin-Brandenburg logistics hubs (+10% over client targets), and redesigning workflows for SMBs across Europe to lower recurring costs and enable scalable growth.
        </p>

        <p className="mt-8">
          Engagements are sharp and time-scoped (6–12 weeks). Each follows a simple arc: diagnose current operations, stabilize workforce performance, and accelerate with targeted automation where it adds the most leverage. Projects typically yield a 15–25% uplift in efficiency and profitability within months.
        </p>

        <p className="mt-8">
          If your focus is leaner operations, stronger teams, and scalable performance, let’s connect.
        </p>
        <p className="mt-8">
          <a 
            href="mailto:vitali@vitalivoinski.com" 
            className="text-blue-600 hover:underline"
          >
            vitali@vitalivoinski.com
          </a> 
          {" | "} 
          <a 
            href="https://www.linkedin.com/in/voinskiv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>  
    </main>
  );
}
