var dnode = require('dnode');
var uuid = require('uuid/v1');

var d = dnode.connect(3001, '192.168.99.100')

let _schema = {
    id: uuid(),
    title: 'dsfsdfrwreere',
    content: 'Whats swerwerdfrerersdfsd sdfsdf....',
    author: 'kogdfgdfwerewr sdfsdf',
    news_type: 'lolwerwersdso11',
    tags: 'dfgdfsdsdg11'
}

d.on('remote', function (remote) {
    remote.addNews(JSON.stringify(_schema), function (s) {
        console.log(s)
        d.end();
    });
});