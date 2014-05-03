---
layout: post
title: Quick intro to Make
tags:
- devops
- building
---

Our daily job requires us to create files.
Sometimes we want to get a minified JavaScript file or compile a sass file into css.

We have several different tools to do such tasks. Rake, Grunt, Gulp, SCons and many others.

On the times of C, Make was the one.
It is present on many projects.
It is installed on lots of dev machines.
It has small requirements to run.
And it is very concise.

Make embraces the Unix style of communicating,
  providing pipes and calls to external commands like a shell would do to generate a file.

Let's see how we can write a Makefile for your project,
  no matter which main language it is written in.

## Writing your Makefile

While writing your Makefile,
  you may need to change the way you are used to defining your tasks.
The idea is to define which files should be _generated_ instead of defining the tasks themselves.


A Makefile is constructed of _rules_, each _rule_ using the following format:

```make
targets : prerequisites
    command 1
    command 2
    ...
```

We define a _target_ file that will be the output of the build.
Each _target_ can specify _prerequisites_ and a set of commands to build the _target_.
The commands must be indented with tabs to be part of the _rule_.

Lets take the following rule as example:

```make
target-file: source-file
    parse source-file --output target-file 
```
Whenever the `source-file` is newer than the `target-file` the command on the rule will be executed to generate/update it.

The common way of thinking on some other tools is to define first the sources, and how it will produce an output.
Instead, on Make, there is a reverse way of thinking, 
   which you declare what is the file you would like to have generated out of the build, the target,
   and declare the prerequisites of the target, in order to be generated.


## Making multiple files using the same rule

From now on, lets have in mind we want to get a minified JavaScript file out of source files.
Let's use a very simple project.

```
project
├── dist
├── index.html
└── src
    ├── render.js
    └── request.js
```

We would like to generate minified files for each of those `src` files.
A _target_ can be multiple files,
  with each of them mapping directly to a single _prerequisite_.

To define a relationship between the target file and its prerequisites,
   we can use the `%` character.
On the target, `%` will match anything,
   similar to file globbing on a shell,
   and replace the `%` character on the prerequisites side with what was matched previously.

```make
dist/%.min.js: src/%.js
```

We have defined a rule, where we want to generate one minified file on the `dist` folder for each JavaScript file on `src`.
We now need to tell it how the file will be generated from it sources.


## Automatic variables

Make provides you with some [Automatic variables](https://www.gnu.org/software/make/manual/make.html#Automatic-Variables).
They are filled in with information from the _rule_ it is running on.

We are going to use two variables, `$@` and `$<`, the _target_ name and the _prerequisite_ name, respectively.

With this you can build a rule that generates minified JavaScript when running the `minify` command:

```make
dist/%.min.js: src/%.js
    minify --output $@ $<
```

This rule will be expanded, and executed, as if you had written those lines:

```make
dist/render.min.js: src/render.js
    minify --output dist/render.min.js src/render.js

dist/request.min.js: src/request.js
    minify --output dist/request.min.js src/request.js
```

You can now run `make dist/render.min.js` and `make dist/request.min.js` and it will generate your minified files for you.
But this is still not ideal.

## Phony targets

Ideally, we would like to ask Make to minify all scripts with one command.
Lets start defining defining a _rule_ with the _target_ of `minify`,
     requiring the minified files as _prerequisites_,
     so we can run `make minify`.

So lets define a target:

```make
minify: dist/render.min.js src/render.min.js

dist/%.min.js: src/%.js
    minify --output $@ $<
```

There is no need do define a command to run for the rule,
      because the success definition for the target is to have the prerequisites satisfied.

As we talked before,
   Make expects you to define a _file_ as the target,
   and it checks for the the last modified date of the target file to know if it needs to update.

As long as there is no file called `minify`,
   there won't be a last modified date and it will assume it needs to create this allegedly `minify` file.
Also,
  we don't want a `minify` file to be created as part of our rule,
  nor would be ideal on the situation we create a file called `minify` by mistake,
  to stop our build to work because there is a modified date to check for now.

To solve this last issue we can make the target `minify` a prerequisite to a special target called `.PHONY`,
  which is the way to tell Make that the target is just a nice sound for a more complex set of requirements and not a file to be generated.

```make
.PHONY: minify
minify: dist/render.min.js src/render.min.js

dist/%.min.js: src/%.js
    minify --output $@ $<
```

Running `make minify` will now generate the files for you and update the ones that need to be updated.

## Calculating the generated files based on the source files

We can already generate our minified files,
  but what happens when we add a new javascript file?

So far, our set of prerequisites of the `minify` target is hardcoded.
Let's make our set of prerequisites dynamic, based on our list of source files.

First, lets grab all the source files and store on a variable.

```make
javascript_sources = $(wildcard src/*.js)
```

The `wildcard` function expands to the list of files that exists on the `src` folder, matching the pattern passed as argument. 
`src/*.js` means any file ending with `.js` in the `src` folder.

On our project, it would be expanded to the following.

```make
javascript_sources = src/request.js src/render.js
```

We would like to have files with the same basename in a different folder,
  following a pattern, substituting some parts of it.
Make has a function, called `patsubst`, an abbreviation for "pattern substitution".

The `patsubst` function receives a pattern to match, a pattern to substitute and the paths to apply the substitutions.
  The matching pattern can use the `%` character to match anything,
  similar to the `*` character as we saw on the `wildcard` function,
  while passing the grabbed value to the `%` on the substitution pattern.

For example:

```make
minified_javascript = $(patsubst src/%.js, dist/%.min.js, src/request.js)
```

will expand to

```make
minified_javascript = dist/request.min.js
```

Instead of using a single string on the end, we can substitute it with our previous list of files set on the `javascript_sources` variable.

```make
minified_javascript = $(patsubst src/%.js, dist/%.min.js, $(javascript_sources))
```

## Putting it all together

After having our variables defined, we can tell the `minify` target what are the prerequisites it has.

```make
javascript_sources = $(wildcard src/*.js)
minified_javascript = $(patsubst src/%.js, dist/%.min.js, $(javascript_sources))

.PHONY: minify
minify: $(minified_javascript)

dist/%.min.js: src/%.js
    minify --output $@ $<
```

Whenever we add a new file, `make minify` will add it as a prerequisite and generate it.


## Parallelising the build

In this situation, our minified files can be generated in parallel.
Make accepts a job option,
    `-j`,
  where you can define the maximum number of jobs to run,
    like `make -j 2 minify`,
  or let it use the maximum amount by not specifying a number,
    like `make -j minify`.

If you made this far, I hope you liked this quick intro to Make.
If you are curious or want help on defining more complex tasks, the [manual](http://gnu.org/software/make/manual/make.html) can provide more information. 

Happy coding (:
