const opn = require('opn');

opn('http://localhost:3000', {app: ['chrome', '--option1', '--option2']});