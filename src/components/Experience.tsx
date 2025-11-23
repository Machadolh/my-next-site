import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react';

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
    logo: 'https://machadolh.github.io/luizmachadocurriculo/imagens/porto.png',
    website: 'https://www.up.pt/flup/pt/',
  },
  {
    title: 'Project Designer Engineer',
    company: 'BYON Solutions',
    period: 'Janeiro 2023 - Julho 2024',
    location: 'Porto, Portugal',
    description: 'Projetista responsável pela criação e georreferenciação de mapas; produção e manutenção de projetos de redes de infraestruturas de telecomunicações para diversos países da Europa, operados com auxílio de software de Sistema de Informação Geográfica, QGIS; além de analisar e atualizar bases de dados no Excel; elaboração de relatórios e apresentações com o Word e PowerPoint; gerenciamento e acompanhamento dos projetos em parceria com outros departamentos; entre outras funções.',
    responsibilities: [
      'Criação e georreferenciação de mapas com QGIS',
      'Produção e manutenção de projetos de redes de telecomunicações',
      'Análise e atualização de bases de dados',
      'Elaboração de relatórios e apresentações',
      'Gerenciamento de projetos multidepartamentais',
    ],
    logo: 'https://www.byonsolutions.com/wp-content/uploads/2021/12/logotipo_white.png',
    website: 'https://www.byonsolutions.com/',
  },
  {
    title: 'Distribuidor',
    company: 'Telepizza Portugal',
    period: 'Novembro 2018 - Janeiro 2023',
    location: 'Porto, Portugal',
    description: 'Entregador de pizzas a conduzir moto, contacto com o cliente aquando da entrega do pedido. Nessa função tinha a responsabilidade da entrega das pizzas a tempo, ter um bom contacto com o cliente e ser responsável pelo dinheiro que transportava e o veículo que utilizava.',
    responsibilities: [
      'Entrega de pedidos em moto',
      'Gestão de tempo e rotas de entrega',
      'Atendimento ao cliente',
      'Responsabilidade financeira e gestão de recursos',
    ],
    logo: 'https://www.telepizza.pt/on/demandware.static/-/Sites-TelepizzaPT-Library/default/dw8d4a2e46/images/brand/logo.svg',
    website: 'https://www.telepizza.pt/',
  },
  {
    title: 'Higienizador de Veículos',
    company: 'Wash & Well Évora',
    period: 'Dezembro 2017 - Julho 2018',
    location: 'Évora, Portugal',
    description: 'Responsável pela higienização de carros, atendimento de clientes, tesouraria e condução de veículos. Essa experiência permitiu adaptar-me ao país e conhecer a cultura portuguesa através das relações com os clientes.',
    responsibilities: [
      'Higienização de veículos',
      'Atendimento ao cliente',
      'Gestão de tesouraria',
      'Condução de veículos',
    ],
    logo: 'https://www.washwellportugal.com/wp-content/uploads/2019/10/logo_wash.png',
    website: 'https://www.washwellportugal.com/',
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
                    {item.logo ? (
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                    )}
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

                    {item.website && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Website da empresa</span>
                        </a>
                      </div>
                    )}
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
