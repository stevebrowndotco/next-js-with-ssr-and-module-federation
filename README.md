# Next POC

## Setup

Two steps to micro-frontend with module federation architecture

`yarn`

`npx nx serve next-host`

The above command allows you to work on next-host, but caches the remote micro front-ends.

To be able work across any microfront-end at the same time run:

`npx nx serve next-host --devRemotes=name`

For example:

`npx nx serve next-host --devRemotes=header,footer,plp,another-page`
