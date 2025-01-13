import { type ReactNode, createContext, useContext, useReducer, useState } from "react";


type Timer ={
    name: string;
    duration: number;
}


type TimerState = {
    isRunning: boolean;
    timers: Timer[]
}

const initialState: TimerState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimerState & {
    addTimer: (timerData: Timer) => void,
    starTimers: () => void,
    stopTimers: () => void,
}

const TimersContext = createContext<TimersContextValue | null>(null)

/*  This one will be a custom hook: in the end  is a regular function that starts with "use"  */
export function useTimersContext (){
   const timersCtx = useContext(TimersContext)


if (timersCtx === null ){
    throw new Error('TimersContext is null - that should not be the case')
}
return timersCtx
}


type TimersContextProviderProps = {
    children: ReactNode
}

export default function TimersContextProvider({children}: TimersContextProviderProps ){
    useReducer(reducer, initialState)
   
   
    const ctx: TimersContextValue = {
        timers: [], 
        isRunning: true,
        addTimer(timerData: Timer){

        },
        startTimers(){

        },
        stopTimers(){

        }

    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}