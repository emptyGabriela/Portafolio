"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Award, Users, Shield, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Noctua UCA (Android)",
    description: "App Android nativa con interfaz adaptable por tipo de usuario, almacenamiento seguro de credenciales, consumo de APIs, mapas y horarios.",
    icon: Smartphone,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Android", "MongoDB"],
    features: [
      "Interfaz adaptable por tipo de usuario",
      "Almacenamiento seguro de credenciales",
      "Consumo de APIs REST",
      "Integración de mapas",
      "Sistema de horarios"
    ]
  },
  {
    title: "ORDINO (Web)",
    description: "Plataforma web para gestión médica con UI responsiva para clínicas, módulos de pacientes, mensajería interna y reportes.",
    icon: Globe,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    technologies: ["HTML", "SCSS", "JavaScript", "Node.js", "Express"],
    features: [
      "UI responsiva para clínicas",
      "Módulos de gestión de pacientes",
      "Sistema de mensajería interna",
      "Generación de reportes",
      "Gestión segura de datos médicos"
    ]
  }
]

const achievements = [
  {
    title: "Vicepresidenta, Comunidad Estudiantil de Ingeniería Informática",
    period: "2025",
    icon: Users,
    color: "text-purple-400"
  },
  {
    title: "Vicepresidenta, IEEE Computer Society",
    period: "2025",
    icon: Award,
    color: "text-yellow-400"
  },
  {
    title: "Miembro, Club Estudiantil de Ciberseguridad",
    period: "2025",
    icon: Shield,
    color: "text-red-400"
  }
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mis <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proyectos destacados donde he aplicado mis habilidades técnicas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 ${project.borderColor} group`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${project.bgColor} flex items-center justify-center ${project.borderColor} border group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className={`w-6 h-6 ${project.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Tecnologías utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-cyan-400/30 text-cyan-400">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Características principales:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                        <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400" />
                  Logros y Comunidad
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Participación activa en organizaciones estudiantiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                    >
                      <achievement.icon className={`w-5 h-5 ${achievement.color} mt-0.5 flex-shrink-0`} />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-400">{achievement.period}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
