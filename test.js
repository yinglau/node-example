var commander = require('commander');
commander
    .version('0.0.1')
    .command('install [name]', 'install package')
    .parse(process.argv);

if (commander.date) {
    console.log('date')
}
