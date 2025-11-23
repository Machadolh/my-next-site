import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Map, Database, Code, Globe, Languages, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    icon: Map,
    title: 'SIG e Cartografia',
    skills: ['ArcGIS', 'QGIS', 'Google Earth Engine', 'Análise Espacial', 'Geoprocessamento'],
  },
  {
    icon: Database,
    title: 'Dados e Análise',
    skills: ['SQL', 'Python', 'R', 'Análise de Dados Geoespaciais', 'Modelação Territorial'],
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    skills: ['JavaScript', 'HTML/CSS', 'Leaflet', 'Mapbox', 'WebGIS'],
  },
  {
    icon: Globe,
    title: 'Ordenamento do Território',
    skills: ['Planeamento Urbano', 'Análise Territorial', 'Estudos de Impacto', 'Cartografia Temática'],
  },
  {
    icon: Languages,
    title: 'Idiomas',
    skills: ['Português (Nativo)', 'Inglês (Avançado)', 'Espanhol (Intermediário)'],
  },
  {
    icon: BookOpen,
    title: 'Competências Transversais',
    skills: ['Trabalho em Equipa', 'Pensamento Analítico', 'Comunicação', 'Resolução de Problemas', 'Gestão de Projetos'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Competências</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
