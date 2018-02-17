<p align="center">
    <img src="hipsterplate-logo--full.png"/>
</p>

# Hipsterplate - A boilerplate for modern web app

## What's inside?
- React
- Redux
- React router
- TypeScript
- Webpack
- Hot reloading

## Requirements
- Node.js
- Yarn

## Running the project
Firstly, install project packages by running
```
yarn
```
and then you can launch it
```
yarn start
```
## Building
If you want to create a production build of your project you can run
```
yarn build
```

## Linting

This project use `TSLint`, `tslint-react` and `Prettier` to lint code. If you are using Visual Studio Code, you can install [this plugin][1].

You can also use linter from CLI
```
yarn lint
```

and you can even fix some errors automatically
```
yarn autofix
```

## Testing
> "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." - Martin Golding

We use Jest for testing. To run test suite use:
```
yarn test
```

To update snapshots run
```
yarn test -u
```

[1]: https://marketplace.visualstudio.com/items?itemName=eg2.tslint
