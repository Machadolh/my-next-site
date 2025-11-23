import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github, Facebook, Instagram, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src="https://machadolh.github.io/luizmachadocurriculo/imagens/luiz.jpg"
                alt="Luiz Henrique Machado"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
          >
            Luiz Henrique Machado
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Geógrafo • Especialista em SIG e Ordenamento do Território
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 mb-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Porto, Portugal</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+351 917 594 577</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="inline-block w-5 h-5 mr-2">📅</span>
                <span>21/11/1992</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:luiz.machado.henrique@gmail.com" className="hover:text-primary transition-colors">
                  luiz.machado.henrique@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:up201800537@letras.up.pt" className="hover:text-primary transition-colors">
                  up201800537@letras.up.pt
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <motion.a
                href="https://www.linkedin.com/in/luiz-machado-henrique/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/Machadolh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/luiz.machado.henrique"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/luiz.machado.henrique/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://pt.pinterest.com/luizmachadohenrique/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://x.com/LuizMachadoShow"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://open.spotify.com/user/louizhenrri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Music className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              onClick={() => window.location.href = 'mailto:luiz.machado.henrique@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Entrar em Contato
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['20%', '80%', '20%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
