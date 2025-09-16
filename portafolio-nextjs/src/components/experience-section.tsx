"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Shield, Code, Database, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Course Instructor — Desarrollo Seguro",
    company: "Universidad Centroamericana \"José Simeón Cañas\"",
    location: "Antiguo Cuscatlán",
    period: "08/2025 – Actualidad",
    icon: Shield,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
    description: "Formación en prácticas de ciberseguridad y secure coding en entornos web y móviles.",
    highlights: [
      "Formación en prácticas de ciberseguridad y secure coding en entornos web y móviles",
      "Diseño de ejercicios prácticos con escenarios de amenazas reales y uso de análisis estático/dinámico",
      "Buenas prácticas de gestión de contraseñas, cifrado y control de acceso en el ciclo de vida de software"
    ]
  },
  {
    title: "Course Instructor — Bases de Datos",
    company: "Universidad Centroamericana \"José Simeón Cañas\"",
    location: "Antiguo Cuscatlán",
    period: "01/2025 – 06/2025",
    icon: Database,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    description: "Uso de ejemplos visuales y casos reales para mejorar la comprensión de modelado y SQL.",
    highlights: [
      "Uso de ejemplos visuales y casos reales para mejorar la comprensión de modelado y SQL",
      "Lecciones interactivas para distintos estilos de aprendizaje y evaluación continua"
    ]
  },
  {
    title: "Frontend Developer — Noctua UCA",
    company: "Universidad Centroamericana \"José Simeón Cañas\"",
    location: "Antiguo Cuscatlán",
    period: "01/2024 – 07/2024",
    icon: Code,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
    description: "App Android nativa con Jetpack Compose + Retrofit, módulos de perfil, malla, QR, mapas y horarios.",
    highlights: [
      "App Android nativa con Jetpack Compose + Retrofit, módulos de perfil, malla, QR, mapas y horarios",
      "Integración con backend Express.js + MongoDB"
    ]
  },
  {
    title: "Full Stack Web Developer — ORDINO",
    company: "Universidad Centroamericana \"José Simeón Cañas\"",
    location: "Antiguo Cuscatlán",
    period: "07/2023 – 12/2023",
    icon: Code,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
    description: "Plataforma web para gestión médica con HTML, SCSS y JavaScript.",
    highlights: [
      "Plataforma web para gestión médica con HTML, SCSS y JavaScript",
      "Gestión y visualización segura de datos de pacientes, y comunicación interna eficiente"
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mi <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experiencia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un recorrido por mi trayectoria profesional y proyectos destacados
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 ${exp.borderColor}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${exp.bgColor} flex items-center justify-center ${exp.borderColor} border`}>
                        <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white mb-2">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <CardDescription className="text-gray-300">
                          {exp.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full ${exp.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
