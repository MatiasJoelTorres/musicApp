"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Piano, Guitar, Music, Settings } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function InstrumentosPage() {
  const [midiConnected, setMidiConnected] = useState(false)
  const [selectedChord, setSelectedChord] = useState("C")

  // Función simulada para conectar MIDI
  const connectMidi = () => {
    // Aquí iría la lógica real de conexión MIDI
    setMidiConnected(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Instrumentos Interactivos</h1>

      <div className="mb-6 p-4 bg-zinc-50 rounded-lg border flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-zinc-500" />
          <span className="font-medium">Configuración MIDI</span>
        </div>
        <Button variant={midiConnected ? "outline" : "default"} onClick={connectMidi} className="ml-auto">
          {midiConnected ? "MIDI Conectado" : "Conectar MIDI"}
        </Button>
        <div className="flex items-center gap-2 ml-4">
          <Switch id="audio-toggle" defaultChecked />
          <Label htmlFor="audio-toggle">Audio</Label>
        </div>
      </div>

      <Tabs defaultValue="piano" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="piano">
            <Piano className="h-4 w-4 mr-2" />
            Piano
          </TabsTrigger>
          <TabsTrigger value="guitarra">
            <Guitar className="h-4 w-4 mr-2" />
            Guitarra
          </TabsTrigger>
          <TabsTrigger value="bajo">
            <Music className="h-4 w-4 mr-2" />
            Bajo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="piano" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Piano Virtual</CardTitle>
              <CardDescription>
                Toca el piano con tu ratón o conecta un teclado MIDI para una experiencia completa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <div className="flex h-48 relative">
                  {/* Teclas blancas */}
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={`white-${i}`}
                      className="flex-1 bg-white border border-zinc-300 rounded-b-md hover:bg-zinc-100 active:bg-zinc-200 cursor-pointer transition-colors"
                    />
                  ))}

                  {/* Teclas negras */}
                  <div className="absolute top-0 left-0 w-full flex">
                    {Array.from({ length: 13 }).map((_, i) => {
                      // No poner teclas negras después de E y B (posiciones 2 y 6)
                      if (i % 7 === 2 || i % 7 === 6) return null
                      const offset = i * (100 / 14) + 100 / 28
                      return (
                        <div
                          key={`black-${i}`}
                          className="absolute h-28 w-[calc(100%/28)] bg-zinc-800 rounded-b-md hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer transition-colors z-10"
                          style={{ left: `${offset}%` }}
                        />
                      )
                    })}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-white text-sm">
                    {midiConnected
                      ? "MIDI conectado: Puedes usar tu teclado"
                      : "Usa el ratón para tocar o conecta MIDI"}
                  </div>
                  <Select defaultValue="grand">
                    <SelectTrigger className="w-40 bg-zinc-800 text-white border-zinc-700">
                      <SelectValue placeholder="Sonido" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grand">Piano de Cola</SelectItem>
                      <SelectItem value="electric">Piano Eléctrico</SelectItem>
                      <SelectItem value="synth">Sintetizador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guitarra" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Guitarra Virtual</CardTitle>
              <CardDescription>Toca las cuerdas con el ratón o visualiza acordes</CardDescription>
              <div className="flex items-center gap-4 mt-2">
                <span>Seleccionar acorde:</span>
                <Select value={selectedChord} onValueChange={setSelectedChord}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Acorde" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="C">Do (C)</SelectItem>
                    <SelectItem value="D">Re (D)</SelectItem>
                    <SelectItem value="E">Mi (E)</SelectItem>
                    <SelectItem value="F">Fa (F)</SelectItem>
                    <SelectItem value="G">Sol (G)</SelectItem>
                    <SelectItem value="A">La (A)</SelectItem>
                    <SelectItem value="B">Si (B)</SelectItem>
                  </SelectContent>
                </Select>
                <span>Tipo:</span>
                <Select defaultValue="major">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="major">Mayor</SelectItem>
                    <SelectItem value="minor">Menor</SelectItem>
                    <SelectItem value="7">Séptima</SelectItem>
                    <SelectItem value="m7">Menor 7</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-100 p-4 rounded-lg">
                <div className="relative h-64">
                  {/* Mástil */}
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                    {/* Cuerdas */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`string-${i}`}
                        className="w-full h-[2px] bg-zinc-600 hover:bg-zinc-800 cursor-pointer transition-all"
                        style={{ height: `${2 + i * 0.5}px` }}
                      />
                    ))}

                    {/* Trastes */}
                    <div className="absolute top-0 left-0 w-full h-full flex">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={`fret-${i}`}
                          className="h-full border-r-2 border-zinc-400"
                          style={{ width: `${100 / 12}%`, left: `${(i * 100) / 12}%` }}
                        />
                      ))}
                    </div>

                    {/* Marcadores de posición (ejemplo para acorde C) */}
                    {selectedChord === "C" && (
                      <>
                        <div className="absolute top-[20%] left-[4%] w-6 h-6 bg-blue-500 rounded-full z-10" />
                        <div className="absolute top-[40%] left-[4%] w-6 h-6 bg-blue-500 rounded-full z-10" />
                        <div className="absolute top-[60%] left-[12%] w-6 h-6 bg-blue-500 rounded-full z-10" />
                      </>
                    )}
                    {selectedChord === "G" && (
                      <>
                        <div className="absolute top-[0%] left-[4%] w-6 h-6 bg-green-500 rounded-full z-10" />
                        <div className="absolute top-[80%] left-[4%] w-6 h-6 bg-green-500 rounded-full z-10" />
                        <div className="absolute top-[100%] left-[4%] w-6 h-6 bg-green-500 rounded-full z-10" />
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-4 text-center text-sm text-zinc-600">
                  Mantén presionado el ratón y arrastra sobre las cuerdas para tocar
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bajo" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Bajo Virtual</CardTitle>
              <CardDescription>Toca el bajo con el ratón o visualiza patrones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="relative h-48">
                  {/* Mástil */}
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                    {/* Cuerdas */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={`string-${i}`}
                        className="w-full bg-zinc-600 hover:bg-zinc-800 cursor-pointer transition-all"
                        style={{ height: `${3 + i * 1}px` }}
                      />
                    ))}

                    {/* Trastes */}
                    <div className="absolute top-0 left-0 w-full h-full flex">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={`fret-${i}`}
                          className="h-full border-r-2 border-zinc-400"
                          style={{ width: `${100 / 12}%`, left: `${(i * 100) / 12}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-zinc-600">
                    Mantén presionado el ratón y arrastra sobre las cuerdas para tocar
                  </div>
                  <Select defaultValue="finger">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Estilo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="finger">Finger</SelectItem>
                      <SelectItem value="pick">Pick</SelectItem>
                      <SelectItem value="slap">Slap</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
