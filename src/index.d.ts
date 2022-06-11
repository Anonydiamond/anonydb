declare class AnonyDB {
    constructor(DBoptions: options): this
    /**
     * Enter a key to get the value
     * @param key 
     */
    get<T extends string>(
        key: T
    ): void

    /**
     * Sets a value to database 
     */
    set<T extends string>(
        key: T,
        value: T
    ): void

    on<T extends events>(
        event: T,
        listener: listener[T]
    ): void

    /**
     * Check the database if the element exists
     */
    has<T extends string>(
        key: T
    ): void

    /**
     * Removes an element from database
     */
    delete<T extends string>(
        key: T
    ): void
}

interface item {
    key: string
    value: any
}

interface options {
    dir: string
    name: string
}

export type events = keyof listener

export type listener = {
    open: () => void
    error: (err: Error) => void
    change: (Item: item) => void
    'Item Deleted': (Item: item) => void
}

export = AnonyDB