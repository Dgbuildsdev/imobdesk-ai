import { AppShell } from "@/components/layout/app-shell";

export default function Home() {
  return (
    <AppShell>

      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Bem-vindo ao ImobDesk AI
          </h1>

          <p className="mt-2 text-muted-foreground">
            Centro inteligente de gestão para despachantes imobiliários.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-3">

          <div
            className="
            rounded-2xl
            border
            border-border
            bg-card
            p-6
            "
          >
            <h3 className="font-semibold">
              Processos Ativos
            </h3>

            <p className="mt-4 text-3xl font-bold">
              24
            </p>
          </div>


          <div
            className="
            rounded-2xl
            border
            border-border
            bg-card
            p-6
            "
          >
            <h3 className="font-semibold">
              Clientes
            </h3>

            <p className="mt-4 text-3xl font-bold">
              186
            </p>
          </div>


          <div
            className="
            rounded-2xl
            border
            border-border
            bg-card
            p-6
            "
          >
            <h3 className="font-semibold">
              Documentos Pendentes
            </h3>

            <p className="mt-4 text-3xl font-bold">
              8
            </p>
          </div>

        </div>

      </div>

    </AppShell>
  );
}