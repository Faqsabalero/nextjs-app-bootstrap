"use client"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const horarios = [
    "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00"
  ]

  const handleReserva = () => {
    if (!date || !selectedTime) {
      alert("Por favor selecciona fecha y horario")
      return
    }
    // Aquí iría la lógica para guardar la reserva
    alert(`Turno reservado para el ${date.toLocaleDateString()} a las ${selectedTime}hs`)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Barra de Navegación */}
      <nav className="fixed top-0 w-full bg-white border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-black">Yamil</a>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-black hover:text-gray-600">Inicio</a>
              <a href="#turnos" className="text-black hover:text-gray-600">Turnos</a>
              <a href="#contacto" className="text-black hover:text-gray-600">Contacto</a>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="md:hidden" variant="outline">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#inicio" className="text-black hover:text-gray-600">Inicio</a>
                  <a href="#turnos" className="text-black hover:text-gray-600">Turnos</a>
                  <a href="#contacto" className="text-black hover:text-gray-600">Contacto</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Banner Principal */}
      <section id="inicio" className="pt-16">
        <div className="relative h-[90vh] bg-[url('https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex items-center justify-center">
            <div className="text-center space-y-8 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight">YAMIL</h1>
                <p className="text-xl md:text-3xl text-white font-light">Barbería de Estilo</p>
              </div>
              <div className="pt-4">
                <a 
                  href="#turnos" 
                  className="inline-block bg-white text-black px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Reservar Turno
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
          <p className="text-center text-gray-600 mb-12">Los mejores servicios de barbería para vos</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Corte Clásico</h3>
                <p className="text-gray-600">Corte tradicional con acabado profesional</p>
                <p className="font-semibold mt-4">$2000</p>
              </div>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Barba</h3>
                <p className="text-gray-600">Perfilado y mantenimiento de barba</p>
                <p className="font-semibold mt-4">$1500</p>
              </div>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Paquete Completo</h3>
                <p className="text-gray-600">Corte + barba + tratamiento</p>
                <p className="font-semibold mt-4">$3000</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Turnos */}
      <section id="turnos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Reservá tu Turno</h2>
          <p className="text-center text-gray-600 mb-12">Elegí el día y horario que más te convenga</p>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Horarios Disponibles</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {horarios.map((horario) => (
                      <Button
                        key={horario}
                        variant={selectedTime === horario ? "default" : "outline"}
                        onClick={() => setSelectedTime(horario)}
                      >
                        {horario}hs
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-6 mt-6 border-t pt-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        {date ? `Fecha seleccionada: ${date.toLocaleDateString()}` : 'Selecciona una fecha'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedTime ? `Horario seleccionado: ${selectedTime}hs` : 'Selecciona un horario'}
                      </p>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={handleReserva}
                      disabled={!date || !selectedTime}
                    >
                      {!date || !selectedTime ? 'Selecciona fecha y horario' : 'Confirmar Reserva'}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Contacto</h2>
          <p className="text-center text-gray-600 mb-12">¿Tenés alguna pregunta? Contactanos</p>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors group">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-gray-600">Av. Corrientes 1234, CABA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors group">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors group">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contacto@barberiayamil.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      contacto@barberiayamil.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
