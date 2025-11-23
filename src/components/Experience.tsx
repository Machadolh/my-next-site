import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Bolseiro de Investigação',
    company: 'Faculdade de Letras da Universidade do Porto',
    period: 'Setembro 2023 - Atual',
    location: 'Porto, Portugal',
    description: 'Desenvolvimento de projetos de investigação em Sistemas de Informação Geográfica e análise espacial.',
    responsibilities: [
      'Análise e processamento de dados geoespaciais',
      'Desenvolvimento de mapas e visualizações cartográficas',
      'Apoio em projetos de ordenamento do território',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experiência Profissional</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-lg font-medium text-primary mb-4">{item.company}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div className="space-y-2">
                      <p className="font-medium text-foreground">Responsabilidades:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
