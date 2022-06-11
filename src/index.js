const { EventEmitter } = require('events')
const { readFileSync, writeFileSync } = require('fs')

class AnonyDB extends EventEmitter {
    constructor(options) {
        super()
        this.fileName = options.name
        this.dir = options.dir
        this.path = `${this.dir}${this.dir.endsWith('/') ? `${this.fileName}` : `/${this.fileName}`}.json`
        this.currentfile = undefined
        this.cahce = {}
        writeFileSync(this.path, JSON.stringify(this.cahce))
        this.emitReady()
    }

    emitReady() {
        this.emit('ready')
    }

    update() {
        try {
            this.currentfile = readFileSync(this.path)
            writeFileSync(this.path, JSON.stringify(this.cahce))
        } catch(err) {
            this.emit('error', new Error(err))
        }
    }

    get(key) {
        try {
            return JSON.parse(readFileSync(this.path))[key]
        } catch(err) {
            this.emit('error', new Error(err))
        }
    }

    set(key, value) {
        try {
           this.cahce[key] = value
        this.update() 
        } catch(err) {
            this.emit('error', new Error(err))
        }
        this.emit('change', {
            key,
            value: this.cahce[key]
        })
    }

    has(key) {
        if (this.get(key)) return true
        else return false
    }

    delete(key) {
        this.emit('Item Deleted', {
            key,
            value: this.cahce[key]
        })
        delete this.cahce[key]
        this.update()
    }
}

module.exports = AnonyDB