"use client";

import { Button } from "./components/ui/button";
import { Search, Briefcase, Star, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conectando Profissionais a Clientes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Encontre profissionais qualificados ou ofereça seus serviços de forma simples e direta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/cadastro">Anuncie seus Serviços</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/buscar">Encontrar Profissionais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a ProConnect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <MessageCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Contato Direto</h3>
              <p className="text-muted-foreground">
                Comunicação direta via WhatsApp sem intermediários
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <Star className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Avaliações Autênticas</h3>
              <p className="text-muted-foreground">
                Sistema de avaliações transparente e confiável
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <Briefcase className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Planos Acessíveis</h3>
              <p className="text-muted-foreground">
                Destaque seu perfil com nossos planos premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Encontre o profissional ideal
            </h2>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Busque por serviço ou profissional..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>
              <Button>Buscar</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}