export const profile = {
  name: "Katherin Pérez",
  role: "Junior Software Developer",
  location: "Ciudad Arce, El Salvador",
  email: "kgabrielapb@ieee.org",
  phone: "+503 64336069",
  summary: "Estudiante de Ingeniería Informática (fase final) con experiencia práctica en desarrollo web y móvil. Enfoque en prácticas seguras, resolución de problemas y aprendizaje continuo.",
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gabriela-pérez-a19634226" },
    { name: "GitHub", url: "https://github.com/emptyGabriela" }
  ],
  skills: {
    top: ["React","JavaScript","CSS","Tailwind","Kotlin","Node.js","C#","C++","SQL Server","MongoDB","Git"],
    soft: ["Comunicación efectiva","Trabajo en equipo","Adaptabilidad","Resolución de problemas","Aprendizaje rápido","Atención al detalle"],
    languages: [
      { name:"Español", level:"Nativo" },
      { name:"Inglés", level:"Profesional" },
      { name:"Francés", level:"Elemental" },
      { name:"Coreano", level:"Limitado" }
    ]
  },
  education: [
    { school: "Universidad Centroamericana José Simeón Cañas (UCA)", degree: "Ingeniería Informática", period: "Esperada 11/2026", location: "Antiguo Cuscatlán, El Salvador" }
  ],
  certifications: [
    { name: "ICT Academy - Huawei", detail: "Data Communication and Network", date: "06/2025" },
    { name: "INSAFORP", detail: "Introducción a UI/UX Design", date: "11/2023" }
  ],
  projects: [
    {
      name: "Noctua UCA — App Android para estudiantes",
      role: "Frontend (Kotlin)",
      period: "01/2024 - 07/2024",
      bullets: [
        "App nativa con Jetpack Compose y Retrofit.",
        "Módulos: perfil, malla académica, carnet QR, mapas y horarios.",
        "Interfaz intuitiva y adaptable; backend Express.js + MongoDB."
      ],
      stack: ["Kotlin","Jetpack Compose","Retrofit","Express.js","MongoDB"]
    },
    {
      name: "ORDINO — Plataforma web para gestión médica",
      role: "Full Stack (HTML, SCSS, JavaScript)",
      period: "07/2023 - 12/2023",
      bullets: [
        "Aplicación para clínicas y personal médico.",
        "Gestión segura y visualización de pacientes.",
        "Comunicación interna eficiente y UI responsive."
      ],
      stack: ["HTML","SCSS","JavaScript"]
    }
  ],
  experience: [
    {
      company: "UCA",
      title: "Course Instructor – Secure Development Environment",
      location: "Antiguo Cuscatlán",
      period: "08/2025 - Actual",
      bullets: [
        "Buenas prácticas de codificación segura y ciberseguridad.",
        "Uso de análisis estático y dinámico; gestión de accesos/contraseñas."
      ]
    },
    {
      company: "UCA",
      title: "Course Instructor – Database",
      location: "Antiguo Cuscatlán",
      period: "01/2025 - 06/2025",
      bullets: [
        "Ejemplos visuales y escenarios reales de bases de datos.",
        "Enfoque en aprendizaje interactivo."
      ]
    }
  ]
};
