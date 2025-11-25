import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export const CVDownload = () => {
  return (
    <section id="cv" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Currículo em PDF</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 md:p-10 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Visualize e faça o download do meu currículo</h3>
                  <p className="text-muted-foreground">
                    Baixe a versão completa do meu currículo em formato PDF
                  </p>
                </div>

                <Button size="lg" className="gap-2" asChild>
                  <a 
                    href="/Curriculo_2025_Luiz_Machado.pdf" 
                    download="Curriculo_2025_Luiz_Machado.pdf"
                  >
                    <Download className="w-5 h-5" />
                    Download CV (PDF)
                  </a>
                </Button>

                <div className="w-full mt-8 border border-border rounded-lg overflow-hidden">
                  <iframe
                    src="/Curriculo_2025_Luiz_Machado.pdf"
                    className="w-full h-[600px] md:h-[800px]"
                    title="Currículo PDF"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
