interface Event {
    startTime: number;
    endTime: number | null;
    elapsed: number | null;
}
let Events: { [key: string]: Event } = {};
export const startEvent = (eventName: string = '') => {
    if (eventName === '') {
        return new Date().getTime();
    }
    const startTime = new Date().getTime();
    if (Events[eventName] === undefined) {
        Events[eventName] = { startTime: startTime, endTime: null, elapsed: null };
    }
    return startTime;
}

export function endEvent (startTime: number): number;
export function endEvent (eventName: string): number;
export function endEvent (arg: string | number): number {
    if (typeof arg === 'string') {
        const eventName = arg;
        if (Events[eventName] === undefined) {
            throw new Error(`Event ${eventName} has not started`);
        }
        const currentTime: number = new Date().getTime();
        const timeElapsed: number = currentTime - Events[eventName].startTime;
        Events[eventName].endTime = currentTime;
        Events[eventName].elapsed = timeElapsed;
        return timeElapsed;
    }

    if (typeof arg === 'number') {
        const startTime = arg;
        return new Date().getTime() - startTime;
    }

    return -1;
}

export function tabulateAllEvents(): void {
    console.table(Events);
}

export function getAllEvents(): { [key: string]: Event } {
    return Events;
}

export function clearAllEvents(): void {
    Events = {};
}

export function clearEvent(eventName: string): void {
    if (Events[eventName] === undefined) {
        throw new Error(`Event ${eventName} has not started`);
    }
    delete Events[eventName];
}

export function getEvent(eventName: string): Event {
    if (Events[eventName] === undefined) {
        throw new Error(`Event ${eventName} has not started`);
    }
    return Events[eventName];
}

export function getEventStartTime(eventName: string): number {
    if (Events[eventName] === undefined) {
        throw new Error(`Event ${eventName} has not started`);
    }
    return Events[eventName].startTime;
}

export function getEventEndTime(eventName: string): number | null {
    if (Events[eventName] === undefined) {
        throw new Error(`Event ${eventName} has not started`);
    }
    return Events[eventName].endTime;
}

export function getEventElapsedTime(eventName: string): number {
    if (Events[eventName] === undefined) {
        throw new Error(`Event ${eventName} has not started`);
    }
    const endTime = Events[eventName].endTime;
    if (endTime === null) {
        return new Date().getTime() - Events[eventName].startTime;
    }
    return endTime - Events[eventName].startTime;
}

export function getEventElapsedTimeInSeconds(eventName: string): number {
    return getEventElapsedTime(eventName) / 1000;
}

export function getEventElapsedTimeInMinutes(eventName: string): number {
    return getEventElapsedTimeInSeconds(eventName) / 60;
}

export function tabulateEventElapsedTimeInSeconds(eventName: string): void {
    console.table({
        [eventName]: getEventElapsedTimeInSeconds(eventName)
    });
}