# Semantic tokens in action
🌐 View app at https://semantic-tokens-44u9.vercel.app/

Design tokens can be organized in the following tiers:
1. Core/Primitive
2. Semantic
3. Component

Instead of going all-in with component design tokens it's often recommended to start with a simple system only based on the core and semantic tiers.

Inspired by [Shaper](https://shaper.design), this app helps you understand why you need semantic tokens to style your components.

Use existing CSS variables from your design system and tweak the style of your components to make better design decision at scale.

## Running the project
1. `yarn` (to install all dependencies)
2. `yarn dev`

## Code architecture
- Created with [Svelte](svelte.dev) and TypeScript
- Design tokens created as CSS variables
- Style written in SCSS and organized following [the SMACSS architecture](http://smacss.com/) and [ITCSS from Harry Roberts](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).
- Components organized following the [Atomic Design taxonomy by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)

## To Do
- [x] Create Text component
- [x] Style input
- [x] Style button
- [x] Test Stack component in several places
- [x] Get CSS variables from document instead of hardcoded values
  - [x] Border radius
  - [] Text style font size
  - [] base space default value
- [] Settings panel
  - [x] Change container, input, and button border radius
  - [] Change text style font size
  - [x] Change input/button height
- Update README
  - [x] Add SMACSS architecture info + Inverted Triangle CSS by Harry Roberts
