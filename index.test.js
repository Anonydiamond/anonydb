const AnonyDB = require('./')

const db = new AnonyDB({
    name: 'test',
    dir: './'
})

db.on('error', console.log)

db.on('Item Deleted', console.log)

db.on('change', console.log)

db.on('ready', () => 
    console.log('Database is ready')
)

db.set('foo', 'bar')

db.set('foo3', JSON.stringify({
    bar4: 'bar3'
}))

console.log(db.has('st'))

console.log(JSON.parse(db.get('st')))

db.delete('st')

console.log(db.has('st'))

db.set('foo2', 'bar2')

console.log(db.get('foo2'))