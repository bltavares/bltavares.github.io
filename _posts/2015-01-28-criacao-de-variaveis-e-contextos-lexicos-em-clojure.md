---
layout: post
title: Criação de variáveis e contextos léxicos em Clojure
lang: pt_BR
tags:
- coding
- clojure
---

Clojure é uma linguagem funcional, em que podemos tratar funções como
qualquer outro primitivo da linguagem, passando como argumentos,
retornos e salvando em estruturas de dados.

Como funções são tão importantes, nós iremos criar diversas delas nos
nossos programas.  Mas qual a diferença entre criar uma função com
`(defn funcao [arg] arg)` e `(fn funcao [arg] arg)` ?

Antes de tentar responder essa questão, eu gostaria de explorar um
pouco como valores são associados a símbolos em Clojure.

# Associando valores em namespaces

Quando falamos de váriaveis em Clojure, nós estamos nos referindo
ao valor que esta associado a um simbolo em um escopo.  Quando
criamos um arquivo e adicionamos um namespace no topo, nos estamos
mudando qual o contexto atual que iremos associar nossos valores.

Podemos fazer uns exemplos em um REPL para explorar um pouco a
ideia de variáveis.

Primeiro, vamos criamos nosso namespace `exemplo`, e para associar
o valor "exemplo" e recuperar ele de volta, podemos fazer o
seguinte:

```clojure
(ns 'exemplo)

(def variavel "exemplo") variavel ;; => "exemplo"
```

`def` é uma forma especial para você atribuir valores dentro do
namespace.  Quando digitamos apenas um simbolo, fora de um macro, o
clojure irá tentar buscar a referencia no namespace atual.  Nos
também podemos especificar com um qualificador de namespace, qual
simbolo nos queremos nos referir explicitamente.

```clojure
variavel ;; => "exemplo"
exemplo/variavel ;; => "exemplo"
```

O que estiver antes do `/` no simbolo sera considerado o namespace,
também chamado de simbolo qualificado (qualified symbol).

De forma gráfica, podemos imaginar o contexto como uma tabela que
utilizamos para consultar os valores.

    +----------------------+
    |ns exemplo            |
    +----------------------+
    |variavel = "exemplo"  |
    |                      |
    |                      |
    +----------------------+

Os valores associados ao namespace serão exportados com ele,
permitindo que outros namespaces façam uso daqueles valores. É
assim que você pode usar uma função definida em `clojure.string` ou
qualquer outra biblioteca.

Como incluir outros namespaces na caminho de procura sem
qualificadores nos símbolos merece um post separado, que envolve
algumas formas mais especificas na hora de definir qual o namespace
atual com o `ns`.

# Outras formas de criar escopos

Além do escopo do namespace, nos temos a possibilidade de criar
escopos locais.
Nem sempre queremos definir um valor que faz sentido de ser
exportado, como por exemplo, variáveis locais em uma função.

A forma especial `let` permite criar um novo escopo, estendendo o
escopo atual.  Além de termos acesso aos valores associados no
escopo atual, nos teremos novos valores para fazer a consulta.

```clojure
(def variavel 1)

(let [nova-variavel 2]
  (println (+ variavel nova-variavel)))

variavel ;; => 1
nova-variavel ;; => Erro
```

A forma do `let` aceita um vetor de pares entre binding-form e
valor, que estarão disponíveis nas expressões seguintes, ainda
dentro do `let`.

Uma visualização gráfica possível para os contextos acima seria algo assim:

    +-------------------------------------+
    | ns exemplo                          |
    +-------------------------------------+
    | variavel = 1                        |
    |                                     |
    |   +---------------------------------+
    |   | let                             |
    |   +---------------------------------+
    |   | nova-variavel = 2               |
    |   |                                 |
    |   |                                 |
    |   | (println                        |
    |   |     (+ variavel nova-variavel)) |
    |   |                                 |
    +---|---------------------------------+

É possível criar escopos dentro de escopos também.
As atribuições introduzidas pelo novo escopo tem precendência na
consulta do valor, podendo obscurecer símbolos associados previamente.

```clojure
(def exemplo 1)

(let [nova-variavel 2]
  (println exemplo)
  (let [outra-variavel 3
        exemplo 4]
    (println (+ exemplo nova-variavel outra-variavel))))

(println exemplo)
```

Para não deixar faltar, vamos visualizar graficamente os contextos.

    +------------------------------+
    |ns exemplo                    |
    +------------------------------+
    |exemplo = 1                   |
    |                              |
    |   +--------------------------+
    |   |let                       |
    |   +--------------------------+
    |   |nova-variavel = 2         |
    |   |                          |
    |   |   +----------------------+
    |   |   | let                  |
    |   |   +----------------------+
    |   |   | outra-variavel = 3   |
    |   |   | exemplo = 4          |
    |   |   |                      |
    |   |   | (println ...)        |
    +---|---|----------------------+

Dentro do primeiro `let`, o valor para `exemplo` continua sendo o do
contexto anterior. Dentro do segundo `let` nos associamos outro
valor para `exemplo`, e assim que saímos dos `let`'s vemos que o
valor em `exemplo` continua o mesmo.

Criar uma função também introduz um novo contexto léxico, de uma
forma similar ao `let`. Os argumentos terão o valor associado quando
a função for chamada, mas o contexto ainda retém acesso aos valores
dos escopos em que ele foi criado.

Para demonstrar, vou criar uma função dentro de um outro contexto, e
atribuir ela a um símbolo no meu namespace com o `def`.

```clojure
(def funcao (let [valor 1]
              (fn [outro] (+ outro valor))))

funcao ;; => Referencia a função
(funcao 2) ;; => 3
(funcao 3) ;; => 4

valor ;; => Erro
```

Quando nós chamamos a `função`, as expressões que vamos executar
terão os valores passados associado aos argumentos, além do contexto
que possui o `valor`.

Se você quiser explorar mais sobre como essa propriedade de manter
os contextos em que a função foi criada para escrever programas, dê
uma pesquisada em closures. Falar sobre isso também mereceria um
outro post.

# Voltando a pergunta sobre as diferenças de criar funções

Acho que agora que entendemos um pouco melhor como o Clojure utiliza
os contextos para salvar valores podemos voltar a pergunta.

Qual a diferença entre criar uma função com
`(defn funcao [arg] arg)` e `(fn funcao [arg] arg)` ?

`(defn funcao [arg] arg)` é um atalho para `(def funcao (fn [arg] arg))`.
Como vamos criar diversas funções no nosso namespace, para
bibliotecas, para ser utilizado em outros módulos, ou porque apenas
faz sentido estar no contexto do namespace, o atalho `defn` é um
idioma bem comum e bem útil.

`(fn funcao [arg] arg)` é uma variação de `(fn [arg] arg)` que dá um nome a função.
Esse nome estará disponível dentro do contexto criado pela função,
referenciando ela mesma.

Fora daquele escopo, você ainda não tem o valor associado a função
que você criou.

Na maior parte do tempo que você quiser criar uma função com um
nome, você vai acabar usando `defn`, já que assim ela estará
disponível em todo o namespace.

O próximo caso de criar funções mais comum sera funções anonimas,
como callbacks ou funções de alta ordem (map, filter). São funções
importantes para o contexto local, e não serão utilizadas em outros
lugares do seu namespace.

Funções com nomes, como `(fn nome [])` são uteis para identificar
intenção ou ajudar a se localizar quando exceções acontecerem, ou
para casos recursivos de callbacks.

Vamos supor que temos uma função que permite identificar uma
mudança no sistema e executa um callback. Assim que o callback for
executado, nos precisamos registrar que estamos interessado em
identificar mudanças novamente.

```clojure
(onChangeIdentified
 (fn funcao []
   (notify "admin@example.com")
   (onChangeIdentified funcao)))
```

O exemplo acima notifica um administrador assim que uma mudança no
sistema for identificada, e logo depois registra outra chamada para
executar de novo no final.

Casos de recursão da mesma função fazem melhor uso de `recur` ao
invés de função nomeada. Com `recur`, nos vamos evitar de chegar no
limite máximo de chamadas de função (StackOverflow)

```clojure
;; Ao invés de utilizar funções nomeadas
((fn recursiva [index]
   (if (= index 0)
     "Done"
     (recursiva (dec index)))) Integer/MAX_VALUE)

;; utilize o recur
((fn recursiva [index]
   (if (= index 0)
     "Done"
     (recur (dec index)))) Integer/MAX_VALUE)
```

# Links

-   [Documentacao do Clojure sobre o def](http://clojure.org/special_forms#Special Forms--(def symbol init?))
-   [Documentacao do Clojure sobre o let](http://clojure.org/special_forms#Special%20Forms--(let%20%5Bbindings*%20%5D%20exprs*))
-   [Documentacao do Clojure sobre o fn](http://clojure.org/special_forms#Special%20Forms--(fn%20name?%20%5Bparams*%20%5D%20condition-map?%20exprs*))
-   [Documentacao do Clojure sobre o recur](http://clojure.org/special_forms#Special%20Forms--(recur%20exprs*))

Obrigado [Mariane](https://twitter.com/mariane_sm), [Erick](https://twitter.com/erickpintor) e [Renan](https://github.com/renanreismartins) pelo review.
