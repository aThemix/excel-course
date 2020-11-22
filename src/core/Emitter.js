export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // Уведомляем слушателей еслиони есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }

        this.listeners[event].forEach(listener => {
            listener(...args)
        })

        return true
    }

    // Подписываемся на уведомления
    // Добавляем нового слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}
// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe(
// 'anton',
// data => console.log('Sub:', data)
// )
// emitter.emit('anton', 42)
// setTimeout(() => {
//     emitter.emit('anton', 'After 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//     unsub()
// }, 3000)
// setTimeout(() => {
//     emitter.emit('anton', 'After 4 seconds')
// }, 4000)
