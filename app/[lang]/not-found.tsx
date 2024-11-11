import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A19]">
      <div className="text-center bg-[#31511E] p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-[#F6FCDF]">
          404 - Página no encontrada
        </h2>
        <p className="mb-4 text-[#F6FCDF]">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href="/"
          className="text-[#859F3D] hover:text-[#F6FCDF] underline"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
} 