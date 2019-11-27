# Scaffold Setup

## Installation
Run npm i to install dependencies
- npm run dev 

## Build Process
compiled files are pushed to the .next directory


# Overview
Stack used:
- React 
- Nextjs 
- Apollo

Other Packages Used:
- Grommet UI Library
- Styled Components
- Jest

## Use Cases
This scaffold is meant to be a quick start for streamling development on front-end projects.

This project is ideal for: 

- Small businesses or simple websites
    - statically rendered content via public directory
- For larger businesses 
    - Integrate with a headless CMS like Kontent, Contentful, etc
- PWA or specialized front end project

## File Structure
The file structure is still being optimized but there are a few key takeaways.

### public
All static content such as images, gifs, icons etc need to be in the public directory this is used by nextjs when serving content. 

#### static
Additional directory for static content. robots.txt etc. 

### src
all source code goes here
#### components
react components, these can leverage styles but do not have any styling added themselves. 
#### compositions

#### pages
nextjs leverges 
#### services
useful services
#### styles
styled components go here, css normalization, themes, base layout etc. 

## Linting
Linting is TBD, need to be setup and guidelines established

## Styled-Components
This scaffold uses styled-components and gromment. The overall goal is to leverage grommets UI library as a base and build new or improved components upon it. Components should leverage theme styles as much as possible for scaleability. 

When adding styles best css practices should be applied with a focus on these principles.
- normalization
- DRY 

## Theming 
The base theme is in styles/base/theme.json, this theming structure leverages grommet's theme and is piped into the themeprovider for consistency. Additions should be added in a non conflicting manner to the theme file. 

## Testing
Uses jest for testing, components should be unit tested. 
__snapshots__
__tests__

# Config files
- .babelrc
- .eslintrc.json
- jest.config.js
- next.config.js

# Additional Notes
## Known Issues or Needs for Improvements
There are a few key areas this scaffold still needs improvement on. 
- Any type of SEO packages or rulesets to ensure quality and consitencey for future projects

- setup for easy analytics tracking or plugins

- Linting improvements 

- Unit testing, helpful and common utils.