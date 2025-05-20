// Microservicio para la gestión de la pizarra virtual

export interface DibujoGuardado {
  id: string
  nombre: string
  fechaCreacion: string
  usuario: string
  contenido: string // Datos del canvas en formato base64
  tieneStaff: boolean
}

// Simulación de base de datos
const dibujosDB: DibujoGuardado[] = [
  {
    id: "dibujo1",
    nombre: "Escala de Do Mayor",
    fechaCreacion: "2025-05-15T14:30:00Z",
    usuario: "profesor@ejemplo.com",
    contenido: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...", // Truncado para brevedad
    tieneStaff: true,
  },
  // Más dibujos...
]

export const PizarraService = {
  // Obtener todos los dibujos guardados
  getDibujos: async (usuario: string): Promise<DibujoGuardado[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const dibujos = dibujosDB.filter((d) => d.usuario === usuario)
        resolve(dibujos)
      }, 300)
    })
  },

  // Obtener dibujo por ID
  getDibujoPorId: async (id: string): Promise<DibujoGuardado | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const dibujo = dibujosDB.find((d) => d.id === id) || null
        resolve(dibujo)
      }, 200)
    })
  },

  // Guardar un nuevo dibujo
  guardarDibujo: async (dibujo: Omit<DibujoGuardado, "id" | "fechaCreacion">): Promise<DibujoGuardado> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nuevoDibujo: DibujoGuardado = {
          ...dibujo,
          id: `dibujo${dibujosDB.length + 1}`,
          fechaCreacion: new Date().toISOString(),
        }
        dibujosDB.push(nuevoDibujo)
        resolve(nuevoDibujo)
      }, 400)
    })
  },

  // Actualizar un dibujo existente
  actualizarDibujo: async (id: string, contenido: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = dibujosDB.findIndex((d) => d.id === id)
        if (index !== -1) {
          dibujosDB[index].contenido = contenido
          resolve(true)
        } else {
          resolve(false)
        }
      }, 300)
    })
  },

  // Eliminar un dibujo
  eliminarDibujo: async (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = dibujosDB.findIndex((d) => d.id === id)
        if (index !== -1) {
          dibujosDB.splice(index, 1)
          resolve(true)
        } else {
          resolve(false)
        }
      }, 300)
    })
  },
}
