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

type Action = {
    type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS',
} 
function timersReducer(state: TimersState, action: Action): TimersState{
    if(action.type === 'START_TIMERS'){
        return {
            ...state,
            isRunning: true
        }
    }
      if(action.type === 'STOP_TIMERS'){
        return {
            ...state,
            isRunning: false    
        }
    }
      if(action.type === 'ADD_TIMER'){
        return {
            ...state,
            timers: [ ...state.timers,
                {
                    name, 
                    duration
                }
            ]
        }
    }
}

export default function TimersContextProvider({children}: TimersContextProviderProps ){
    const [timersState, dispatch] = useReducer(reducer, initialState)
   
   
    const ctx: TimersContextValue = {
        timers: [], 
        isRunning: true,
        addTimer(timerData){
            dispatch({type: 'ADD_TIMER'})
        },
        startTimers(){
        dispatch({type: 'START_TIMERS'})
        },
        stopTimers(){
        dispatch({type: 'STOP_TIMERS'})
        }

    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}