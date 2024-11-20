"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Leaf,
  Scale,
  Menu,
  X,
  Megaphone,
  FileText,
  HandHeart,
} from "lucide-react";
import Image from "next/image";
import js from "@/public/assets/reactjs.jpg";
import ts from "@/public/assets/ts.jpg";
import nest from "@/public/assets/nest.jpg";
import fundo from "@/public/assets/povo.jpg";
import presidente from "@/public/assets/presidente.jpg";
import diretor from "@/public/assets/diretor.jpg";
import coordenadora from "@/public/assets/coordenadora.jpg";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              Política Voz do Povo
            </a>
            <div className="hidden md:flex space-x-6">
              <a
                href="#sobre"
                className="hover:text-blue-200 transition duration-300"
              >
                Sobre
              </a>
              <a
                href="#o-que-fazemos"
                className="hover:text-blue-200 transition duration-300"
              >
                O Que Fazemos
              </a>
              <a
                href="#causas"
                className="hover:text-blue-200 transition duration-300"
              >
                Causas
              </a>
              <a
                href="#equipe"
                className="hover:text-blue-200 transition duration-300"
              >
                Equipe
              </a>
              <a
                href="#contato"
                className="hover:text-blue-200 transition duration-300"
              >
                Contato
              </a>
            </div>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-40">
          <nav className="flex flex-col p-4">
            <a
              href="#sobre"
              className="py-2 hover:text-blue-600 transition duration-300"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#o-que-fazemos"
              className="py-2 hover:text-blue-600 transition duration-300"
              onClick={toggleMenu}
            >
              O Que Fazemos
            </a>
            <a
              href="#causas"
              className="py-2 hover:text-blue-600 transition duration-300"
              onClick={toggleMenu}
            >
              Causas
            </a>
            <a
              href="#equipe"
              className="py-2 hover:text-blue-600 transition duration-300"
              onClick={toggleMenu}
            >
              Equipe
            </a>
            <a
              href="#contato"
              className="py-2 hover:text-blue-600 transition duration-300"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={fundo.src}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter blur-sm"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Bem-vindo à Política Voz do Povo
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Juntos, construímos um futuro mais justo, igualitário e
                sustentável para todos.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 transition duration-300">
                Junte-se a nós
              </Button>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
              Nossa Missão
            </h2>
            <p className="text-lg text-justify max-w-3xl mx-auto text-gray-700 leading-relaxed">
              A Voz do Povo é dedicada a fortalecer a democracia por meio da
              participação cidadã e do diálogo transparente. Acreditamos no
              poder da coletividade e na necessidade de uma política acessível e
              representativa. Nosso compromisso é construir uma sociedade mais
              justa, inclusiva e consciente, onde todas as vozes sejam ouvidas e
              contribuam para um futuro melhor para todos.
            </p>
          </div>
        </section>

        <section id="o-que-fazemos" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-700">
              O Que Fazemos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Educação Política",
                  icon: <FileText className="h-12 w-12 text-blue-600 mb-4" />,
                  description:
                    "Promovemos workshops, seminários e materiais educativos para aumentar a compreensão dos cidadãos sobre o processo político e seus direitos.",
                },
                {
                  title: "Mobilização Comunitária",
                  icon: <Megaphone className="h-12 w-12 text-blue-600 mb-4" />,
                  description:
                    "Organizamos eventos e campanhas para engajar a comunidade em questões locais e nacionais, incentivando a participação ativa na política.",
                },
                {
                  title: "Advocacy",
                  icon: <HandHeart className="h-12 w-12 text-blue-600 mb-4" />,
                  description:
                    "Trabalhamos com legisladores e formuladores de políticas para promover leis e políticas que reflitam as necessidades e aspirações dos cidadãos.",
                },
              ].map((atividade, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition duration-300 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center mb-4">
                      {atividade.icon}
                      <h3 className="text-xl font-semibold text-blue-700">
                        {atividade.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-justify">
                      {atividade.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="causas" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">
              Nossas Principais Causas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Democracia Participativa",
                  icon: <Scale className="h-12 w-12 text-green-600 mb-4" />,
                  description:
                    "Acreditamos no poder do diálogo e da participação popular para construir uma política mais transparente e representativa.",
                },
                {
                  title: "Inclusão Social",
                  icon: <Leaf className="h-12 w-12 text-green-600 mb-4" />,
                  description:
                    "Defendemos ações que promovam igualdade de direitos, oportunidades e respeito às diversidades em todas as suas formas.",
                },
                {
                  title: "Transparência e Acessibilidade",
                  icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
                  description:
                    "Trabalhamos para garantir que informações e decisões políticas sejam acessíveis, claras e próximas da população.",
                },
              ].map((causa, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition duration-300 bg-white"
                >
                  <CardContent className="flex flex-col items-center">
                    {causa.icon}
                    <h3 className="text-xl font-semibold mb-2 text-green-700">
                      {causa.title}
                    </h3>
                    <p className="text-gray-600 text-justify">
                      {causa.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-700">
              Nossa Equipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Mario Silva",
                  role: "Presidente",
                  image: presidente,
                },
                {
                  name: "João Santos",
                  role: "Diretor de Políticas",
                  image: diretor,
                },
                {
                  name: "Ana Oliveira",
                  role: "Coordenadora de Campanhas",
                  image: coordenadora,
                },
              ].map((membro, index) => (
                <Card
                  key={index}
                  className="text-center overflow-hidden hover:shadow-xl transition duration-300 bg-white"
                >
                  <CardContent className="p-0">
                    <Image
                      src={membro.image}
                      alt={membro.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-blue-600">
                        {membro.name}
                      </h3>
                      <p className="text-gray-600">{membro.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Entre em Contato
            </h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <Textarea
                  placeholder="Sua mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white transition duration-300"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Política Voz do Povo. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
