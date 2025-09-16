import Section from "@/components/Section";
import SkillTag from "@/components/SkillTag";
import { profile } from "@/data/profile";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <header className="section pt-20">
        <div className="card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700/40 via-transparent to-brand-500/10 pointer-events-none" />
          <div className="relative">
            <p className="badge mb-4">{profile.role}</p>
            <h1 className="h1">{profile.name}</h1>
            <p className="p mt-4 max-w-3xl">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>
              <span>•</span>
              <span>{profile.phone}</span>
              <span>•</span>
              <span>{profile.location}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {profile.social.map((s) => (
                <a key={s.name} className="badge" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* SKILLS */}
      <Section id="skills" title="Habilidades técnicas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.skills.top.map((s) => (
            <div key={s} className="card p-4 flex items-center justify-between">
              <span className="font-medium">{s}</span>
              <SkillTag label="Top" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Blandas</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.soft.map((s) => (<span className="badge" key={s}>{s}</span>))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.languages.map((l) => (<span className="badge" key={l.name}>{l.name} — {l.level}</span>))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Proyectos">
        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((p) => (
            <article key={p.name} className="card p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="badge">{p.role}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{p.period}</p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-300">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => <span className="badge" key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experiencia" subtitle="Docencia y desarrollo">
        <div className="timeline">
          {profile.experience.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="card p-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-semibold">{e.title} — {e.company}</h3>
                  <span className="badge">{e.period}</span>
                </div>
                <p className="text-sm text-slate-400 mt-1">{e.location}</p>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-300">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION & CERTS */}
      <Section id="education" title="Educación y certificaciones">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Educación</h3>
            <ul className="mt-3 space-y-2">
              {profile.education.map((ed, i) => (
                <li key={i}>
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-slate-300">{ed.school}</p>
                  <p className="text-sm text-slate-400">{ed.period} • {ed.location}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Certificaciones</h3>
            <ul className="mt-3 space-y-2">
              {profile.certifications.map((c, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-slate-300">{c.detail}</p>
                  </div>
                  <span className="badge">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contacto">
        <div className="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-semibold">¿Hablamos?</p>
            <p className="text-slate-300">Estoy disponible para oportunidades de desarrollo web/móvil.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="badge" href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="badge">{profile.phone}</span>
            <span className="badge">{profile.location}</span>
            {profile.social.map((s) => (
              <a key={s.name} className="badge" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
            ))}
          </div>
        </div>
        <footer className="section pt-0">
          <p className="text-center text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}. Desplegado en Vercel.</p>
        </footer>
      </Section>
    </main>
  );
}
