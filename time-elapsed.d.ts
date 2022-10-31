interface Event {
    startTime: number;
    endTime: number | null;
    elapsed: number | null;
}
export declare const startEvent: (eventName?: string) => number;
export declare function endEvent(startTime: number): number;
export declare function endEvent(eventName: string): number;
export declare function tabulateAllEvents(): void;
export declare function getAllEvents(): {
    [key: string]: Event;
};
export declare function clearAllEvents(): void;
export declare function clearEvent(eventName: string): void;
export declare function getEvent(eventName: string): Event;
export declare function getEventStartTime(eventName: string): number;
export declare function getEventEndTime(eventName: string): number | null;
export declare function getEventElapsedTime(eventName: string): number;
export declare function getEventElapsedTimeInSeconds(eventName: string): number;
export declare function getEventElapsedTimeInMinutes(eventName: string): number;
export declare function tabulateEventElapsedTimeInSeconds(eventName: string): void;
export {};
