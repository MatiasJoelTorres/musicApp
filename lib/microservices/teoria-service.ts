// Microservicio para la gestión de contenido de teoría musical

export interface ContenidoTeorico {
  id: string
  titulo: string
  categoria: string
  nivel: "basico" | "intermedio" | "avanzado"
  contenido: string
  recursos: {
    tipo: "video" | "audio" | "partitura" | "texto"
    url: string
    descripcion: string
  }[]
}

// Simulación de base de datos
const contenidosDB: ContenidoTeorico[] = [
  {
    id: "1",
    titulo: "Notación Musical Básica",
    categoria: "fundamentos",
    nivel: "basico",
    contenido: "Introducción a la notación musical, incluyendo notas, figuras y silencios.",
    recursos: [
      {
        tipo: "video",
        url: "/videos/notacion-basica.mp4",
        descripcion: "Video explicativo sobre notación musical",
      },
      {
        tipo: "partitura",
        url: "/partituras/ejemplos-notacion.pdf",
        descripcion: "Ejemplos de notación musical",
      },
    ],
  },
  // Más contenidos...
]

export const TeoriaService = {
  // Obtener todos los contenidos
  getContenidos: async (): Promise<ContenidoTeorico[]> => {
    // Simulación de llamada a API o base de datos
    return new Promise((resolve) => {
      setTimeout(() => resolve(contenidosDB), 300)
    })
  },

  // Obtener contenido por ID
  getContenidoPorId: async (id: string): Promise<ContenidoTeorico | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const contenido = contenidosDB.find((c) => c.id === id) || null
        resolve(contenido)
      }, 200)
    })
  },

  // Obtener contenidos por categoría
  getContenidosPorCategoria: async (categoria: string): Promise<ContenidoTeorico[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const contenidos = contenidosDB.filter((c) => c.categoria === categoria)
        resolve(contenidos)
      }, 200)
    })
  },

  // Buscar contenidos
  buscarContenidos: async (termino: string): Promise<ContenidoTeorico[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultados = contenidosDB.filter(
          (c) =>
            c.titulo.toLowerCase().includes(termino.toLowerCase()) ||
            c.contenido.toLowerCase().includes(termino.toLowerCase()),
        )
        resolve(resultados)
      }, 300)
    })
  },
}
