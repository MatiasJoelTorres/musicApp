// API Gateway para coordinar los microservicios

import { TeoriaService } from "./teoria-service"
import { InstrumentosService } from "./instrumentos-service"
import { ClasesService } from "./clases-service"
import { PizarraService } from "./pizarra-service"

// Interfaz para el usuario
export interface Usuario {
  id: string
  email: string
  nombre: string
  rol: "estudiante" | "profesor" | "admin"
}

// API Gateway
export const ApiGateway = {
  // Servicios de Teoría Musical
  teoria: {
    getContenidos: TeoriaService.getContenidos,
    getContenidoPorId: TeoriaService.getContenidoPorId,
    getContenidosPorCategoria: TeoriaService.getContenidosPorCategoria,
    buscarContenidos: TeoriaService.buscarContenidos
  },
  
  // Servicios de Instrumentos
  instrumentos: {
    getInstrumentos: InstrumentosService.getInstrumentos,
    getInstrumentoPorId: InstrumentosService.getInstrumentoPorId,
    getAcordesGuitarra: InstrumentosService.getAcordesGuitarra,
    getAcordePorNombre: InstrumentosService.getAcordePorNombre,
    reproducirSonido: InstrumentosService.reproducirSonido
  },
  
  // Servicios de Clases Virtuales
  clases: {
    getClases: ClasesService.getClases,
    getClasePorId: ClasesService.getClasePorId,
    crearClase: ClasesService.crearClase,
    unirseAClase: ClasesService.unirseAClase,
    generarEnlaceMeet: ClasesService.generarEnlaceMeet
  },
  
  // Servicios de Pizarra Virtual
  pizarra: {
    getDibujos: PizarraService.getDibujos,
    getDibujoPorId: PizarraService.getDibujoPorId,
    guardarDibujo: PizarraService.guardarDibujo,
    actualizarDibujo: PizarraService
\
## Arquitectura de Microservicios

He diseñado una arquitectura basada en microservicios para tu plataforma educativa musical interactiva. Esta estructura permite que cada componente funcione de manera independiente pero integrada.

```mermaid title="Arquitectura de Microservicios"
type = "diagram"
graph
TD
A["Cliente Web (Next.js)"]-- > B["API Gateway"]
B-- > C["Servicio de Teoría Musical"]
B-- > D["Servicio de Pizarra Virtual"]
B-- > E["Servicio de Instrumentos"]
B-- > F["Servicio de Clases Virtuales"]
F-- > G["Integración Google Meet"]
E-- > H["Conexión MIDI"]
D-- > I["Almacenamiento de Partituras"]
C-- > J["Base de Datos de Contenidos"]
