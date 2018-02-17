// tslint:disable:no-console
import chalk from 'chalk';
import * as chokidar from 'chokidar';

const watcher = chokidar.watch('./src/server/api', {
  ignored: /[\/\\]\.|node_modules/,
  persistent: true,
  ignoreInitial: true,
  usePolling: true
});

watcher.on('ready', () => {
  console.log(
    chalk.blueBright('[hipsterplate] Server hot reloading service started')
  );
  watcher.on('all', () => {
    console.log(
      chalk.blueBright(
        '[hipsterplate] Clearing /server/api/ module cache from server'
      )
    );
    Object.keys(require.cache).forEach(id => {
      if (/[\/\\]server[\/\\]/.test(id)) {
        delete require.cache[id];
      }
    });
  });
});
