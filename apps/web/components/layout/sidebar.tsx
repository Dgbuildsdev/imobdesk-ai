import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  ClipboardList,
  Wallet,
  CalendarDays,
  Settings,
} from "lucide-react";


const menu = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Clientes",
    icon: Users,
  },
  {
    label: "Imóveis",
    icon: Building2,
  },
  {
    label: "Processos",
    icon: ClipboardList,
  },
  {
    label: "Documentos",
    icon: FileText,
  },
  {
    label: "Financeiro",
    icon: Wallet,
  },
  {
    label: "Agenda",
    icon: CalendarDays,
  },
];


export function Sidebar() {
  return (
    <aside
      className="
      w-72
      border-r
      border-border
      bg-sidebar
      p-6
      "
    >

      <div className="mb-10">

        <h1 className="text-xl font-semibold">
          IMOBDESK AI
        </h1>

        <p className="text-sm text-muted-foreground">
          Despachante Intelligence
        </p>

      </div>


      <nav className="space-y-2">

        {menu.map((item)=>{

          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              transition
              hover:bg-sidebar-accent
              "
            >

              <Icon size={18}/>

              {item.label}

            </button>
          )

        })}

      </nav>


    </aside>
  );
}