// Microservicio para la gestión de instrumentos virtuales

export interface Instrumento {
  id: string
  nombre: string
  tipo: "piano" | "guitarra" | "bajo" | "otro"
  sonidos: {
    id: string
    nombre: string
    url: string
  }[]
}

export interface AcordeGuitarra {
  nombre: string
  tipo: "mayor" | "menor" | "7" | "m7" | "otro"
  posiciones: number[][] // [cuerda, traste]
}

// Simulación de base de datos
const instrumentosDB: Instrumento[] = [
  {
    id: "piano1",
    nombre: "Piano de Cola",
    tipo: "piano",
    sonidos: [
      { id: "p1", nombre: "C4", url: "/sonidos/piano/C4.mp3" },
      { id: "p2", nombre: "D4", url: "/sonidos/piano/D4.mp3" },
      // Más notas...
    ],
  },
  // Más instrumentos...
]

const acordesDB: AcordeGuitarra[] = [
  {
    nombre: "C",
    tipo: "mayor",
    posiciones: [
      [5, 3], // 3er traste, 5ta cuerda
      [4, 2], // 2do traste, 4ta cuerda
      [2, 1], // 1er traste, 2da cuerda
    ],
  },
  // Más acordes...
]

export const InstrumentosService = {
  // Obtener todos los instrumentos
  getInstrumentos: async (): Promise<Instrumento[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(instrumentosDB), 300)
    })
  },

  // Obtener instrumento por ID
  getInstrumentoPorId: async (id: string): Promise<Instrumento | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const instrumento = instrumentosDB.find((i) => i.id === id) || null
        resolve(instrumento)
      }, 200)
    })
  },

  // Obtener acordes de guitarra
  getAcordesGuitarra: async (): Promise<AcordeGuitarra[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(acordesDB), 200)
    })
  },

  // Obtener acorde específico
  getAcordePorNombre: async (nombre: string, tipo: string): Promise<AcordeGuitarra | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const acorde = acordesDB.find((a) => a.nombre === nombre && a.tipo === tipo) || null
        resolve(acorde)
      }, 150)
    })
  },

  // Simular reproducción de sonido
  reproducirSonido: async (url: string): Promise<boolean> => {
    console.log(`Reproduciendo sonido: ${url}`)
    return true
  },
}
