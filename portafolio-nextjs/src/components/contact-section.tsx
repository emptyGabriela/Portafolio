"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kgabrielapb@ieee.org",
      href: "mailto:kgabrielapb@ieee.org",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+503 6433‑6069",
      href: "tel:+50364336069",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad Arce, La Libertad, El Salvador",
      href: "#",
      color: "text-red-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "emptyGabriela",
      href: "https://github.com/emptyGabriela",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Gabriela Pérez",
      href: "https://www.linkedin.com/in/gabriela-pérez-a19634226",
      color: "text-blue-500"
    }
  ]

  const availability = {
    status: "Disponible",
    roles: ["Junior Developer", "Android Developer", "Web Developer", "QA Tester"],
    modality: "Híbrida o Remota",
    lastUpdate: new Date().toLocaleDateString('es-SV', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  return (
    <section id="contacto" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Deseas colaborar o tienes una oportunidad laboral? ¡Escríbeme!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  Información de Contacto
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Múltiples formas de ponerte en contacto conmigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 group"
                    >
                      <contact.icon className={`w-5 h-5 ${contact.color} group-hover:scale-110 transition-transform`} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </Button>
                    <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar
                    </Button>
                    <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar CV
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  Disponibilidad
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Información sobre oportunidades laborales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Status */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div>
                      <p className="text-sm text-gray-400">Estado</p>
                      <p className="text-white font-semibold">{availability.status}</p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div>
                    <p className="text-sm text-gray-400 mb-3">Roles de interés:</p>
                    <div className="flex flex-wrap gap-2">
                      {availability.roles.map((role, index) => (
                        <Badge key={role} variant="outline" className="border-cyan-400/30 text-cyan-400">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Modality */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Modalidad</p>
                      <p className="text-white font-semibold">{availability.modality}</p>
                    </div>
                  </div>

                  {/* Last Update */}
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-xs text-gray-500">
                      Última actualización: {availability.lastUpdate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-gray-300 mb-6">
                Estoy siempre interesada en nuevas oportunidades y proyectos desafiantes. 
                ¡No dudes en contactarme!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Iniciar Conversación
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                  <Github className="w-5 h-5 mr-2" />
                  Ver Proyectos
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
