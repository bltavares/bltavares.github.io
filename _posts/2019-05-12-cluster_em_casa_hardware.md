---
layout: post
lang: pt_BR
title: Cluster em casa - Hardware
description: |
  Documentando a criação de um cluster para estudar aplicações distribuídas, começando pelo hardware.
tags:
- homelab
- cluster
- raspberry
---

Nos últimos meses eu estive estudando sobre ferramentas de orquestração de contêineres, tentando entender como diferentes requerimentos mudam as escolhas de software e plataforma. 

Apesar do movimento de adoção da nuvem, eu sempre fui fã dos Raspberry Pis como computadores para estudos. Eles são fantásticos computadores de baixo custo para construir um cluster com vários nós.

Descobri uma placa chamada [ClusterHat]( https://clusterhat.com/), que permite que eu configure 5 Raspberry Pis (4 + 1) em um pequeno cluster. Eu já possuía Raspberry Pis comprados a alguns anos e um laptop com problemas de gerenciamento de energia no armário, e poderia aproveitar esses aparelhos para começar o cluster.

Depois, a expansão poderia vir aos poucos.

![Conjunto de Raspberry Pis de diversas gerações](/assets/cluster_em_casa/conjunto_pi_hardware.jpg)
> Tudo pronto para começar a configurar um cluster.

Um detalhe interessante do hardware disponível é a mistura de arquiteturas. Temos alguns ARMv6, ARMv7, ARMv8_64 e x86_64 conectados, criando um requerimento não usual para nosso orquestrador.
Processadores ARM estão ficando cada vez mais popular, mas nem todos os projetos estão preparados para essa arquitetura, o que nos limita quais orquestradores podemos executar.

A quantidade de recursos também é limitada, e o que escolhermos deve caber nos nossos pequenos computadores, e ainda sobrar espaço para rodar os contêineres.

Ter esses computadores pequenos também traz algo novo para explorar: poderíamos ter um cluster móvel, que é mais fácil de expandir a partir de vários locais.
Eu sempre me interessei com conectividade P2P, e agora que temos endereços IPv6 distribuídos per ISPs no Brasil, isso se torna ainda mais viável criar a conexão a partir de vários lugares.

Nos próximos posts vou descrever as opções de componentes para construir o cluster e quais foram as ferramentas escolhidas dado nossos requerimentos de hardware.