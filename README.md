# Angular Barebone

> An Angular barebone featuring [Angular](https://angular.io)
([Router](https://angular.io/docs/js/latest/api/router/),
[Forms](https://angular.io/docs/js/latest/api/forms/),
[Http](https://angular.io/docs/js/latest/api/http/),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter)),
[ngrx](https://github.com/ngrx),
([store](https://github.com/ngrx/store),
more comming),
[Tests](https://angular.io/docs/js/latest/api/test/), 
[Karma](https://karma-runner.github.io/), 
[Jasmine](https://github.com/jasmine/jasmine), 
[Istanbul](https://github.com/gotwarlost/istanbul), 
[E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-), 
[Protractor](https://angular.github.io/protractor/), 
[Material](https://github.com/angular/material2), 
[TypeScript](http://www.typescriptlang.org/), 
[@types](https://www.npmjs.com/~types), 
[TSLint](http://palantir.github.io/tslint/)(
  [Codelyzer](https://github.com/mgechev/codelyzer),
  [Consistent Codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
  [Immutable](https://github.com/jonaskello/tslint-immutable)
), and 
[Webpack 2](http://webpack.github.io/) by **ME** :D 

*Largerly based on the top of the wonderfull work of the awesome guys behind [AngularClass](https://angularclass.com)*.
*You may find somethings missing, as HMR. They will readded eventually*

> If you're looking for learn Angular 2 in general, you should go to [AngularClass/awesome-angular2](https://github.com/AngularClass/awesome-angular2)

> If you're looking for Angular 1.x you can use [AngularClass/NG6-starter](https://github.com/angularclass/NG6-starter)  

> If you're looking for the original and still awesome Angular 2 Webpack Starter you should go to
[AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)  

> If you're looking to learn about Webpack and ES6 Build Tools check out 
[AlgularClass/ES6-build-tools](https://github.com/AngularClass/ES6-build-tools)  

> If you're looking to learn TypeScript see 
[TypeStrong/learn-typescript](https://github.com/TypeStrong/learn-typescript)  

> If you're looking for a complete Starter with Ngrx and HMR you should go to 
[QDouble/Angular-Webpack2-Starter](https://github.com/qdouble/angular-webpack2-starter)

> If you're looking to add [Angular Material 2](https://github.com/angular/material2) go to the branch [material2](https://github.com/michaeljota/angular2-ultimate-starter/tree/material2)  

> If you're looking to add [Bootstrap 4](https://v4-alpha.getbootstrap.com/), with [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) go to the branch [bootstrap](https://github.com/michaeljota/angular2-ultimate-starter/tree/boostrap)    

---

This is a barebone repo, with no other implementation or example but a main page.
There is also a lot of opionated choices that might or might not like you, but I do.
Why you should use this? Use this if you like to have
* Angular 2 style guide applied in all the files.
* Great semantic folder structure, even in config files. 
* State managed by ngrx/store (*done*) and ngrx/effects (*soon*).
* Ready to go build system using Webpack for working with TypeScript.
* Testing Angular 2 code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* End-to-end Angular 2 code using Protractor.
* Type manager with `@types`
* Material Design with [angular/material2](https://github.com/angular/material2)

### Quick start
**Make sure you have Node version >= 6.x.x and NPM >= 3.x.x**  
*Don't know how? [Click me](#getting-started)*

> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/michaeljota/angular-barebone.git

# change directory to our repo
cd angular-barebone

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
Wait to your browser to load!!! Or open it and go to [http://0.0.0.0:3000](http://0.0.0.0:3000)
or [http://localhost:3000](http://localhost:3000)

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [@Types](#types)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
I use the component approach in the barebone. This is the new standard for
developing Angular apps and a great way to ensure maintainable code by 
encapsulation of our behavior logic. I also use a barrel roll for every folder.
Plese notice that this is not standard, and it's not recommended any more in the
official style guide.
A component is basically a self contained app usually in a single file or a
folder with each concern as a file:
style, template, specs, e2e, and component class.

Here's how it looks:
```
angular2-ultimate-starter/
 ├── config/                              * All the configuration
 │    ├── karma/                          * Karma folder. Contains config for the unit tests, with Webpack and aditional files
 │    ├── protractor/                     * Protractor folder. Contains config for our end-to-end tests
 │    ├── tslint/                         * TSLint folder. Contains rules for every extension used.
 │    └── webpack/                        * Webpack folder
 │         ├── browser/                   * The development and production config files for the browser.
 │         └── options/                   * Configurations, options and helpers
 │
 ├── src/                                 * our source files that will be compiled to javascript
 │    ├── main.browser.ts                 * our entry file for our browser environment
 │    │
 │    ├── index.html                      * Index.html: where we generate our index page
 │    │
 │    ├── polyfills.ts                    * our polyfills file
 │    │
 │    ├── app/                            * WebApp: folder
 │    │    ├── app.component.ts            * AppComponent: a simple version of our App component components
 │    │    ├── app.component.spec.ts       * a simple test of components in app.ts
 │    │    ├── app.component.e2e.ts        * a simple end-to-end test for /
 │    │    ├── app.constants.ts            * All the aplication constants
 │    │    ├── app.module.ts               * AppModule: The main module of the aplicaction
 │    │    ├── app.reducer.ts              * The main reducer for the aplication, and the initial state
 │    │    ├── app.reducer.spec.ts         * The tests for the aplication reducer
 │    │    ├── app.routes.ts               * The routes of the aplication
 │    │    ├── environment.ts              * The app environment variables and modules
 │    │    ├── material.module.ts          * MaterialModule: The material module of the aplicaction, reexporting needed Material Modules
 │    │    │
 │    │    ├── actions                     * All the aplication actions dispatchables
 │    │    ├── components                  * All the aplication components
 │    │    ├── directives                  * All the aplication directives
 │    │    ├── models                      * All the aplication models
 │    │    ├── pages                       * All the aplication pages components
 │    │    ├── pipes                       * All the aplication pipes
 │    │    ├── reducers                    * All the aplication reducers
 │    │    ├── services                    * All the aplication services
 │    │    ├── utils                       * All the aplication functions or utilities that does not fit anywhere else
 │    │    └── widgets                     * All the aplication presentationals components or widgets
 │    │
 │    └── assets/                         * static assets are served here
 │         ├──icon/                       * our list of icons from www.favicon-generator.org
 │         ├──service-worker.js           * ignore this. Web App service worker that's not complete yet
 │         ├──robots.txt                  * for search engines to crawl your website
 │         └──humans.txt                  * for humans to know who the developers are
 │
 │
 ├── tslint.json                          * typescript lint config
 ├── typedoc.json                         * typescript documentation generator
 ├── tsconfig.json                        * config that webpack uses for typescript
 ├── package.json                         * what npm uses to manage it's dependencies
 └── webpack.config.js                    * webpack main configuration file

```

##### Why this file structure and what does that means?
- In the config folder you will find every configuration in its
own folder. This will allow you to find quickly the configuration
files you might need.
- In every folder inside the app folder you find a constants
behind exported. This will allow you to change only that piece of
the app in order to include a new code. You won't need to change
the `app.module.ts` as it will auto include everything you add in 
the future, just by putting it inside the constant.

### Actions
The actions that should be dispatched to the store.
Should be classes with statics enum-like strings, and non-static functions

```
actions/
 ├── <name>.action.ts                     * The action with constants and funtions
 └── index.ts                             * Single barrel file for all the actions
```

### Components
The containers components of the aplication. They should handle
all the logic and handle all the users inputs. Note that there is
not need for a separate template

```
components/
 ├── <name>/
 │    ├── <name>.component.ts             * The component controller.
 │    ├── <name>.component.spec.ts        * The unit tests of the component.
 │    ├── <name>.component.html           * The component template. [Optional]
 │    └── <name>.component.scss           * The component styles. [Optional]
 └── index.ts                             * Single barrel file for all the components.
```

### Directives
The directives, both attributte and structural. 

```
directives/
 ├── <name>/
 │    ├── <name>.directive.ts             * The directive controller.
 │    └── <name>.directive.spec.ts        * The unit tests of the directive.
 └── index.ts                             * Single barrel file for all the components.
```

### Models
All the aplication models for the data handeling.

```
models/
 ├── <name>.ts                            * The model file.
 └── index.ts                             * Single barrel file for all the actions
```

### Pages
All the actual pages of the application. They should handle no
logic, and their behavior should be the same as a presentational 
component. However, e2e test must be placed here, and every page 
should test the behavior of the containers components of its own.

```
pages/
 ├── <name>/
 │    ├── <name>.component.ts             * The pages component controller.
 │    ├── <name>.component.spec.ts        * The unit tests of the page component.
 │    ├── <name>.component.e2e-spec.ts    * The e2e tests of the page component.
 │    ├── <name>.component.html           * The pages component template.
 │    └── <name>.component.scss           * The pages component styles.
 └── index.ts                             * Single barrel file for all the pages.
```

### Pipes
The pipes of the application. 

```
pipes/
 ├── <name>/
 │    ├── <name>.pipe.ts                  * The pipe controller.
 │    └── <name>.pipe.spec.ts             * The unit tests of the pipe.
 └── index.ts                             * Single barrel file for all the pipes.
```

### Reducers
The reducers. They should be export as constants.

```
reducers/
 ├── <name>/
 │    ├── <name>.reducer.ts               * The reducer controller.
 │    └── <name>.reducer.spec.ts          * The unit tests of the reducer.
 └── index.ts                             * Single barrel file for all the reducers.
```

### Services
All the services. As `services` will be consumable by others 
files, you should also export the services as you need. Remember
when exporting `services` you need to keep the DI order. 

```
services/
 ├── <name>/
 │    ├── <name>.service.ts               * The service controller.
 │    ├── <name>.service.model.ts         * The service interface model. *not to be exported*
 │    ├── <name>.service.mock.ts          * The service mock. Service mocks must be `pure functions`.
 │    └── <name>.service.spec.ts          * The unit tests of the service.
 └── index.ts                             * Single barrel file for all the services.
```

### Widgets
All the presentationals components or widgets. They should handle no logic, just show inputs properties, and output events.

```
widgets/
 ├── <name>/
 │    ├── <name>.component.ts             * The presentationals component controller.
 │    ├── <name>.component.html           * The component template. [Optional]
 │    └── <name>.component.scss           * The component styles. [Optional]
 └── index.ts                             * Single barrel file for all the widget components.
```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`  
*Ensure you're running at least this versions Node `v6.x.x`+ and NPM `3.x.x`+, lastes are **always** prefered*

> If you have [`nvm`](https://github.com/creationix/nvm) installed, which is highly recommended you can do a
`nvm install --lts && nvm use` in `$` to run with the latest Node LTS.
You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

> If you have Windows, you should consider [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade)
to update the npm after the Node installation.

Once you have those, you should install [rimraf](https://github.com/isaacs/rimraf) global with `npm install --global rimraf`.
If you don't, you can't use any clean script.

This is a list of other modules you can install globally.
*This not really necessary, but recommended if you are working **alone**, if you are in a team
it's better if all of the team work with this tools with the same version from the scripts.* 
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo (or [Download ZIP]()).
* `clone` your fork.
* Install global modules if you would like to.
* `npm install` to install all dependencies.

## Running the app
After you have installed all dependencies you can now run the app.
Run `npm run server` to start a local server using
`webpack-dev-server` which will watch, build (in-memory), and 
reload for you. The port will be displayed to you as 
`http://0.0.0.0:3000` (or if you prefer IPv6, if you're using 
`express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run server:prod
```

## Full list of script commands

### build files
```bash
# web development
npm run build:dev
# web production
npm run build:prod
```

### watch and build files
```bash
# web (watch and build. Doesn't reload the static server)
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests (tdd)
```bash
npm run watch:test
```

### run end-to-end tests
```bash
npm run e2e
```

### build Docker
```bash
npm run build:docker
```

### clean
```bash
# clean everything (cache, generated folders and modules).
npm run clean
# clean everything and install.
npm run clean:install
# clean generated folders and files (dist, converage, doc, and logs).
npm run clean:folder
# clean everything, install and start.
npm run clean:start
# clean node_modules
npm run clean:modules
# clean dist
npm run clean:dist
```


# Configuration
Configuration files live in `config/`. This uses `webpack`, 
`karma`, `tslint` and `protractor` for different stages of your 
application.

# Contributing
I'll accept pretty much everything to keep this with dependencies up-to-date. As this is a barebone, I don't think I'll add another feature. Feel free to open a Pull-Request anyway.

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.4.0 includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/) (*Does not need typescript globally. Personal recommendation*)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/) (*If you want a complete IDE, this is it*)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Extensions
There is a `extensions.json` file in the the `.vscode` folder. It contains several recommended
extensions to work with in this project, or any Angular2 project. It includes:

> [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
The configuration automatically connects to the webpack development server on port `3000`.

> [Typescript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)
It is configured to start multiple lines automatically after `100` characters.

> [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

> [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

All those extensions are a recommendation, and are by no way, necessary to develop with this project.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with `@types`

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```
Notice that you can also import in a destructive way

```typescript
import { isString } from 'lodash';
```

# Frequently asked questions
This is the original `faq` in `angular2-webpack-starter` repo. Questions that
I did not fell that fit with this repo, were removed. Links to PR, and issues,
of the `angular2-webpack-starter` repo are prefixed with `a2ws`.  

* What's the current browser support for Angular 2?  
  * Please view the updated list of [browser support for Angular 2](https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2)
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata.
* How do I run this repo with an older version of node?
  * I strongly suggest you to update to node 6 LTS. If you need older, you should write the imports in Webpack config files in other way but destructive.
* Where do I write my tests?
  * You should write your tests next to your component files. See [`/src/app/pages/home/home.spec.ts`](/src/app/pages/home/home.spec.ts).
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* How do I test a Service?
  * See issue [`a2ws`#130](https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648)
* How do I add `vscode-chrome-debug` support?
  * The VS Code chrome debug extension support can be done via `launch.json` see issue [`a2ws`#144](https://github.com/AngularClass/angular2-webpack-starter/issues/144#issuecomment-164063790)
* How do I make the repo work in a virtual machine?
  * You need to use `0.0.0.0` so revert these changes [`a2ws`#205](https://github.com/AngularClass/angular2-webpack-starter/pull/205/files)
* How do I include another CSS framework or jQuery?
  * Please see issue [`a2ws`#215](https://github.com/AngularClass/angular2-webpack-starter/issues/215) and [`a2ws`#214](https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416)
* How do I async load a component?
  * See `a2ws` wiki [How-do-I-async-load-a-component-with-AsyncRoute](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-do-I-async-load-a-component-with-AsyncRoute)
* Error: Cannot find module 'tapable'
  * Please run `npm clean:install`. 
* `RangeError: Maximum call stack size exceeded`
  * This is a problem with minifying Angular 2 and it's recent JIT templates. If you set `mangle` to `false` then you should be good.
* If you're in China
  * check out https://github.com/cnpm/cnpm
* node-pre-gyp ERR in npm install (Windows)
  * Please install [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools)
* `Error:Error: Parse tsconfig error [{"messageText":"Unknown compiler option 'lib'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'strictNullChecks'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'baseUrl'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'paths'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'types'.","category":1,"code":5023}]`
  * Please run `npm run clean:install`
* "There are multiple modules with names that only differ in casing"
  * change `c:\[path to angular-barebone]` to `C:\[path to angular-barebone]` see [`a2ws`926#issuecomment-245223547](https://github.com/AngularClass/angular2-webpack-starter/issues/926#issuecomment-245223547)

# Support, Questions, or Feedback
> For now, you can use the issues for this.
___

# License
 [MIT](/LICENSE)