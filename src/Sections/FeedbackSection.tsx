/* eslint-disable react/no-unescaped-entities */
'use client'

const feedbacks = [
  {
    id: 1,
    name: 'Ana Souza',
    message:
      'Os doces da Confeitaria da Ge são incríveis! O brigadeiro gourmet é o melhor que já provei. Atendimento excelente e entrega rápida!',
    rating: '★★★★★',
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    message:
      'Adorei o bolo de morango! Muito saboroso e com uma apresentação impecável. Com certeza vou comprar novamente.',
    rating: '★★★★★',
  },
  {
    id: 3,
    name: 'Fernanda Lima',
    message:
      'Os cupcakes são maravilhosos! Macios, bem recheados e com um sabor único. Recomendo a todos!',
    rating: '★★★★★',
  },
  {
    id: 4,
    name: 'Lucas Oliveira',
    message:
      'A torta de limão é simplesmente perfeita. Equilíbrio ideal entre o doce e o azedinho do limão. Amei!',
    rating: '★★★★★',
  },
]

export function FeedbackSection() {
  return (
    <div className="relative w-full bg-[#fde2e4] pb-40">
      <h2 className="mb-8 text-center text-4xl font-bold text-[#2B3A67] drop-shadow-md">
        Feedback dos Clientes
      </h2>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="flex h-full flex-col justify-between rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
          >
            <p className="mb-4 text-gray-700">"{feedback.message}"</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[#3E497A]">
                {feedback.name}
              </h3>

              <p className="mt-1 text-[#8d3f60]">{feedback.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
