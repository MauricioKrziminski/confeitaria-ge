/* eslint-disable react/no-unescaped-entities */
export function AboutSection() {
  return (
    <div className="relative w-full bg-[#fde2e4] py-16">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center lg:flex-row lg:px-16">
        <div className="mb-8 max-w-2xl lg:mb-0 lg:text-left">
          <h2 className="mb-4 text-4xl font-bold text-[#2B3A67] drop-shadow-md">
            Feito com carinho, pensado para você!
          </h2>
          <p className="text-lg text-[#3E497A]">
            Na <strong>Confeitaria da Ge</strong>, cada doce é preparado com
            amor e dedicação. Usamos ingredientes de qualidade para garantir um
            sabor inesquecível e proporcionar momentos especiais para você e sua
            família. Do clássico brigadeiro a bolos personalizados, cada detalhe
            é pensado para encantar!
          </p>
        </div>

        <div className="flex items-center justify-center lg:ml-20">
          <div className="h-64 w-64 rounded-lg bg-white shadow-lg"></div>
        </div>
      </div>
    </div>
  )
}
