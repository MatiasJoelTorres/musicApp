"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Eraser, Pen, Music, Save, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function PizarraPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [tool, setTool] = useState("pen")
  const [color, setColor] = useState("#000000")
  const [lineWidth, setLineWidth] = useState([3])
  const [showStaff, setShowStaff] = useState(true)

  // Inicializar el canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const ctx = canvas.getContext("2d")
      if (ctx) {
        setContext(ctx)
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth[0]

        // Dibujar el pentagrama inicial
        if (showStaff) {
          drawStaff(ctx, canvas.width, canvas.height)
        }
      }
    }

    // Manejar el redimensionamiento
    const handleResize = () => {
      if (canvas && context) {
        const tempCanvas = document.createElement("canvas")
        const tempCtx = tempCanvas.getContext("2d")
        if (tempCtx) {
          tempCanvas.width = canvas.width
          tempCanvas.height = canvas.height
          tempCtx.drawImage(canvas, 0, 0)

          canvas.width = canvas.offsetWidth
          canvas.height = canvas.offsetHeight
          context.lineCap = "round"
          context.lineJoin = "round"
          context.strokeStyle = color
          context.lineWidth = lineWidth[0]
          context.drawImage(tempCanvas, 0, 0)

          if (showStaff) {
            drawStaff(context, canvas.width, canvas.height)
          }
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [color, lineWidth, showStaff])

  // Función para dibujar el pentagrama
  const drawStaff = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save()
    ctx.strokeStyle = "#888888"
    ctx.lineWidth = 1

    const lineSpacing = 10
    const startY = 100

    // Dibujar 5 líneas para el pentagrama
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(50, startY + i * lineSpacing)
      ctx.lineTo(width - 50, startY + i * lineSpacing)
      ctx.stroke()
    }

    // Dibujar clave de sol (simplificada)
    ctx.beginPath()
    ctx.arc(70, startY + 2 * lineSpacing, 15, 0, Math.PI * 2)
    ctx.stroke()

    ctx.restore()
  }

  // Funciones de dibujo
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return

    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    context.beginPath()
    context.moveTo(x, y)
    setIsDrawing(true)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context || !canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (tool === "pen") {
      context.lineTo(x, y)
      context.stroke()
    } else if (tool === "eraser") {
      context.save()
      context.globalCompositeOperation = "destination-out"
      context.arc(x, y, lineWidth[0] * 2, 0, Math.PI * 2)
      context.fill()
      context.restore()
    } else if (tool === "note") {
      // Aquí se implementaría la lógica para dibujar notas musicales
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    if (context) {
      context.closePath()
    }
  }

  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      if (showStaff) {
        drawStaff(context, canvasRef.current.width, canvasRef.current.height)
      }
    }
  }

  const toggleStaff = () => {
    setShowStaff(!showStaff)
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      if (!showStaff) {
        drawStaff(context, canvasRef.current.width, canvasRef.current.height)
      }
    }
  }

  const saveCanvas = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = "pizarra-musical.png"
      link.href = canvasRef.current.toDataURL("image/png")
      link.click()
    }
  }

  useEffect(() => {
    if (context) {
      context.strokeStyle = color
      context.lineWidth = lineWidth[0]
    }
  }, [color, lineWidth, context])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pizarra Virtual</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-zinc-100 border-b flex flex-wrap gap-4 items-center">
          <Tabs defaultValue="herramientas" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="herramientas">Herramientas</TabsTrigger>
              <TabsTrigger value="figuras">Figuras Musicales</TabsTrigger>
            </TabsList>
            <TabsContent value="herramientas" className="flex flex-wrap gap-2 mt-2">
              <Button variant={tool === "pen" ? "default" : "outline"} size="icon" onClick={() => setTool("pen")}>
                <Pen className="h-4 w-4" />
              </Button>
              <Button variant={tool === "eraser" ? "default" : "outline"} size="icon" onClick={() => setTool("eraser")}>
                <Eraser className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={clearCanvas}>
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={saveCanvas}>
                <Save className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-2 ml-2 w-32">
                <Slider value={lineWidth} min={1} max={20} step={1} onValueChange={setLineWidth} />
              </div>
            </TabsContent>
            <TabsContent value="figuras" className="flex flex-wrap gap-2 mt-2">
              <Button variant="outline" size="sm">
                <Music className="h-4 w-4 mr-2" />
                Negra
              </Button>
              <Button variant="outline" size="sm">
                <Music className="h-4 w-4 mr-2" />
                Blanca
              </Button>
              <Button variant="outline" size="sm">
                <Music className="h-4 w-4 mr-2" />
                Redonda
              </Button>
              <Button variant="outline" size="sm">
                <Music className="h-4 w-4 mr-2" />
                Corchea
              </Button>
            </TabsContent>
          </Tabs>

          <div className="flex items-center gap-2 ml-auto">
            <Switch id="staff-toggle" checked={showStaff} onCheckedChange={toggleStaff} />
            <Label htmlFor="staff-toggle">Mostrar Pentagrama</Label>
          </div>
        </div>

        <div className="relative w-full h-[600px] bg-white">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full cursor-crosshair"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>
      </div>
    </div>
  )
}
