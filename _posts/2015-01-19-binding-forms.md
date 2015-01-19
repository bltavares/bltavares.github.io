---
layout: post
title: binding-form e associação de valores em Clojure
tags:
- coding
- design
- clojure
---

Se você der uma lida na [documentação](http://clojure.org/special_forms) do Clojure você vai acabar
encontrando `binding-form` escrito em alguns lugares que permite você
associar valores a símbolos, como no caso do `let` e do `defn`.

No Clojure, existe o conceito de `forms`, que se refere ao formato da
estrutura de dados que aquela função ou macro aceita.
Lembrando que código também é dado em Clojure, então formas podem se
referir a forma da interface de um método ou macro.

Quando nos referimos a forma de associação, estamos falando da
estrutura de dados que podemos utilizar para dar valores a símbolos em
um contexto.
Vamos utilizar o `let` como exemplo. Com ele, podemos introduzir um
novo contexto com símbolos associados a valores, e ele possui a forma

`(let [pares-de-associação...] expressões...)`

Cada par de associação ira associar o primeiro elemento com o valor do segundo.

```clojure
(let [par1 "valor1"
      par2 "valor2"]
  (str par1 " e " par2)) ;; # => "valor1 e valor2"
```

Essa é a forma mais simples de associação: utilizar um simbolo para um
valor.
A ideia de desestruturar um valor na hora da atribuição não é exclusiva
do Clojure.

Mas existem outras formatos que podemos utilizar, chamadas de desestruturação.

# Desestruturação de Listas

O primeiro exemplo que vou utilizar esta na desestruturação de listas.
Podemos na hora de associar os valores, pegar elementos de dentro da lista diretamente.

Você pode inspecionar a estrutura de dado que será atribuída aos
símbolos e relacionar partes dela ao invés de ter que chamar funções e
fazer criar variáveis consecutivas.

```clojure
(let [lista [1 2 3]
      primeiro (nth lista 0)
      segundo (nth lista 1)
      terceiro (nth lista 2)]
  (+ primeiro segundo terceiro)) ;; => 6

(let [lista [1 2 3]
      [primeiro segundo terceiro] lista]
  (+ primeiro segundo terceiro)) ;; => 6
```

Escrevendo um `let` assim, podemos explorar esse aspecto da associação em Clojure.
Ao invés de tentar associar o valor da lista apenas para um símbolo,
nos criamos uma outra forma, uma lista com símbolos na posição dos
valores que queremos associar a eles.

Esse tipo de desestruturação indexada funciona para estruturas
sequenciais, que respondem a `nth`, como Strings, Listas e Vetores.

```clojure
(let [[x] "exemplo"
      [y] '(1 2 3)
      [z] [4 5 6]]
  [x y z]) ;; => [\e 1 4]
```

Para estruturas sequenciais, ainda temos mais algumas opções de formas
para desestruturar.
Podemos combinar a atribuição de valores posicionais e capturar o
restante da estrutura em outro símbolo.

Trabalhando com listas, é bem comum ter interesse no primeiro
elemento, e fazer uma recursão no resto da lista.
Podemos utilizar a forma `[a b c & rest]` para pegar os valores
restantes que não foram atribuídos por índice.

```clojure
(let [lista [1 2 3]
      head (nth lista 0)
      tail (nthnext lista 1)]
  [head tail]) ;; => [1 [2 3]]

(let [lista [1 2 3]
      [head & tail] lista]
  [head tail]) ;; => [1 [2 3]]
```

E uma ultima opções que temos ao desestruturar sequências, é pegar o
valor completo, mesmo depois de desestruturar, com a forma de `[a b c :as tudo]`.

Podemos combinar os exemplos anteriores em uma única forma.

```clojure
(let [[a b c & resto :as letras] "Ola Mundo"]
  [a b c resto letras]) ;; => [\O \l \a (\space \M \u \n \d \o) "Ola Mundo"]
```

# Desestruturação de Mapas

Uma segunda estrutura de dados muito utilizada em Clojure são os Mapas.
Da mesma forma que temos facilidades para trabalhar com valores dentro
de Sequências, temos um `binding-form` para Mapas. Eles permitem
desestruturação baseada na chave, para que você possa associar os símbolos
valores direto no contexto.

Desta vez meus exemplos serão utilizando funções. Definir uma função
no nível do namespace atual tem a seguinte forma.

`(defn nome forma-de-associação expressões...)`

A forma de associação será comparada contra os argumentos na hora de
chamar a função, e tera os símbolos associados aos valores dentro do
contexto das expressões.

```clojure
(defn exemplo1 [mapa]
  (str
   " :chave => " (:chave mapa)
   " :nome => " (:nome mapa)))

(exemplo1 {:chave "abcd", :nome "Bruno"}) ;; => " :chave => abcd :nome => Bruno"

(defn exemplo2 [{chave :chave nome :nome}]
  (str
   " :chave => " chave
   " :nome => " nome))

(exemplo2 {:chave "abcd", :nome "Bruno"}) ;; => " :chave => abcd :nome => Bruno"
```

Cada um dos símbolos dentro da forma `{símbolo chave símbolo chave}` será
associado com o valor da respectiva chave no Mapa.

As vezes, nos podemos querer um valor padrão quando uma chave não
estiver presente no Mapa que estamos desestruturando.
Com a adição de um `:or` na forma, nos podemos dar valores padrões aos
símbolos que não foram associados a nenhum valor.

Ele passa a ter a seguinte forma, como você vera no exemplo.

`{símbolo chave ... :or {símbolo valor símbolo valor}}`

```clojure
(defn exemplo1 [mapa]
  (str
   " :chave => " (:chave mapa "<sem chave>")
   " :nome => " (:nome mapa "<sem nome>")))

(exemplo1 {:chave "abcd", :nome "Bruno"}) ;; => " :chave => abcd :nome => Bruno"
(exemplo1 {:nome "Bruno"}) ;; => " :chave => <sem chave> :nome => Bruno"

(defn exemplo2 [{chave :chave
                 nome :nome
                 :or {chave "<sem chave>" nome "<sem nome>"}}]
  (str
   " :chave => " chave
   " :nome => " nome))

(exemplo2 {:chave "abcd", :nome "Bruno"}) ;; => " :chave => abcd :nome => Bruno"
(exemplo2 {:chave "abcd"}) ;; => " :chave => abcd :nome => <sem nome>"
```

Da mesma forma que fizemos nas Sequências, podemos atribuir o valor do
Mapa inteiro utilizando `:as` enquanto estivermos desestruturando o valor.

```clojure
(defn example [{a :a :as mapa}]
  [a mapa])

(example {:a 1 :b 2}) ;; => [1 {:a 1, :b 2}]
```

Muitas das vezes, quando trabalhando com mapas, nos utilizamos um
símbolo como o mesmo nome que a chave do valor que buscamos.
Para evitar digitar a mesma palavra, temos um atalho para buscar os
valores de um mapa, de forma reflexiva.

O Clojure tem mais 3 opções para buscar valores na forma do Mapa:
`:keys`, `:strs` e `:syms`. Esses atalhos recebem uma vetor de
símbolos que serão convertidos para keywords, strings ou símbolos
respectivamente, antes de fazer a consulta no mapa.

```clojure
(let [mapa {:a 1 'b 2 "c" 3 :d 4}
      {:keys [a d]} mapa
      {:syms [b]} mapa
      {:strs [c]} mapa]
  [a b c d]) ;; => [1 2 3 4]
```

Nos podemos combinar todas essas opções para definir nossa forma de
associação e desestruturar os valores.

Um ultimo ponto importante é que podemos combinar todas essas formas
aninhadas. Podemos extrair o terceiro elemento de uma sequência
associada a uma chave em um mapa utilizando o que vimos agora, por
exemplo.

```clojure
(def meu-mapa {:chave "abcd"
               :valores [1 2 3 4 5]})

(defn terceiro-valor
  [{[_ _ terceiro] :valores}]
  terceiro)

(terceiro-valor meu-mapa) ;; => 3
```

# Exemplos de código

Utilizar os vários formatos de `binding-form` é uma pratica bem comum
em projetos Clojure, e você pode conferir pelo Github como as pessoas
costumam utilizar.

-   Extraindo valores de mapas - [debug.clj](https://github.com/Raynes/lazybot/blob/master/src/lazybot/plugins/debug.clj#L27)
-   Pegar o primeiro grupo capturado por um regex - [ping.clj](https://github.com/Raynes/lazybot/blob/master/src/lazybot/plugins/debug.clj#L27)
-   Valores de mapas dentro de mapas - [compiler.clj](https://github.com/clojure/clojurescript/blob/master/src/clj/cljs/compiler.clj#L53-L54)

Com o tempo você vai começar a ver onde seu código ficaria melhor
utilizando as desestruturações.

# Mais links

-   <http://clojure.org/special_forms#binding-forms>
-   <https://gist.github.com/john2x/e1dca953548bfdfb9844>
-   <https://clojurebridge.github.io/community-docs/docs/clojure/destructuring/>
-   <http://www.braveclojure.com/do-things/#3_3_3__Destructuring>
