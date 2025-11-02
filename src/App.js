import React from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { RecommendationProvider } from './store/provider';
import { MainLayout } from './MainLayout';

function App() {
  return (
    <RecommendationProvider>
      <MainLayout>
        <header>
          <h1 className="text-3xl font-bold mb-8">
            Recomendador de Produtos RD Station
          </h1>
        </header>
        <section className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-2 mb-4">
            <p className="text-lg">
              Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
              encontrar uma variedade de produtos da RD Station, cada um
              projetado para atender às necessidades específicas do seu negócio.
              De CRM a Marketing, de Conversas a Inteligência Artificial, temos
              uma solução para ajudar você a alcançar seus objetivos. Use o
              formulário abaixo para selecionar suas preferências e
              funcionalidades desejadas e receba recomendações personalizadas de
              produtos que melhor atendam às suas necessidades.
            </p>
          </div>
          <div>
            <Form />
          </div>
          <div>
            <RecommendationList />
          </div>
        </section>
      </MainLayout>
    </RecommendationProvider>
  );
}

export default App;
