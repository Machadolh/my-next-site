import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Contato</h3>
              <div className="space-y-3">
                <a
                  href="mailto:luiz.machado.henrique@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>luiz.machado.henrique@gmail.com</span>
                </a>
                <a
                  href="mailto:up201800537@letras.up.pt"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>up201800537@letras.up.pt</span>
                </a>
                <a
                  href="tel:+351917594577"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(+351) 917 594 577</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Localização</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span>Porto, Portugal</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/luiz-henrique-machado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/machadolh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Luiz Henrique Machado. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
