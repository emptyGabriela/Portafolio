"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react"

const education = {
  degree: "Ingeniería Informática",
  university: "Universidad Centroamericana \"José Simeón Cañas\" (UCA)",
  location: "Antiguo Cuscatlán, El Salvador",
  graduation: "Previsto: 11/2026",
  status: "En curso"
}

const certifications = [
  {
    title: "Data Communication and Network",
    issuer: "ICT Academy – Huawei",
    date: "06/2025",
    icon: Award,
    color: "text-red-400",
    bgColor: "bg-red-400/10"
  },
  {
    title: "Introducción a UI/UX Design",
    issuer: "INSAFORP",
    date: "11/2023",
    icon: Award,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10"
  }
]

const languages = [
  { name: "Español", level: "Nativo", flag: "🇪🇸", color: "text-green-400" },
  { name: "Inglés", level: "Profesional", flag: "🇬🇧", color: "text-blue-400" },
  { name: "Francés", level: "Elemental", flag: "🇫🇷", color: "text-purple-400" },
  { name: "Coreano", level: "Limitado", flag: "🇰🇷", color: "text-orange-400" }
]

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Educación</span> y Certificaciones
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mi formación académica y certificaciones profesionales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  Formación Académica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                      <GraduationCap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-gray-300 mb-2">{education.university}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{education.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{education.graduation}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-3 border-green-400/30 text-green-400">
                        {education.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400" />
                  Certificaciones
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Certificaciones profesionales obtenidas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg ${cert.bgColor} flex items-center justify-center`}>
                        <cert.icon className={`w-5 h-5 ${cert.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
                        <p className="text-xs text-cyan-400">{cert.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Idiomas
              </CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Competencias lingüísticas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                  >
                    <div className="text-3xl mb-2">{lang.flag}</div>
                    <h4 className="font-semibold text-white mb-1">{lang.name}</h4>
                    <p className={`text-sm ${lang.color}`}>{lang.level}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
