import { BookOpen, FileText, Video, Music } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeoriaMusicalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Teoría Musical</h1>

      <Tabs defaultValue="fundamentos" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="fundamentos">Fundamentos</TabsTrigger>
          <TabsTrigger value="armonia">Armonía</TabsTrigger>
          <TabsTrigger value="ritmo">Ritmo</TabsTrigger>
          <TabsTrigger value="composicion">Composición</TabsTrigger>
        </TabsList>

        <TabsContent value="fundamentos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Notación Musical</CardTitle>
                  <CardDescription>Aprende a leer y escribir música</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  Descubre cómo se representan las notas, figuras rítmicas, claves y otros elementos básicos de la
                  notación musical.
                </p>
                <button className="mt-4 text-purple-600 font-medium hover:underline">Ver lección</button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Music className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Escalas Musicales</CardTitle>
                  <CardDescription>Estructura y tipos de escalas</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  Explora las diferentes escalas musicales, sus estructuras y cómo se utilizan en la música occidental y
                  de otras culturas.
                </p>
                <button className="mt-4 text-purple-600 font-medium hover:underline">Ver lección</button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <FileText className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Intervalos</CardTitle>
                  <CardDescription>Distancias entre notas</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  Comprende qué son los intervalos musicales, cómo se clasifican y su importancia en la construcción
                  melódica y armónica.
                </p>
                <button className="mt-4 text-purple-600 font-medium hover:underline">Ver lección</button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Video className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Clases en Video</CardTitle>
                  <CardDescription>Aprende con nuestros expertos</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  Accede a nuestra biblioteca de videos explicativos sobre teoría musical básica con ejemplos prácticos
                  y ejercicios.
                </p>
                <button className="mt-4 text-purple-600 font-medium hover:underline">Ver videos</button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="armonia" className="mt-6">
          <div className="bg-zinc-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contenido de Armonía</h2>
            <p className="text-zinc-600 mb-4">
              Esta sección incluirá lecciones sobre acordes, progresiones armónicas, modulaciones y análisis armónico.
            </p>
            <p className="text-purple-600">Contenido en desarrollo. ¡Vuelve pronto!</p>
          </div>
        </TabsContent>

        <TabsContent value="ritmo" className="mt-6">
          <div className="bg-zinc-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contenido de Ritmo</h2>
            <p className="text-zinc-600 mb-4">
              Esta sección incluirá lecciones sobre figuras rítmicas, compases, polirritmias y técnicas de percusión.
            </p>
            <p className="text-purple-600">Contenido en desarrollo. ¡Vuelve pronto!</p>
          </div>
        </TabsContent>

        <TabsContent value="composicion" className="mt-6">
          <div className="bg-zinc-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contenido de Composición</h2>
            <p className="text-zinc-600 mb-4">
              Esta sección incluirá lecciones sobre formas musicales, técnicas de composición, orquestación y arreglos.
            </p>
            <p className="text-purple-600">Contenido en desarrollo. ¡Vuelve pronto!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
