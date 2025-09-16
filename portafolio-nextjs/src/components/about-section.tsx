"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Globe, Shield, GitBranch } from "lucide-react"

const skills = [
  { name: "Kotlin • Android", icon: Smartphone, color: "bg-green-500" },
  { name: "React • JavaScript", icon: Code, color: "bg-blue-500" },
  { name: "HTML • CSS/SCSS • Tailwind", icon: Globe, color: "bg-orange-500" },
  { name: "Node.js • Express", icon: Code, color: "bg-green-600" },
  { name: "MongoDB • SQL Server", icon: Database, color: "bg-yellow-500" },
  { name: "Git • GitHub", icon: GitBranch, color: "bg-gray-500" },
]

const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Adaptabilidad",
  "Resolución de problemas",
  "Aprendizaje rápido",
  "Atención al detalle",
]

export function AboutSection() {
  return (
    <section id="resumen" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sobre <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desarrolladora apasionada con enfoque en crear soluciones innovadoras y seguras
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  Resumen Profesional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Soy estudiante de Ingeniería Informática en etapa final, con experiencia impartiendo cursos de{" "}
                  <span className="text-cyan-400 font-semibold">Desarrollo Seguro</span> y{" "}
                  <span className="text-cyan-400 font-semibold">Bases de Datos</span> en la UCA. 
                  He desarrollado una app Android nativa con <span className="text-cyan-400 font-semibold">Jetpack Compose</span> y{" "}
                  <span className="text-cyan-400 font-semibold">Retrofit</span>, e interfaces web con{" "}
                  <span className="text-cyan-400 font-semibold">HTML/SCSS/JavaScript</span>. 
                  Me caracterizo por la comunicación efectiva, el trabajo en equipo y el aprendizaje continuo.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Code className="w-6 h-6 text-cyan-400" />
                  Stack Principal
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Tecnologías que domino y utilizo regularmente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg ${skill.color} flex items-center justify-center`}>
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Habilidades Blandas
              </CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Competencias que me ayudan a trabajar efectivamente en equipo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-gray-300 border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-colors">
                      {skill}
                    </Badge>
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
