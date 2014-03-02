---
layout: post
title: "Story from the trenches: Baseline workflow"
tags:
- coding
- baseline
---

Hi there you,

Today I would like to show a bit of my workflow with [Baseline](https://github.com/bltavares/baseline).
I've been using it on several different personal ideas and exploring others' ideas.

The intention of this blog post is to show the usage of ephemeral,
    provisioned development environments,
    that are easily reproducible and
    how I use them to tinker with different languages and projects.
 
On this blog post, I will share a real workflow that I've done using Baseline.

## Once upon a time: Hack day spike

On my current project, we have what we call The Hack Day.
It is a day to hack.

We share pains and ideas and try to fix, improve, or just try different approaches and technologies.

I like having a lean development setup, with few applications that I don't use.

One good candidate for keeping environments contained is a container.

Docker is a good candidate for using containers.

On my last Hack Day, I decided to spike on putting our test runners,
   less compilers and so on in its own containers.
First, I would need to discover the minimal amount of tools that the project needs to run,
    so I could containerise it.

I started the day pulling the latest changes from the project.

```bash
cd project
git pull
[...]
```

I use a Mac, which is _slightly_ different than what I would have running on a container.
And it is all configured already.

Removing all the configuration from my working environment wouldn't be a good idea.
While it is a day for hacking, we need to go back to delivering features the next day.

Also,
  it would be preferable to get the setup working on a Linux machine, which is what my container will run.

Baseline came to rescue.

### Init the spike!

On the project folder, from my Mac, I type:

```bash
baseline init
baseline up
baseline ssh

vagrant@baseline $ cd /vagrant
```

At this moment, I had a minimal Linux box.
The code is being shared under `/vagrant`, and I could use all my editor tools installed on my Mac to develop.

"This is what I need to get started."

The following step is to run frequent commands we use on the codebase,
    for example,
    to bringing up the less server.

And errors would come up, lurking behind every <ENTER>.

'node: Command not found'.
'npm: Command not found'.
'Couldn't find "less" module'.

I would list the requirements,
  whenever those errors suddenly show on my screen.
With the list of required tools on hand, 
     it was time to start writing it down on a Dockerfile.

### What's in the container?! What's in the container?!

The Dockerfile is a set of instructions that helps docker to build a container.
There you put your dependencies, 
      commands to run,
      file dependencies,
      environment variables and
      the all the configuration to have a container.

It is important to write a Dockerfile,
   it enables other people to reproduce your container.

From my Mac,
     I bring up the text editor of my choice, and 
     write out a minimal Dockerfile.

```
FROM ubuntu:12.04

RUN apt-get update -y
RUN apt-get install -y nodejs

CMD bash
```
This is enough to have a container with node installed.

Because I am already using Baseline, I could install docker very easily on my VM.

```bash
vagrant@baseeline $ provision docker
[...]
vagrant@baseeline $ docker help
```

And I could start building containers for our project.
Thanks to Baseline, I had the spike done by the end of the day.

### Wrapping up

```bash
baseline init
baseline up
baseline ssh
```

This is how I usually start an idea.
I am free to mess around, knowing I can easily spin up another VM from scratch.

This is one example of a workflow with Baseline.
There are more workflows waiting to be discovered.

The docker experience on that day could become a blog post on its own (and will become eventually).
