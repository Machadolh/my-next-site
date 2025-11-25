import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Globe, GraduationCap, Target } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Experiência Internacional',
      description: 'Brasileiro a viver e estudar em Portugal desde 2017',
    },
    {
      icon: GraduationCap,
      title: 'Formação Sólida',
      description: 'Mestrado em SIG e Licenciatura em Geografia',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Determinado e resiliente na busca por objetivos',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Perfil Profissional</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 md:p-10 mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Sou brasileiro, determinado a alcançar o meu objetivo em ser o primeiro mestre da família, 
                decidi em 2017 emigrar para Portugal, após conseguir uma vaga em uma universidade portuguesa, 
                utilizando a nota do Exame Nacional do Ensino Médio Brasileiro. Atualmente sou{' '}
                <span className="text-foreground font-semibold">Geógrafo</span>, e estou a cursar o{' '}
                <span className="text-foreground font-semibold">
                  Mestrado em Sistemas de Informação Geográfica e Ordenamento de Território
                </span>{' '}
                na Faculdade de Letras da Universidade do Porto.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Levo comigo sempre o gosto de aprender mais e colocar em prática tudo que já aprendi. 
                Gosto de dar explicações a amigos e conhecidos sobre assuntos que domino e estou sempre 
                pronto a ajudar o próximo, nunca desisto dos meus objetivos e sigo sempre resiliente.
              </p>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
