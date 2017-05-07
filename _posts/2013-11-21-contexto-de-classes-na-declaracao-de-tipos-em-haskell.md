---
layout: post
title: Contexto de classes na declaracao de tipos em Haskell
lang: pt_BR
tags:
- coding
- dojo
- haskell
---

Durante um dos [dojos](https://groups.google.com/forum/#!forum/coding-dojo-tw-poa)
nos ficamos bastante curiosos com o sistema de tipos.
(algo que acontece recorrentemente quando estamos programando em Haskell)

Nos estávamos tentando criar um tipo para dinheiro.

```haskell
data Money a = USD a
```

Mas nos queríamos dar mais contexto para quais os possíveis tipos `a`
que poderíamos utilizar dentro do nosso tipo `Money`

```haskell
data Fractional a => Money a = USD a
```

Entao, nos deparamos com o seguinte Warning.

> Warning: -XDatatypeContexts is deprecated: It was widely considered a misfeature, and has been removed from the Haskell language.

Uma parte importante da mensagem de Warning diz:
> It was widely considered a misfeature

O que levou a tornar DatatypeContexts um *misfeature*?

Uma pesquisa rapida no google me levou ao [link](http://stackoverflow.com/questions/7438600/datatypecontexts-deprecated-in-latest-ghc-why).
La eles mostram uma sintaxe alternativa que extende Haskell (GADTs),
   mas que também precisa ser ativada com um flag na hora de compilar.

## Mas ainda assim, por que e' considerado um misfeature?

Um link para a [wiki oficial]
(https://ghc.haskell.org/trac/haskell-prime/wiki/NoDatatypeContexts)
do Haskell mostra como o compilador lida com a declaração de tipos.

> The problem is that the constraint is not actually on the datatype, but rather, on the type of the constructor. Worse, the dictionary is not stored in the constructor, but simply discarded.

Quando nos colocamos restrições no datatype, elas na verdade são descartados.
Precisamos escrever na função que utiliza nossos sistemas, quais os tipos possíveis de qualquer forma.

## Como eu posso garantir que meu Money nao vai ter um Book?

Antes de tudo precisamos entender um pouco mais sobre visibilidade de módulos.

Recentemente eu estava assistindo a algumas [aulas](https://www.coursera.org/course/proglang)
falando sobre ML e o sistema de módulos.
Haskell foi fortemente inspirado em ML e existe uma forma de fazer isso.

O modulo pode definir quais funções serão vistas quando importadas
(Construtores como `USD` são apenas funções também).

No dojo estávamos exportando tudo, mas no caso de uma biblioteca, isso não seria o ideal.

Para entender melhor como um modulo funciona o Learn you Haskell possui um
 [capitulo](http://learnyouahaskell.com/modules#making-our-own-modules),
assim como a [documentação online](http://www.haskell.org/onlinereport/modules.html).

Podemos garantir as propriedades do nosso tipo `Money` expondo apenas a função criadora
que garantira que nossas propriedades serão mantidas.


```haskell
module Money (dollar) where

data Money a = USD a deriving (Show)

dollar :: Fractional a => a -> Money a
dollar = USD
```

Nós podemos inclusive fazer outra versão que garante que nunca poderemos ter dinheiro negativo.

```haskell
module Money (dollar,
              nonNegativeDollar) where

data Money a = USD a | NoMoney deriving (Show)

dollar :: Fractional a => a -> Money a
dollar = USD

nonNegativeDollar x
  | x < 0.0 = NoMoney
  | otherwise = USD x

```

E para utilizar o nosso modulo

```haskell
import Money

-- error:
-- USD 16.00

result = dollar 16.00 -- USD 16.00
```
