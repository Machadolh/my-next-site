import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Técnico Superior em Planeamento e Estatística/Radar Social',
    company: 'Câmara Municipal das Caldas da Rainha',
    period: 'Trabalho atual',
    location: 'Caldas da Rainha, Portugal',
    description: 'Técnico responsável por elaborar/atualizar os instrumentos de planeamento da Rede Social (diagnóstico social, plano de desenvolvimento social e planos de ação, onde devem estar incluídas as atividades no âmbito do Radar Social); analisar, interpretar e integrar informação e dados estatísticos e geográficos em ambiente SIG como ferramenta de apoio à decisão para posterior disponibilização na WEB e intranet; atualizar, estruturar e gerir base de dados e metadados; produzir cartografia temática preferencialmente recorrendo a software SIG.',
    responsibilities: [
      'Elaborar e atualizar instrumentos de planeamento da Rede Social',
      'Analisar e integrar informação estatística e geográfica em ambiente SIG',
      'Atualizar, estruturar e gerir base de dados e metadados',
      'Produzir cartografia temática utilizando software SIG',
      'Implementar sistema de georreferenciação social de recursos',
      'Realizar estudos, mapear recursos e elaborar relatórios',
      'Promover trabalho multidisciplinar e cooperativo da equipa do Radar Social',
    ],
    logo: '/logos/caldas.png',
    website: 'https://www.mcr.pt/',
  },
  {
    title: 'Técnico de SIG/Cartografia',
    company: 'SOCARTO – Sociedade de Levantamentos Topo-cartográficos',
    period: 'Fevereiro 2025 - Agosto 2025',
    location: 'Portugal',
    description: 'Técnico responsável por efetuar procedimentos para o tratamento de informação planimétrica e altimétrica; introdução de informação proveniente de completagem de campo; execução de cartas, mapas e planos, com os elementos provenientes de levantamentos topográficos, fotogramétricos, hidrográficos e outros, com o objetivo de representar com rigor a posição relativa dos pontos de superfície terrestre e controle de qualidade do produto final.',
    responsibilities: [
      'Tratamento de informação planimétrica e altimétrica',
      'Introdução de informação de completagem de campo',
      'Execução de cartas, mapas e planos',
      'Representação rigorosa da posição relativa dos pontos de superfície terrestre',
      'Controle de qualidade do produto final',
    ],
    logo: '/logos/socarto.png',
    website: 'https://www.socarto.pt/',
  },
  {
    title: 'Estagiário',
    company: 'Érre LRB',
    period: 'Outubro 2024 - Dezembro 2024',
    location: 'Portugal',
    description: 'Estágio Profissional feito em parceria com a UPORTO para a elaboração de um modelo semiautomático, utilizando a ferramenta Model Builder do ArcGIS PRO, para estudo e análise de edifícios com potencial fotovoltaico utilizando ortofotos e dados Lidar, recolhidos pela empresa em conjunto com a Câmara Municipal de Braga.',
    responsibilities: [
      'Desenvolvimento de modelo semiautomático com Model Builder do ArcGIS PRO',
      'Estudo e análise de edifícios com potencial fotovoltaico',
      'Utilização de ortofotos e dados Lidar',
      'Colaboração com Câmara Municipal de Braga',
      'Projeto: Mapa de Potencial Solar e Bio-Roofs de Braga',
    ],
    logo: '/logos/lrb.png',
    website: 'https://lrb.pt/',
  },
  {
    title: 'Engenheiro Projetista',
    company: 'BYON Solutions',
    period: 'Janeiro 2023 - Julho 2024',
    location: 'Matosinhos, Portugal',
    description: 'Projetista responsável pela criação e georreferenciação de mapas; produção e manutenção de projetos de redes de infraestruturas de telecomunicações para diversos países da Europa, operados com auxílio de software de Sistema de Informação Geográfica – QGIS; além de analisar e atualizar bases de dados no Excel; elaboração de relatórios e apresentações com o Word e PowerPoint; gerenciamento e acompanhamento dos projetos em parceria com outros departamentos.',
    responsibilities: [
      'Criação e georreferenciação de mapas com QGIS',
      'Produção e manutenção de projetos de redes de telecomunicações',
      'Análise e atualização de bases de dados no Excel',
      'Elaboração de relatórios e apresentações',
      'Gerenciamento e acompanhamento de projetos multidepartamentais',
    ],
    logo: '/logos/byon.jpg',
    website: 'https://www.byonsolutions.com/',
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
