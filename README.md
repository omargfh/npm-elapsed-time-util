<!-- readme -->
# Elapsed Time Utility


## Install

```
$ npm install --save elapsed-time-util
```

## Usage

```js
import { startEvent, endEvent } from 'elapsed-time-util';
startEvent('myEvent');
// do something
const elapsed = endEvent('myEvent');
console.log(`myEvent took ${elapsed}ms`); // myEvent took 100ms
```

## API

### `startEvent(name: string)`

Starts an event timer and returns the start time. All events are logged in a global object.

### `startEvent()`
Starts an event timer and returns the start time without logging the entry to the global object.

### `endEvent(name)`
Ends an event timer and returns the elapsed time. All events are logged in a global object.

### `endEvent(startTime: number)`
Ends an event timer and returns the elapsed time without logging the entry to the global object.

### `getEvent(name: string)`
Returns the event entry from the global object. If the event does not exist, throws an error.

### `getEventStartTime(name: string)`
Returns the start time of the event from the global object. If the event does not exist, throws an error.

### `getEventEndTime(name: string)`
Returns the end time of the event from the global object. If the event does not exist, throws an error. If the event has not ended, returns `undefined`.

### `getEventElapsed(name: string)`
Returns the elapsed time of the event from the global object. If the event does not exist, throws an error. If the event has not ended, returns the elapsed time up to the current time.

### `getEventElapsedTimeInSeconds(name: string)`
Returns the elapsed time of the event from the global object in seconds. If the event does not exist, throws an error. If the event has not ended, returns the elapsed time up to the current time.

### `getEventElapsedTimeInMinutes(name: string)`
Returns the elapsed time of the event from the global object in minutes. If the event does not exist, throws an error. If the event has not ended, returns the elapsed time up to the current time.

### `clearEvents()`
Clears all events from the global object.

### `clearEvent(name: string)`
Clears the event from the global object. If the event does not exist, throws an error.

### `getAllEvents()`
Returns all events from the global object.

### `tabulateAllEvents()`
Prints a table of all events from the global object using `console.table`.

### `tabulateEvent(name: string)`
Prints a table of the event from the global object using `console.table`. If the event does not exist, throws an error.


## Event Object

The event object is a simple object with the following properties:

```js
[key: string]: {
  startTime: number,
  endTime: number | null,
  elapsed: number | null
}
```

## License

MIT ©
