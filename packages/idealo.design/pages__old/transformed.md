_Fux_ is idealo's Design System for products and experiences. With our Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a community of contributors.

## Why
Development of digital products is getting more and more complex. Engineering, Designer, Product Owners and Business Owners all have their own perspective on the product they're working on together. In order to efficiently tackle cross-cutting concerns like Accessibility, Performance, Visual Consistency and Information Sharing it is helpful to define and curate a common mental model of the ongoings.

### It's about the processes
Fostering a culture of collaboration between all the stakeholders it helps organizing team dynamics, relationships, documentation and code. As a Catalog for idealos Component Model it helps creating abstractions over boring repetitive tasks and gives everyone more time to innovate, focusing on quality and solving novel problems. Newly joined idealos also greatly benefit from getting an overview of the ongoings.

### Facilitate Code Reuse
Last but certainly not least, we will eventually be able to enjoy the blessings of a more common code base. Being able to reuse battle-tested code that is developed and used throughout the company leaves teams more time to think about Domain level responsibilities and worry less about lower level aspects like browser support, accessibility, performance or compatibility. Again, this is not about imposing technologies on everyone but more about setting up a process of finding the least common denominator while abstracting away technical details and defining conventions and interfaces.

## How
Currently, we're working hard on setting up the fundamentals being this Catalog site, Code Repositories, CI/CD, Communication Channels, encouraging the first contributors and researching existing code for integration possibilities and required migration strategies.

We will try to incrementally onboard more and more teams and codebases into the _Fux_ process to learn from it, one kink at a time. Altogether, we will figure out how the Frontend Development works best for all of us, balancing out abstraction versus flexibility.

### Technology
We already have a system that makes money! Therefore, while being a fun intellectual adventure there would be little to no sense in simply replacing technology X with technology Y just to replace it with technology Z in the future. Instead we should focus on abstractions that make sense to our business. This is exactly, what a UI Component Model is supposed to express.

The Library of UI Components aims to make performance and accessibility first class citizens whilst staying agnostic to certain vendors and providing multiple adapters and interfaces for current systems. To increase adoption further, using the _Fux_ UI Components does not mean that there's no way to opt-out for certain variations; in contrast it is anticipated that adopters will implement their UI Components locally and, when they've proven their business value and general reusability.

### Process
#### New Component
shorter iteration cycle between Eng and UX

prove component usability within the team's scope (e.g. A/B testing)

extract out component and add to _Fux_ Repo

#### Reuse existing Component
Just use it in your project

#### Update existing Component
If it's a backwards-compatible addition: Add it

If it's a breaking change: Discuss with the _Fux_ team (clone or organize a refactoring with consumers)

#### Deleting
Unless it's a Core component (e.g. Inputs), Components will be deprecated and archived/deleted if no longer in use.

## Contributing
By now, you should have understood that the Design System is not just a simple bunch of packages on a site. If interested, we encourage you to join our efforts and participate in updating our Product Development process. No matter the role you're in, you're always welcome to bring your specific perspective to the project, be it code, design or copywriting contributions or new ideas. Feedback is welcome!