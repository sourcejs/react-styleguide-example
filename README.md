# React Styleguide Example

An example of React Styleguide bundle, powered by [SourceJS](http://sourcejs.com).

```
npm i && npm start
open http://127.0.0.1:8080
```

To update SourceJS (in case of installed plugins, run

```
npm run build-source
```

## How it works

SourceJS as a style guide platform allows to run either one components documentation (as we see in this example), either a collection of companents with scalable catalogs.

As an input SourceJS gets React component, engine configuration and documentation page description (`styleguide.jsx`, `info.json`).

For rendering a documentation page, this example uses [sourcejs-react](https://github.com/szarouski/sourcejs-react) plugin. As an alternative, you can use [sourcejs-md-react](https://github.com/mik01aj/sourcejs-md-react) or any other tech-integration plugins listed here [sourcejs.com/docs/spec-helpers](http://sourcejs.com/docs/spec-helpers/#plugins) (Jade/Slim/DSS).

### File structure

```
/
    info.json - documentation page meta, used for indexing multiple-cataloged component libraries
    styleguide.jsx - documentation page description, here you place your component examples and description
    sourcejs-options.js - overriding default SourceJS options to set `styleguide.jsx` as an entry point
    src - example component source code
```

## TODO

* Make configuration slimer (remove `sourcejs-option.js` and `info.json`)