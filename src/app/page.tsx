import { Metadata } from 'next';
import Card from '@/components/card/card';
import Section from '@/components/section/section';

export const metadata: Metadata = {
  title: 'YouCourse - Página inicial',
};

export default function PageHome() {
  return (
    <main className="flex justify-center">
      <Section />
      {/* <Card
        title="Curso Criação de Landing Pages com WordPress e Elementor"
        description="Aprenda neste tutorial completo a Como criar uma Landing Page no
            WordPress e Elementor Grátis. Ou seja, como criar uma Página de
            Vendas no Elementor Free e WordPress. Ensino como fazer uma Landing
            Page WordPress do zero e passo a passo. Essa Landing Page Elementor
            Free foi feita com o tema de venda de curso de tráfego pago(Ads),
            mas você pode adaptar para qualquer outro nicho do Marketing
            Digital, para qualquer outro tipo de curso ou produto físico e
            digital. Veja como criar uma Landing Page de alta conversão passo a
            passo. Página de Vendas é um tipo de Landing Page. Neste vídeo eu
            ensino a criar uma Landing Page Página de Vendas, ou seja, o
            objetivo é vender um produto ou serviço."
        imageUrl="https://i.ytimg.com/vi/5Dkw-Cg-aeI/hqdefault.jpg"
        href="/courses/123"
      /> */}
    </main>
  );
}
