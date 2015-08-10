---
layout: post
title: Why I'm having so much fun with Rust
tags:
- coding
- rust
---

So, Rust is stable and has 1.x on it's name. And now I'm playing with
it as there is no more syntax breaking changes. And it is being a lot
of FUN!

This blog post is an attempt to write up many of the reasons I'm
liking the language and the community.

# Being exposed to lower level concepts

I've been on web development for a while already. Working on Garbage
Collected languages under the HTTP Request Response cycle, both on
the client side and the backend means that many of the times I
barelly need to worry about memory stuff.

Having to learn about differences beteewn having a value on the Heap
or the Stack is something new to me. And it is really fun. Knowing
that there are different allocation and dis-allocation times and how
dependent values may behave, while the compiler has your back on it
is fun.

As Rust also output binaries and have interop with C. This means I'm
learning about compilers, runtime dependencies, libraries and
embedding. There are people on the community that consider a 14kb
binary too big. That is so far from what I'm used to, which means
there is a lot to learn.

# Amazing community

Rust community is very lively. The IRC channel is always full of
chats and people try to be helpful and inclusive. This is a big plus
as they are trying to build a new language, which makes everybody
beginners most of the time.

The language development has a [code of conduct](https://www.rust-lang.org/conduct.html), as well as the
forum, the [IRC](https://chat.mibbit.com/?server%3Dirc.mozilla.org&channel%3D%2523rust), the [subreddit](http://rustcamp.com/conduct.htmlLink:%20http://rustcamp.com/conduct.html) and the [first conference](http://rustcamp.com/conduct.html). The
moderators try to no feed trolls, specially when others try to
compare Rust against other similar languages, in a battle 'til death.

> [&#x2026;]
> 
> Both communities talk respectfully about the other, despite the languages having been pit against each other by the world.
> 
> [&#x2026;]
> 
> I think if someone placed the Rust and Go community in a room and asked them to fight, we'd probably just all order pizza and geek out over languages.

Quoted from [a comment](https://www.reddit.com/r/rust/comments/3cj69b/why_go_and_rust_are_competitors/csw5t5v) about Go vs Rust.

I'm always lurking on the IRC channel. Many of the times I have no
clue what is being discussed, but that keeps teasing my curiosity.
When I interact, as a beginner, I never experienced down talk, but
interest in helping me.

# Evolving language

The compiler is amazing and is on constant evolution.
The way that changes are proposed feels very interesting from an
outsider. All proposed solutions comes from a public discussed [RFC](https://github.com/rust-lang/rfcs),
with examples of the benefits of implementing the change, alternatives
implementations, drawbacks. They are proposed as Pull Requests, and
when they get accepted, after all the discussion, it gets merged and
implemented on the compiler.

Carol Nichols wrote a bit on this [post](http://carol-nichols.com/2015/08/01/rustc-discovery/) about getting a change landed
in, and it does feel that the community is open to change just by
reading it.

# Lot of potential

As it is an evolving language and really new, there is a lot of
libraries that need to be written. As you go, you will find the need
of a JSON parsing tool, or async I/O, which is still in development
as libraries. That means you can help with that! Get that sweet
little IRC bot written with little competition or [check what the
community wants to see being developed now that Rust is 1.0.](https://users.rust-lang.org/t/survey-what-libraries-would-you-like-to-see-in-the-future/2234)

One other thing that I find interesting. Many of the concepts that
on other languages are implemented on the language itself, are
possible as libraries. For example, [async I/O](https://github.com/carllerche/mio) or [green threads](https://github.com/BurntSushi/chan), are
already being developed as libraries. That means that the language
is simple and powerful enough to delegate some of the decisions to
libraries, when the community feels the need.

Many of the concerns that the team have is to be able to have a
"minimal runtime" and "efficient C bindings". This means embedding,
while still maintaining "guaranteed memory safety" is a
thing. All this quoted goals are extracted from [the main page of the
project.](https://www.rust-lang.org/)

Writing a Ruby gem that uses Rust code: a [thing](http://blog.skylight.io/bending-the-curve-writing-safe-fast-native-gems-with-rust/).

Writing node.js modules that uses Rust code: a [thing](https://blog.risingstack.com/how-to-use-rust-with-node-when-performance-matters/).

# Powerful type system and compiler

I'm a big fan of algebraic data types, as it is implemented in
Rust. Modeling the application with enums and expressing the
guarantees of a function through it's type signature makes code
navigation and documentation so much more insightful. That means
that `Option<String>` as the result of a function call could
possibly not have the value I want because of something, and that is
better than having a null pointer exception blowing up your runtime.

It also have niceties like pattern matching and is immutable by
default. The combination of features makes you feel you are writing
a high level functional language, with the power of small runtime
of a system language. I'm quite fond of this features.

The compiler is quite smart and yells at you when you make
mistakes. After you get used to being pointed your mistakes on
compilation, you start to thank `rustc`. Things that could lead to
accessing uninitialized memory means that your code won't even
compile. And for me that is a great thing, as I don't know much
about dealing with memory myself. I much prefer to let a program do
that instead.

Many of the error messages comes with a longer explanation of why
you are not allowed to do such things. On the error, there is a
suggestion to run `rustc --explain E0001` to read more about, and
you can check many of the errors on [this page](http://doc.rust-lang.org/error-index.html).

# Documentation is first class

To be honest, it took me a while to get used to the documentation
format and links. There is a lot of information on it, but it is
treated really well by the community.

You can write example code on your comments, and it is compiled
during the test phase! It is a failure of compilation if your
examples are bad.

Because the function signature is explicit, the documentation tool
can generate links between them, and you can happily navigate.

# Some killer projects

As Mozilla is planning to use Rust on it's rendering engine for
Firefox, there is already a killer-project being produced. And many
of the development is being done on small, focused libraries, which
others could benefit from. One example, the [html5ever](https://github.com/servo/html5ever) is the HTML
parser being used by [servo](https://github.com/servo/servo), the new engine. It means you can benefit
of the parsing engine that powers a browser on your own project.

Big win here.

# Conclusion

The language has it's issues, like some syntax peculiarities, which
is rather pointy (hi, turbo-fish operator `::<>`), the compiler yells
at you and you catch yourself many times thinking if you need a
string on the Heap or on the Stack, but it is being really FUN!

The potential this language has, with the combination of features
and placement of the low-high level programming spectrum is quite
unique. I will keep exploring Rust for sure.
