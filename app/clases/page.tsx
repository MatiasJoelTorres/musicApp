"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Video, Mic, MicOff, VideoOff, Share, MessageSquare } from "lucide-react"

export default function ClasesPage() {
  const [meetUrl, setMeetUrl] = useState("")
  const [isInMeeting, setIsInMeeting] = useState(false)
  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)

  const joinMeeting = () => {
    // En una implementación real, aquí se conectaría con la API de Google Meet
    setIsInMeeting(true)
  }

  const leaveMeeting = () => {
    setIsInMeeting(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Clases Virtuales</h1>

      {!isInMeeting ? (
        <Tabs defaultValue="join" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="join">Unirse a clase</TabsTrigger>
            <TabsTrigger value="schedule">Programar clase</TabsTrigger>
          </TabsList>

          <TabsContent value="join" className="mt-6">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Unirse a una clase</CardTitle>
                <CardDescription>Ingresa el código o enlace de la clase para unirte</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="meet-url">Enlace o código de Google Meet</Label>
                    <Input
                      id="meet-url"
                      placeholder="meet.google.com/xxx-xxxx-xxx"
                      value={meetUrl}
                      onChange={(e) => setMeetUrl(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="use-mic" className="rounded" defaultChecked />
                      <Label htmlFor="use-mic">Micrófono</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="use-camera" className="rounded" defaultChecked />
                      <Label htmlFor="use-camera">Cámara</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={joinMeeting} className="w-full" disabled={!meetUrl}>
                  Unirse ahora
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Programar una clase</CardTitle>
                <CardDescription>Configura los detalles para tu próxima clase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="class-title">Título de la clase</Label>
                    <Input id="class-title" placeholder="Ej: Teoría Musical - Acordes" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="class-date">Fecha</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                        <Input id="class-date" type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="class-time">Hora</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                        <Input id="class-time" type="time" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="class-participants">Participantes (emails)</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                      <Input id="class-participants" placeholder="Separados por comas" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="class-description">Descripción</Label>
                    <textarea
                      id="class-description"
                      rows={3}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Detalles sobre la clase..."
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Programar clase</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="p-4 bg-zinc-800 flex justify-between items-center">
            <div className="text-white font-medium">Clase en curso</div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-700"
                onClick={() => setMicEnabled(!micEnabled)}
              >
                {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-700"
                onClick={() => setVideoEnabled(!videoEnabled)}
              >
                {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-700">
                <Share className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-700">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="destructive" onClick={leaveMeeting}>
                Salir
              </Button>
            </div>
          </div>

          <div className="h-[600px] bg-zinc-950 flex items-center justify-center">
            <div className="text-center text-zinc-400">
              <Video className="h-16 w-16 mx-auto mb-4 opacity-30" />
              <p className="text-xl">Aquí se mostraría la interfaz de Google Meet</p>
              <p className="mt-2 text-sm max-w-md">
                En una implementación real, este espacio contendría un iframe con la sesión de Google Meet integrada
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
