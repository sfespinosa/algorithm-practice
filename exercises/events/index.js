// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.events = new Map();
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, [])
    }

    this.events.set(eventName, [...this.events.get(eventName), callback])
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const callbacks = this.events.get(eventName)
    if (callbacks) callbacks.forEach((callback) => callback())
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events.delete(eventName)
  }
}

module.exports = Events;
