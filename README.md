# React Styleguide Example

:skull: Work in progress :skull:

A demo project of Isomorpic React Styleguide bundle powered by [SourceJS](http://sourcejs.com), [sourcejs-react](https://github.com/szarouski/sourcejs-react) and other plugins.

Generated documentation out of components [source code](https://github.com/sourcejs/react-styleguide-example/blob/master/src/index.jsx) and [styleguide](https://github.com/sourcejs/react-styleguide-example/blob/master/styleguide.jsx) entry point:

![image](http://d.pr/i/19V9M+)

Check out other React SourceJS bundle example with hot reload and live editor - [sourcejs-react-styleguidist-example](http://github.com/sourcejs/sourcejs-react-styleguidist-example).

## Setup

```
npm i && npm start
open http://127.0.0.1:8080
```

To update SourceJS (in case of new installed plugins), run

```
npm run build-source
```

## How it works

SourceJS as a style guide platform allows to run either one components documentation (as we see in this example), either a collection of components with scalable catalogs.

As an input SourceJS gets React component, engine configuration and documentation (spec) page description (`styleguide.jsx`, `info.json`).

For rendering a documentation page, this example uses [sourcejs-react](https://github.com/szarouski/sourcejs-react) plugin. As an alternative, you can use [sourcejs-md-react](https://github.com/mik01aj/sourcejs-md-react) or any other tech-integration plugins listed here [sourcejs.com/docs/spec-helpers](http://sourcejs.com/docs/spec-helpers/#plugins) (Jade/Slim/DSS).

[sourcejs-webpack](https://github.com/sourcejs/sourcejs-webpack) is used for preparing client-side code out of `styleguide.jsx` for isomorphic rendering. By default, sourcejs-react plugin only renders components on server side.
[sourcejs-react-docgen](https://github.com/sourcejs/sourcejs-react-docgen) renders auto generated documentation of properties and code commpoents onto the spec page.

Note: this example is quite limited at the moment, but expect fully configurable plugin set in nearest future.

### File structure

* **info.json** - documentation page meta, used for indexing multiple-cataloged component libraries
* **styleguide.jsx** - documentation page description, here you place your component examples and description
* **sourcejs-options.js** - overriding default SourceJS options to set `styleguide.jsx` as an entry point
* **src** - example component source code

## TODO

* Add [sourcejs-contrib-browser-sync](https://github.com/sourcejs/sourcejs-contrib-browser-sync) plugin to example
* Add component playground ([demo](http://projects.formidablelabs.com/component-playground/))
* Make configuration slimmer (remove `sourcejs-option.js` and `info.json`)
* Integrate hot module replacement
