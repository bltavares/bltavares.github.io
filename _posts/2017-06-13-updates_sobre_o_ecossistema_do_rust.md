---
layout: post
lang: pt_BR
title: Updates sobre o ecossistema de Rust (Maio/Junho 2017)
description: |
  A comunidade de Rust vem evoluindo rapidamente, e resolvi fazer um post com atualizações sobre o ecossitema, para ajudar quem não tem acompanhado tanto as mudanças.
  Muitos links a seguir!
tags:
- rust
- community
- updates
---

(Note: This post should be Google Translate friendly. I've refrained from using slangs to help with that.)

Algumas pessoas que me acompanham no dia a dia já perceberam o quanto Rust me fascina.

Eu venho acompanhando a linguagem tem algum tempo, e sempre me perguntam o motivo desse interesse. Um dos motivos é ver como a comunidade vem evoluindo e tornando possível usar Rust em vários lugares.

Resolvi fazer um post, com atualizações sobre o ecossistema, para ajudar quem não tem acompanhando tanto as mudanças.

# Mas o que é Rust?

Tirando do site do Rust em <https://www.rust-lang.org/en-US/>, em uma tradução livre:

> Rust é uma linguagem de programação para sistemas de baixo nível, com enfoque a velocidade, prevenção de erros de memória e segurança entre threads.

> Desenvolvida pela Mozilla, a linguagem permite que você programe como se estivesse programando JavaScript ou Ruby (com algumas ressalvas), mas entregando performance em C

Em resumo, é uma linguagem que parece uma mistura de JavaScript e Ruby, com umas pitadas de Java. Rust tem um fluxo de atualização onde há uma versão nova a cada 6 semanas, trazendo todas as novidades continuamente.

Pra quem quer saber mais, vou separar uma [seção](#como-começar) de texto com links de como começar na linguagem.

# Updates do ecossistema (Maio/Junho 2017)

## Implementing Weld in Rust

<http://dawn.cs.stanford.edu/blog/weld.html>

O pessoal de Stanford publicou sobre a experiência deles desenvolvendo o projeto [Weld](<https://weld-project.github.io/>), um sistema de processamento de dados muito rápido.

Esse tipo de infraestrutura funciona muito bem em Rust por alguns pontos:

-   Poucas camadas de abstração no programa final, tornando ele bem rápido
-   Possível de integrar com outras linguagens. O projeto tem um demo de integração com os dados processados rapidamente pelo Weld e sendo visualizados por um programa Python com Pandas.

Ou seja, dá pra escrever a parte que precisa ser muito rápido em Rust no meio de um projeto Python. Massa né?

## Pesquisa de opinião sobre Rust

<https://blog.rust-lang.org/2017/05/03/survey.html>

[Link direto pra pesquisa](<https://docs.google.com/forms/d/e/1FAIpQLScw5xyQCGireVaHLeb_8dQOhwvaqDZ5mF9utc0i75Z0pndhXg/viewform?c=0&w=1>)

Esse é o segundo ano que a comunidade está realizando umas pesquisa para entender melhor sobre as motivações de usar Rust (ou de não usar).

Esse tipo de informação ajuda a identificar problemas na documentação, pontos de dificuldade de introduzir os conceitos novos da linguagem, problemas de didática, falta de material, problemas no ecossistema e tudo mais.

Inclusive, a comunidade tem pedido para pessoas que não usam, ou desistiram de usar Rust, responderem também. Existe uma série de perguntas exatamente para endereçar pessoas que não usam a linguagem e ajudar a entender onde a comunidade tem falhado em cobrir a ferramenta.

Agora já fecharam as submissões, mas estou esperando pelos resultados.

## Upgrade do LLVM na linguagem

<https://www.reddit.com/r/rust/comments/67din2/the_merge_of_llvm_40_into_rust_has_finally/dgpnjxb/>

Rust utiliza uma série de ferramentas já testadas por anos por outros sistemas para gerar códigos otimizados e rápidos. Uma delas é o LLVM, utilizado também pela Apple no XCode, Haskell e Mono.

Essa parte do projeto é fundamental para permitir que Rust execute em Arduinos!

Faz pouco tempo que o LLVM adiciona suporte oficial a projetos em AVR e melhoraram o suporte a ARM, o que significa que agora códigos que utilizam LLVM podem acabar executados por Arduinos, Androids e Raspberry PIs. Isso foi anunciado no LLVM 4 e agora a linguagem atualizou a infraestrutura para utilizar a nova versão.

Isso permite que novos projetos surjam para facilitar o desenvolvimento de dispositivos embarcados, o que deve acontecer por um grupo bem interessado em ver Rust no Arduino virar realidade.

<https://github.com/rust-embedded>

Ainda será preciso algum trabalho para deixar essa experiencia de maneira fantástica para iniciar, mas agora esse trabalho está desbloqueado.

## Divulgada a estratégia para a comunidade ajudar a melhorar as bibliotecas

<https://blog.rust-lang.org/2017/05/05/libz-blitz.html>

Falando em boa experiência, uma das coisas frustrantes e complicadas de investir em uma linguagem nova é a quantidade de boas bibliotecas disponíveis. As primeiras pessoas sempre chegaram a um ecossistema sem bom desenvolvimento.

Com a evolução da linguagem, teremos boas bibliotecas, mas ainda não temos um bom ecossistema para desenvolver aplicações Web.

Alguns dos problemas já possuem ferramentas que estão evoluindo bem rápido como:

-   Diesel: ORM que executa na versão estável da linguagem - <http://diesel.rs/>
-   Rocket: Framework web que ainda requer uma versão instável da linguagem - <https://rocket.rs/>
-   Tokio: Plataforma para escrever código assíncrono - <https://tokio.rs/>

Essas bibliotecas maiores são compostas de bibliotecas menores, como parsers de URL, Buffer de escrita, e tantas outras.

Como temos um ecossistema novo, essas bibliotecas às vezes não são tão estáveis quanto gostaríamos, apesar de ter um domínio bem definido para atacar.

A comunidade anunciou em um post bem legal de ler qual a estratégia que eles utilizaram para tornar esse ecossistema cheio de ferramentas fáceis de adotar no seu projeto:

-   De tempo em tempo, uma equipe da linguagem vai escolher uma biblioteca candidata para estabilização
-   Eles seguem uma série de convenções definidas e claras para analisar a biblioteca
    -   O objetivo está em normalizar as interfaces, chamadas, estrutura, e claro, documentação clara
    -   A comunidade está convidada a ajudar a definir as guidelines aqui: <https://github.com/brson/rust-api-guidelines>
    -   As análises serão feitas em vídeo e gravadas. Uma ótima oportunidade para aprender como pessoas que conhecem a linguagem analisam código.

-   Serão criados Issues nos projetos, e toda a comunidade se mobilizaram para ajudar a tratar esses issues
    -   A comunidade já possui uma convenção de marcar issues como "Bom para um primeiro commit", "Easy", ou "Disponível para mentorear"

-   Depois de tratado os problemas, essa seria uma biblioteca com um selo de qualidade
    -   Essas bibliotecas teriam exemplos simples para ajudar a fazer coisas na linguagem, como "Escrever em um arquivo em paralelo", "Baixar o conteúdo de um site"
    -   Esses exemplos estarão aqui: <https://brson.github.io/rust-cookbook/>

Acho bem interessante o esforço que a comunidade tem colocado em gerar esse tipo de material.

Documentação e didática tem sido um foco bem interessante do projeto. Esse esforço de trazer pessoas novas e separar issues para incentivar o desenvolvimento também, além de tentar ajudar a distribuir o esforço das autoras de bibliotecas.

## RustFest 2017

<https://www.youtube.com/channel/UCaYhcUwRBNscFNUKTjgPFiA>

Esse último mês aconteceu o 2o Rust Fest, cheio de apresentações que me deixaram interessados.

Os vídeos já começaram a ser publicados no canal deles no YouTube.

Eu estou particularmente interessado em ouvir como a Ashley Williams, desenvolvedora do NPM (Node Package Manager), convenceu a equipe dela a adotar Rust. Ainda não temos Rust executando no seu computador quando você executa \`npm install\`, mas a infraestrutura do repositório oficial sim, pelo menos foi o que entendi dos slides.

<https://ashleygwilliams.github.io/rustfest-2017/>

Falando em executar Rust no seu computador, todas as vezes que você fizer uma busca com um Visual Studio Code atualizado, você estará executando um pedaço de Rust.

Houve um PR para adicionar a biblioteca de regex em Rust como parte do VSCode. Isso demonstra essa coexistência pacífica da linguagem com outras linguagens no mesmo projeto. Achei a discussão interessante de ler, mesmo apenas para conhecer os argumentos.

<https://github.com/Microsoft/vscode/issues/19983>

## Coexistindo com outras linguagens no mesmo projeto

<https://usehelix.com/>

Tenho ouvido cada vez mais sobre empresas no Brasil adotando Rust em seus projetos Ruby/Rails, de Fintechs a Chatbots.

Eu sou super entusiasta dessa capacidade de Rust ser inserido em projetos como bibliotecas.

Recentemente houve uma atualização do projeto Helix, que quer deixar fácil escrever código Rust em projetos Ruby.

<https://usehelix.com/>

Para projetos em C/C++, a biblioteca que permite gerar os arquivos necessários para ajudar.

<https://servo.github.io/rust-bindgen/>

Isso, integrado com o Corrode, um programa que tenta gerar código Rust válido a partir de código C, ajudaria muito a transformar partes de projetos aos poucos.

O Corrode ainda está em desenvolvimento, e não gera códigos idiomáticos, mas os updates do projeto me deixam animado:

<https://github.com/jameysharp/corrode>

<http://jamey.thesharps.us/2017/04/corrode-update-control-flow-translation.html>

Ah, e faz um tempo que o Firefox já executa pedaços de Rust no seu computador. Um post bem legal para entender como foi o processo de adicionar isso está no blog da Mozilla.

<https://hacks.mozilla.org/2016/07/shipping-rust-in-firefox/>

# Como começar

Se eu te deixei animado, segue uma lista de recursos para começar com Rust.

## Instale o \`rustup\` no seu computador.

Esse é o jeito mais fácil de instalar o compilador.

<https://www.rustup.rs/>

Programas escritos em Rust (na grande maioria das vezes) não precisam de mais nada para serem executados em outros computadores além do binário.

Mas para gerar esse binário, você precisa de ter o compilador no seu computador, que é exatamente o que o \`rustup\` configura.

Funciona em Mac, Linux e Windows, e eu testei no Windows inclusive.

## Leia o livro do Rust

<https://doc.rust-lang.org/stable/book/>

O livro do Rust é o documento mais oficial para aprender a linguagem. Ele tem sido reescrito para melhorar a didática aos poucos, mas ainda é uma boa fonte de informação, mesmo durante o processo.

Feedbacks são bem aceitos.

## Pratique Rust com exercícios

<http://exercism.io/languages/rust/about>

O projeto Exercism possui vários desafios e exercícios feitos para Rust. O site é bem legal e tem instruções de como começar a resolver os problemas.

## Utilize o template para gerar binários continuamente no seu projeto

Existe um projeto com um template para Travis e AppVeyor que permite que você gere binários para todas as principais plataformas que o Rust suporta: Mac, Linux, Windows e \*BSD.

Os binários podem ser configurados para gerar a versões para diferentes arquiteturas: ARM, 32 e 64bits, e outros.

O script também permite validar o seu projeto com as versões futuras da linguagem, garantindo que uma versão nova da linguagem (que é lançada a cada 6 semanas) não pegue o seu projeto desprevenido.

<https://github.com/japaric/trust>

## Busque mais material

Existem alguns repositórios com uma série de artigos, posts, vídeos e materiais sobre Rust, que pode ajudar a recapitular o que já foi publicado.

-   <https://github.com/kud1ing/awesome-rust>
-   <https://github.com/rust-unofficial/patterns>
-   <https://github.com/ctjhoa/rust-learning>
-   <https://brson.github.io/rust-cookbook/>
-   <https://github.com/brson/rust-api-guidelines>

## Converse com o pessoal

O pessoal tende ser muito receptivo com pessoas novas, então sempre vale passar pra dar um oi, pedir ajuda ou anunciar projetos e posts, mesmo que sejam pequenos.

-   <https://users.rust-lang.org/>

-   \#rust no IRC da Mozilla
    -   <https://kiwiirc.com/client/irc.mozilla.org/#rust>

-   \#rust-beginners no IRC da Mozilla
    -   <https://kiwiirc.com/client/irc.mozilla.org/#rust-beginners>

-   <https://www.reddit.com/r/rust/>

## Siga os updates semanalmente

Existe um informe bem mais frequente do que o meu blog. O This Week in Rust tem um email semanal com novidades. Recomendo visitar e se inscrever se quisr acompanhar as novidades.

<https://this-week-in-rust.org/>

Espero que tenham gostado e achado o post informativo.

Happy Hacking
