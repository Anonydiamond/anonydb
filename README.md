#### This is a simple database to use

## USAGE

### Installtion

```bash
npm i anonydb
```

```js
const AnonyDB = require('anonydb')

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
```

## METHODS

### Set a value
```js
db.set('key', 'value') //the value type is must be string! if you need to use as object, you may use JSON.stringify({...})
```

### Get a value
```js
db.get('key') //fetch a value
```

### Remove a value
```js
db.delete('key')
```

### Check a value
```js
db.has('key') //returns boolean
```

## Event Listeners

- error
#### emits when error occures

- ready
#### emits when database is ready

- Item Deleted
#### emits the item, that has been removed

- change
#### emits when you set an item