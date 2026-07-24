export function Header(){

  return (
    <header
      className="
      h-16
      border-b
      border-border
      flex
      items-center
      justify-between
      px-6
      "
    >

      <div>
        <h2 className="font-medium">
          Command Center
        </h2>

        <p className="text-sm text-muted-foreground">
          Gestão imobiliária inteligente
        </p>
      </div>


      <div
        className="
        h-10
        w-10
        rounded-full
        bg-primary
        flex
        items-center
        justify-center
        text-primary-foreground
        "
      >
        D
      </div>

    </header>
  )
}