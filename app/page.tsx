"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Leaf, Scale, Building, Send } from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log("Formulário enviado:", { name, email, message });
    // Limpar o formulário após o envio
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              União Progressista
            </a>
            <div className="space-x-4">
              <a href="#sobre" className="hover:underline">
                Sobre
              </a>
              <a href="#causas" className="hover:underline">
                Causas
              </a>
              <a href="#equipe" className="hover:underline">
                Equipe
              </a>
              <a href="#contato" className="hover:underline">
                Contato
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Bem-vindo à União Progressista
            </h1>
            <p className="text-xl mb-8">
              Juntos por um futuro mais justo e sustentável
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Junte-se a nós
            </Button>
          </div>
        </section>

        <section id="sobre" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
              Nossa Missão
            </h2>
            <p className="text-lg text-center max-w-2xl mx-auto">
              A União Progressista está comprometida em construir uma sociedade
              mais justa, igualitária e sustentável. Acreditamos no poder da
              ação coletiva e na importância de políticas baseadas em evidências
              para enfrentar os desafios do nosso tempo.
            </p>
          </div>
        </section>

        <section id="causas" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-700">
              Nossas Principais Causas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Justiça Social",
                  icon: <Scale className="h-12 w-12 text-blue-500 mb-4" />,
                  description:
                    "Lutamos por igualdade de oportunidades e direitos para todos os cidadãos.",
                },
                {
                  title: "Sustentabilidade",
                  icon: <Leaf className="h-12 w-12 text-green-500 mb-4" />,
                  description:
                    "Promovemos políticas ambientais para um futuro sustentável e saudável.",
                },
                {
                  title: "Educação para Todos",
                  icon: <Users className="h-12 w-12 text-blue-500 mb-4" />,
                  description:
                    "Defendemos o acesso universal à educação de qualidade.",
                },
              ].map((causa, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent>
                    {causa.icon}
                    <h3 className="text-xl font-semibold mb-2">
                      {causa.title}
                    </h3>
                    <p>{causa.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-700">
              Nossa Equipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Silva",
                  role: "Presidente",
                  image: "https://picsum.photos/800/800?blur=2",
                },
                {
                  name: "João Santos",
                  role: "Diretor de Políticas",
                  image: "https://picsum.photos/800/800?blur=2",
                },
                {
                  name: "Ana Oliveira",
                  role: "Coordenadora de Campanhas",
                  image: "https://picsum.photos/800/800?blur=2",
                },
              ].map((membro, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <img
                      src={membro.image}
                      alt={membro.name}
                      className="rounded-full mx-auto mb-4"
                      width={150}
                      height={150}
                    />
                    <h3 className="text-xl font-semibold">{membro.name}</h3>
                    <p className="text-gray-600">{membro.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
              Entre em Contato
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <Textarea
                  placeholder="Sua mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 União Progressista. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
