"use strict";
exports.__esModule = true;
exports.tabulateEventElapsedTimeInSeconds = exports.getEventElapsedTimeInMinutes = exports.getEventElapsedTimeInSeconds = exports.getEventElapsedTime = exports.getEventEndTime = exports.getEventStartTime = exports.getEvent = exports.clearEvent = exports.clearAllEvents = exports.getAllEvents = exports.tabulateAllEvents = exports.endEvent = exports.startEvent = void 0;
var Events = {};
var startEvent = function (eventName) {
    if (eventName === void 0) { eventName = ''; }
    if (eventName === '') {
        return new Date().getTime();
    }
    var startTime = new Date().getTime();
    if (Events[eventName] === undefined) {
        Events[eventName] = { startTime: startTime, endTime: null, elapsed: null };
    }
    return startTime;
};
exports.startEvent = startEvent;
function endEvent(arg) {
    if (typeof arg === 'string') {
        var eventName = arg;
        if (Events[eventName] === undefined) {
            throw new Error("Event ".concat(eventName, " has not started"));
        }
        var currentTime = new Date().getTime();
        var timeElapsed = currentTime - Events[eventName].startTime;
        Events[eventName].endTime = currentTime;
        Events[eventName].elapsed = timeElapsed;
        return timeElapsed;
    }
    if (typeof arg === 'number') {
        var startTime = arg;
        return new Date().getTime() - startTime;
    }
    return -1;
}
exports.endEvent = endEvent;
function tabulateAllEvents() {
    console.table(Events);
}
exports.tabulateAllEvents = tabulateAllEvents;
function getAllEvents() {
    return Events;
}
exports.getAllEvents = getAllEvents;
function clearAllEvents() {
    Events = {};
}
exports.clearAllEvents = clearAllEvents;
function clearEvent(eventName) {
    if (Events[eventName] === undefined) {
        throw new Error("Event ".concat(eventName, " has not started"));
    }
    delete Events[eventName];
}
exports.clearEvent = clearEvent;
function getEvent(eventName) {
    if (Events[eventName] === undefined) {
        throw new Error("Event ".concat(eventName, " has not started"));
    }
    return Events[eventName];
}
exports.getEvent = getEvent;
function getEventStartTime(eventName) {
    if (Events[eventName] === undefined) {
        throw new Error("Event ".concat(eventName, " has not started"));
    }
    return Events[eventName].startTime;
}
exports.getEventStartTime = getEventStartTime;
function getEventEndTime(eventName) {
    if (Events[eventName] === undefined) {
        throw new Error("Event ".concat(eventName, " has not started"));
    }
    return Events[eventName].endTime;
}
exports.getEventEndTime = getEventEndTime;
function getEventElapsedTime(eventName) {
    if (Events[eventName] === undefined) {
        throw new Error("Event ".concat(eventName, " has not started"));
    }
    var endTime = Events[eventName].endTime;
    if (endTime === null) {
        return new Date().getTime() - Events[eventName].startTime;
    }
    return endTime - Events[eventName].startTime;
}
exports.getEventElapsedTime = getEventElapsedTime;
function getEventElapsedTimeInSeconds(eventName) {
    return getEventElapsedTime(eventName) / 1000;
}
exports.getEventElapsedTimeInSeconds = getEventElapsedTimeInSeconds;
function getEventElapsedTimeInMinutes(eventName) {
    return getEventElapsedTimeInSeconds(eventName) / 60;
}
exports.getEventElapsedTimeInMinutes = getEventElapsedTimeInMinutes;
function tabulateEventElapsedTimeInSeconds(eventName) {
    var _a;
    console.table((_a = {},
        _a[eventName] = getEventElapsedTimeInSeconds(eventName),
        _a));
}
exports.tabulateEventElapsedTimeInSeconds = tabulateEventElapsedTimeInSeconds;
