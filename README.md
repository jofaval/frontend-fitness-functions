# Frontend Fitness Functions

Fitness Functions oriented for Frontend Development

## Inspiration

I read them on [Fundamentals of Software Architecture: An Engineering Approach](https://amzn.eu/d/9ElDpva). But they're greatly expanded upon in [Building Evolutionary Architectures: Automated Software Governance](https://amzn.eu/d/125m9yo).

## Definition

Fitness functions are functions that track the evolution of the software architecture and help maintain governance through automation.

## Why using a CLI?

Command Line Interfaces are a great way to offer automation, they can be connected to a CI/CD pipeline, are generally easy to use, can be abstracted to simplify groups of parameters. They have the potential to be great.

They're developed using TypeScript simply because this functions will be used on a frontend development environment, where JavaScript, and hopefully typescript, is the language of use, and the one installed. Go, Rust, Python could also be used if agreed upon your team, I'd rather stick with TypeScript for this decisions.

## Why no ADRs?

No Architecture Decision Record is provided simply because these are decisions I've seen in different frontend projects, ones I've seen no linter (file structure linters are not as great as one could wish in JavaScript).

They all shared the idea of standardizing the codebase and allowing for an easier file search experience.

## Validators and terraformers

I would group fitness functions, oriented to frontend, between validators and terraformers.

The most common use case will probably be validators, which will determine if the current codebase is up to the decision it validates, such as: all files should indicate the topology (.type, .helper, .utils, .component, .layout, etc...).

In my personal opinion, validators detect inconsistency in the codebase but we (engineers in charge of the architecture governance) should provide tools to fix what's wrong, that's where terraformers come into play. Following the previous example, it would rename the filename so that it adheres to the architecture decision.

Validators will run on the CI pipeline, terraformers should only run on the local development environment, _a CI/CD pipeline should **NOT** modify the codebase and/or commit changes_, and will help make the codebase valid.
