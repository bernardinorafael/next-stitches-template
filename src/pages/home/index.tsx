import { Card } from '@/components/Card'
import Head from 'next/head'
import Link from 'next/link'

import { ContentBox, HomeContainer } from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Template Next.js & Stitches</title>
      </Head>

      <HomeContainer>
        <h1>Seja bem-vindo ao meu Template 🥳</h1>

        <strong>
          Projeto criado para facilitar a inicialização de projetos{' '}
          <Link href="https://nextjs.org/docs" rel="external" target="_blank">
            Next.js
          </Link>{' '}
          e{' '}
          <Link href="https://stitches.dev" rel="external" target="_blank">
            Stitches
          </Link>
        </strong>

        <p>Confira abaixo as configurações default deste template.</p>

        <ContentBox>
          <Card
            description="Ferramenta de formatação de código que auxilia na padronização da estrutura."
            title="Prettier"
            href="https://prettier.io"
            link="prettier.io"
          />

          <Card
            description="Phosphor é uma família de ícones flexíveis para interfaces, diagramas, apresentações."
            title="Phosphor"
            href="https://phosphoricons.com"
            link="phosphoricons.com"
          />

          <Card
            description="Poderoso gerenciamento de estado assíncrono para TS/JS, React, Solid, Vue e Svelte."
            title="React Query"
            href="https://tanstack.com/query/v3/"
            link="tanstack.com/query"
          />

          <Card
            description="Ferramenta para análise de código JS, onde auxília na manutenção e correção de erros."
            title="ESLint"
            href="https://eslint.org"
            link="eslint.org"
          />
        </ContentBox>
      </HomeContainer>
    </>
  )
}
