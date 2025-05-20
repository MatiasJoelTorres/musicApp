import Link from "next/link"
import { Music, BookOpen, PenTool, Piano, Video } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-zinc-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MusicaInteractiva</h1>
          <nav className="hidden md:flex gap-6">
            <Link href="/teoria" className="hover:text-zinc-300 transition-colors">
              Teoría Musical
            </Link>
            <Link href="/pizarra" className="hover:text-zinc-300 transition-colors">
              Pizarra Virtual
            </Link>
            <Link href="/instrumentos" className="hover:text-zinc-300 transition-colors">
              Instrumentos
            </Link>
            <Link href="/clases" className="hover:text-zinc-300 transition-colors">
              Clases Virtuales
            </Link>
          </nav>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-zinc-900">
            Iniciar Sesión
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Aprende música de forma interactiva</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Una plataforma completa para aprender, practicar y enseñar música con herramientas interactivas y clases
              virtuales.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-zinc-100 px-6 py-3 text-lg">Comenzar ahora</Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teoría Musical</h3>
                <p className="text-zinc-600 mb-4">
                  Aprende los fundamentos de la música con contenido interactivo y ejemplos prácticos.
                </p>
                <Link href="/teoria" className="text-purple-700 font-medium hover:underline mt-auto">
                  Explorar
                </Link>
              </div>

              <div className="bg-zinc-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-3 rounded-full mb-4">
                  <PenTool className="h-8 w-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pizarra Virtual</h3>
                <p className="text-zinc-600 mb-4">
                  Utiliza nuestra pizarra pentagramada con herramientas especializadas para notación musical.
                </p>
                <Link href="/pizarra" className="text-indigo-700 font-medium hover:underline mt-auto">
                  Probar ahora
                </Link>
              </div>

              <div className="bg-zinc-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Piano className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instrumentos Interactivos</h3>
                <p className="text-zinc-600 mb-4">
                  Practica con piano, guitarra y bajo virtuales con conexión MIDI y visualización de acordes.
                </p>
                <Link href="/instrumentos" className="text-blue-700 font-medium hover:underline mt-auto">
                  Tocar ahora
                </Link>
              </div>

              <div className="bg-zinc-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-pink-100 p-3 rounded-full mb-4">
                  <Video className="h-8 w-8 text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clases Virtuales</h3>
                <p className="text-zinc-600 mb-4">
                  Conecta con profesores y estudiantes mediante nuestro sistema integrado de videoconferencias.
                </p>
                <Link href="/clases" className="text-pink-700 font-medium hover:underline mt-auto">
                  Unirse a clase
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold flex items-center">
                <Music className="mr-2" /> MusicaInteractiva
              </h2>
              <p className="text-zinc-400 mt-2">© 2025 Todos los derechos reservados</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contacto" className="text-zinc-400 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/privacidad" className="text-zinc-400 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-zinc-400 hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
