import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    degree: 'Mestrado em Sistemas de Informação Geográfica e Ordenamento do Território',
    institution: 'Faculdade de Letras da Universidade do Porto',
    period: 'Setembro 2023 - Atual',
    location: 'Via Panorâmica Edgar Cardoso s/n, Porto, Portugal',
    website: 'https://www.up.pt/flup/pt/',
    status: 'Em Curso',
    logo: 'https://machadolh.github.io/luizmachadocurriculo/imagens/porto.png',
  },
  {
    degree: 'Licenciatura em Geografia com Minor em História',
    institution: 'Faculdade de Letras da Universidade do Porto',
    period: 'Setembro 2018 - Julho 2022',
    location: 'Via Panorâmica Edgar Cardoso s/n, Porto, Portugal',
    website: 'https://www.up.pt/flup/pt/',
    status: 'Concluído',
    logo: 'https://machadolh.github.io/luizmachadocurriculo/imagens/porto.png',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Formação Acadêmica</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <Badge
                        variant={item.status === 'Em Curso' ? 'default' : 'secondary'}
                        className="flex-shrink-0"
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <p className="text-lg font-medium text-primary mb-4">
                      {item.institution}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{item.location}</span>
                      </div>
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Website da instituição</span>
                      </a>
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
