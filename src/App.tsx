import React, { useState } from 'react';
import { Instagram, Globe, Mail, User, ArrowRight, Menu, X, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

// --- Data Source ---
// Fácil de editar: adicione novos objetos aqui para atualizar o catálogo.

interface Guia {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  status: string;
  destaque: boolean;
}

const guiasDeViagem: Guia[] = [
  {
    id: 1,
    nome: "Guia Completo Polônia 2026",
    descricao: "Descubra a Polônia além do óbvio. Roteiros estratégicos, gastronomia autêntica e a história profunda do leste europeu.",
    preco: "R$ 97,00",
    imagem: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2669&auto=format&fit=crop",
    status: "active",
    destaque: true
  },
  {
    id: 2,
    nome: "Rússia Imperial",
    descricao: "Uma imersão na grandeza dos Czares, arquitetura soviética e os segredos de Moscou e São Petersburgo.",
    preco: "Em breve",
    imagem: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2649&auto=format&fit=crop",
    status: "coming_soon",
    destaque: false
  },
  {
    id: 3,
    nome: "Segredos da Turquia",
    descricao: "De Istambul à Capadócia: uma jornada única entre dois continentes, bazares milenares e paisagens lunares.",
    preco: "Em breve",
    imagem: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2671&auto=format&fit=crop",
    status: "coming_soon",
    destaque: false
  },
  {
    id: 4,
    nome: "Essência do Japão",
    descricao: "Tradição e modernidade em harmonia. Templos, tecnologia e a delicadeza da cultura nipônica.",
    preco: "Em breve",
    imagem: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop",
    status: "coming_soon",
    destaque: false
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#F9F9F9]/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.postimg.cc/hjGRMZ0d/Logo_Nattiva_Travel_Prancheta_1_cópia_27.png" 
              alt="Nattiva Travel" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#catalogo" className="text-gray-800 hover:text-[#C5A059] transition-colors text-sm font-medium tracking-wide uppercase">Catálogo</a>
            <a href="#autor" className="text-gray-800 hover:text-[#C5A059] transition-colors text-sm font-medium tracking-wide uppercase">Sobre o Autor</a>
            <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-[#C5A059] transition-colors group">
              <User size={18} className="text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium tracking-wide uppercase">Minha Conta</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-[#C5A059] focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#catalogo" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#C5A059] hover:bg-gray-50 rounded-md">Catálogo</a>
            <a href="#autor" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#C5A059] hover:bg-gray-50 rounded-md">Sobre o Autor</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#C5A059] hover:bg-gray-50 rounded-md">Minha Conta</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
          alt="Background Texture" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-xs font-semibold tracking-widest uppercase mb-6">
            Curadoria Boutique
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Viaje com <span className="italic text-[#C5A059]">estratégia</span> <br className="hidden md:block" /> e profundidade.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12">
            Guias exclusivos para viajantes que buscam experiências autênticas, longe do turismo de massa. Planejamento inteligente para destinos inesquecíveis.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="#catalogo" className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium tracking-widest uppercase hover:bg-[#C5A059] transition-colors duration-300 rounded-sm shadow-lg hover:shadow-xl">
              Explorar Coleção
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ guia: Guia }> = ({ guia }) => {
  const isActive = guia.status === 'active';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full ${!isActive ? 'opacity-70 grayscale-[0.8] hover:grayscale-0 hover:opacity-100' : ''}`}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={guia.imagem} 
          alt={guia.nome} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
            <span className="bg-white/90 text-[#1A1A1A] px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg">
              Em Breve
            </span>
          </div>
        )}
        
        {isActive && (
          <div className="absolute top-4 right-4">
             <span className="bg-[#C5A059] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm shadow-md">
              Novo
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300">
            {guia.nome}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {guia.descricao}
        </p>
        
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Investimento</span>
            <span className="text-lg font-serif font-medium text-[#1A1A1A]">{guia.preco}</span>
          </div>
          
          <button 
            disabled={!isActive}
            className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm ${
              isActive 
                ? 'bg-[#1A1A1A] text-white hover:bg-[#C5A059] shadow-md hover:shadow-lg cursor-pointer' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isActive ? 'Quero meu Guia' : 'Aguarde'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Catalog = () => {
  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">Coleção de Destinos</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto font-light">
            Guias meticulosamente elaborados para transformar sua viagem em uma experiência de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {guiasDeViagem.map((guia) => (
            <ProductCard key={guia.id} guia={guia} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Author = () => {
  return (
    <section id="autor" className="py-24 bg-[#F9F9F9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#1A1A1A]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#C5A059] transform translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
                alt="João Paulo - Nattiva Travel" 
                className="relative w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-2 block">O Estrategista</span>
            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8">João Paulo</h2>
            
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Nômade digital e estrategista de viagens, já chamei de "lar" mais de 10 países diferentes. Minha missão não é apenas visitar lugares, mas decifrá-los.
              </p>
              <p>
                A Nattiva Travel nasceu da insatisfação com o turismo superficial. Crio guias para quem busca entender a alma de um destino, não apenas ticar pontos turísticos em uma lista.
              </p>
              <p>
                Cada guia é fruto de vivência real, erros e acertos, e uma curadoria obsessiva pelo que há de melhor.
              </p>
            </div>

            <div className="mt-10 flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-[#1A1A1A]">10+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Países Vividos</span>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-[#1A1A1A]">45+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Destinos Mapeados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://i.postimg.cc/tJK0qqG7/Logo_Nattiva_Travel_Prancheta_1_cópia_21.png" 
              alt="Nattiva Travel Logo White" 
              className="h-10 w-auto mb-8 opacity-90"
            />
            <p className="text-gray-400 font-light max-w-sm leading-relaxed">
              Redefinindo a forma de viajar. Curadoria, estratégia e experiências autênticas para o viajante moderno.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-6 text-[#C5A059]">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#catalogo" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Catálogo de Guias</a></li>
              <li><a href="#autor" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Sobre o Autor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Consultoria Personalizada</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-6 text-[#C5A059]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">contato@nattivatravel.com.br</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Instagram size={16} />
                <span className="text-sm">@nattivatravel</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Globe size={16} />
                <span className="text-sm">www.nattivatravel.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs tracking-wider mb-4 md:mb-0">
            &copy; 2026 Nattiva Travel. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#C5A059] text-xs uppercase tracking-wider transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-[#C5A059] text-xs uppercase tracking-wider transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] selection:bg-[#C5A059] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Author />
      </main>
      <Footer />
    </div>
  );
}
