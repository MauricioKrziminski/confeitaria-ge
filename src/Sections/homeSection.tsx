import { Link } from 'react-scroll'

export function HomeSection() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ADD8E6] to-[#FFC0CB] px-6 text-center lg:px-12">
      <h1 className="mb-4 text-4xl font-bold text-[#2B3A67] drop-shadow-lg md:text-5xl lg:text-6xl">
        Confeitaria da Ge
      </h1>

      <p className="mb-6 max-w-2xl text-lg font-medium text-[#3E497A] md:text-xl">
        Delícias feitas com amor para adoçar seus momentos especiais!
      </p>

      <Link
        to="representatives"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer rounded-full bg-[#7fa858] px-8 py-4 text-lg font-semibold text-[#2B3A67] shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[#FFC107]"
      >
        Faça seu pedido
      </Link>

      <div className="absolute bottom-10 flex w-full justify-center">
        <div className="mb-2 h-40 w-40 rounded-full bg-white shadow-lg"></div>
      </div>
    </div>
  )
}
