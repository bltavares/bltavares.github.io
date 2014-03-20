---
layout: post
title: Baseline and Vagrant integration
tags:
- baseline
- vagrant
---

Hi there.

As part of the conversations I have with colleagues about Baseline there is often a confusion on how does it integrate Vagrant and where Puppet fits on the overall story.

I will address the Baseline decisions and structure of a project on this post.

## What constitute a baseline project?

The general structure of a project with Baseline enabled is the following:

```
|- project
|  |- .baseline
|  |  |- Vagrantfile
```

`baseline init` receives as argument the target project and a git url.
It will check it out under `project/.baseline` folder and the only expectation is to have a Vagrantfile in there.

The intention with that was to have the Vagrant project outside of the target project, to let you reuse environments.

You could link `.baseline` to the target project folder, and have all the commands working.
`ln -s .baseline .` on a project that comes with a Vagrantfile and voilà.

## Baseline as a wrapper

Baseline delegates everything to Vagrant, with the addition of some extra environment variables.
You will have access through the `ENV` constant.

```ruby
ENV['baseline_box'] # ;=> true
ENV['host_name'] # ;=> concatenated environment options or baseline when not set
```

Because it is located in a directory down the target project, you need to add a `synced_folder` pointing up, `..`, on the presence of `ENV['baseline_box']`.

Unless you use the link approach for the `.baseline` folder, you will want to add this configuration.

Apart from that, Baseline will delegate it to Vagrant on most of the commands.

## That is it
Baseline is a simple command line tool. The magic relies on the project it checks out.
That project should provision and decide the environments to bring up.

Using an outside project configuration is ideal when the project does not provide a Vagrantfile, or to quickly play with something new without messing your current project/computer.