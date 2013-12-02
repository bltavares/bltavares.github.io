---
layout: post
title: Thoughts about variadic functions
tags:
- coding
- design
---

I've been analyzing languages and their features.
This is part of a bigger quest, which is helping me think of useful features for a interesting personal project that is coming up in the future.

I would like to talk about variadic functions,
  and do a quick analyses on why I find that it is not a very useful feature for languages with array literals.
  (or any language that makes it easy to make languages)


## Examples of variadic functions

On the [Rosetta Code](http://rosettacode.org/wiki/Variadic_function)
you can find several examples of variadic functions on different languages.

Lets use a one Java sample that we can find on Rosetta Code of a Java variadic function:

```java
public static void printAll(Object... things){
  // "things" is an Object[]
  for(Object i:things){
    System.out.println(i);
  }
}
```

A variadic function is a bit of syntax sugar when you want to pass several arguments to the function

```java
printAll(4, 3, 5, 6, 4, 3);
printAll(4, 3, 5);
printAll("Rosetta", "Code", "Is", "Awesome!");
```

In Java, creating arrays is quite verbose. Having that `Object...` is a quite sweet syntax sugar.


Now, lets take a look on a more functional language.

```clojure
(+ 1 2) ;=> 3
(+ 1 2 3) ;=> 6
(+ 1 2 3 4) ;=> 10

(< 1 2) ;=> true
(< 1 2 3) ;=> true
(< 1 5 2 3) ;=> false
```

The function `+` and `<` are variadic functions in Clojure.
You can pass as many arguments as you want, as long as you are typing each argument.
If you have dynamic values (e.g: variables), things will look quite similar.

```clojure
(+ 1 x)
(+ 1 x y)
```

Having a variadic function is quite handy when you are **typing** each of the arguments.
In case you have a list of values that you want to sum, the implementation of the language for that syntax sugar
can get in the way.

As we can see in Clojure, `+` does not accept lists.

```clojure
(+ '(1 2 3)) ;=> NOPE
```

To accept lists you need to change your approach.

```clojure
(apply + '(1 2 3))
```

## What I would rather see
I find that variadic functions gives you much less benefits on non-verbose languages.
The benefits happens as long as you are typing each of the arguments of the function,
    with them being either a literal value or a dynamic value.

When you start having dynamic values, that you want to apply it, the variadic function just turns out
to not be as powerful as it sounded.

```clojure
(defn +' [list] (reduce + 0 list))

; As long you are typing yourself the values, variadic functions feels better
(+ 1 2)
(+ 1 2 a)
(+ 1 x c (first xs))

; If you introduce dynamic values, the variadic functions need a hand
(apply + xs)
(apply + (concat xs [1 2 3]))


; However, if we had fixed arguments functions, we could do the same.
(+ 1 2)
(+' [1 2 3])
(+' [1 2 x])
(+' [1 x c (first xs)])

; And the style doesn't change if you introduce dynamic values
(+' xs)
(+' (concat xs [1 2 3])
```

The changes doesn't seems much, both will work.
But there is another point that I find more pleasant to have fixed-arity functions.

## Currying

I am a big fan of currying. Lots of time, a simple lambda could have been removed.
Let's try out to create a function that adds 1 to the next argument in Clojure.
Assuming `+` is a binary operation, lets try out.

```clojure
(def increment-1 (+ 1)) ;=> 1
(increment-1 2) ;=> NOPE
```

Looking back, our `+` function is a variadic function, and after you pass the arguments to it, it will assume the function is complete.
To accomplish what we wanted to do, we need to use a different method.

```clojure
(def increment-1 (partial + 1))
(increment-1 2) ;=> 3
```

Using `partial` is quite noisy when chaining with function calls.

```clojure
(map (partial + 1) '(1 2 3))
; compare to a curried version
(map (+ 1) '(1 2 3))
```

Having variadic functions makes currying [very](http://lambda-the-ultimate.org/node/3024#comment-44195) complicated.

You can still use `partial`, but it is not the same thing.
On can try to [simulate](https://github.com/leonidas/codeblog/blob/master/2012/2012-02-17-concatenative-haskell.md)
variadic functions in curried languages, but it is something that you wouldn't need most of the time.

By making composing functions more complicated, you have to change your design also.


### Design changes for not allowing currying

Let's look again at Clojure. Not having currying make you need to rely on the `->` and `->>` macros.
It will allow you to rewrite the form to append the result of the next operation as the first argument or as the last one.
It will make you design your code to either be thread-first or threaded-last.

Having bits of functions with the desired dynamic part (the part you don't usually want to fix) as the last argument (map, reduce and so on)
won't hurt you much. You can always use the `partial` function that comes shipped in.
But what happens when the function was designed to use with thread-first?

```clojure
(use 'clojure.string)

(map (partial join ",") '((1 2 3)))

(map #(split % #",") '("hello,world"))
```

`split` is an example of a Clojure function designed to be used with thread-first macro,
  while `join` is designed to use with a thread-last macro.

```clojure
(use 'clojure.string)

(-> "hello,world"
    (split #","))

(->> '(1 2 3)
      (join ","))
```

Dealing with collections will tend to make your functions to have the operators to behave under `->>`,
        while dealing with Java interop will tend to make your functions have the first argument thread-able by `->`.

Sometimes, you will need to decide how are you designing your functions arguments based on where it is being called,
          leading to the "other threading" to have to deal with it.


## Conclusion
As an awesome syntax sugar for verbose languages, variadic functions can not be as sweet for other languages.

Having fixed-arity functions and currying as the design of the language allows you to have much more consistence in the design of your code.

I personally would trade variadic functions any time in order to have currying.
