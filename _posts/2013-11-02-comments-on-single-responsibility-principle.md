---
layout: post
title: Comments on Single Responsibility Principle
tags:
- coding
- design
---

Juan [blogged](http://juanibiapina.com/articles/2013-11-01-single-responsibility-principle/) about SRP and it made me analyze some of my previous encounters with feature envy classes.
I am not sure if it something common to happen on every class that is a big feature gluton, but it was enjoyable to notice this on the last refactoring on the codebase of one of the projects.

**Classes that respect SRP are not visited frequently**

We had this class called Config.
The Config had everything on it.
It had location of files, it had methods to write to files.
It had property lookups on it.

We used to revisit the class often, add some methods, tweak others and pass it all around.
One day we realized that it was doing to much. And we refatored it to 3 different objects.

We then created one object called ConfigLocation that deal with the file location.
You give it an object that should be in a file and it gives you back a File.
Simple and soft.

Also, a property lookup was removed. It was not required anymore.
The variables were used to define which folder should the object be in and also the $PREFIX.
Less code, less bugs.

And the file writing: We wrapped it on a simple class that we pass a file and a string.
No need to deal with Stream and so on.

And then we never revisited those classes again.
