import { createContext, ReactNode, useReducer } from "react";

import { InitData, RaportDataType, RaportHeaderType, RaportType } from "../data/FakeData";

type ContextType = {
    raports: RaportType[],
    addRaportH: (item: RaportHeaderType) => void,
    updateRaportH: (raportId: number, item: RaportHeaderType) => void,
    deleteRaportH: (raportId: number) => void
};

type ProviderProps = {
    children: ReactNode
};

interface RaportAction {
    /**
     * ADD_H, UPDATE_H, DELETE_H - CRUD operations on raports header
     */
    type: "ADD_H" | "UPDATE_H" | "DELETE_H" | "OTHER",
    payload: {
        header?: RaportHeaderType,
        id?: number,
        data?: RaportDataType[]
    }
}

export const RaportContext = createContext<ContextType>({
    raports: [],
    addRaportH: (item) => {},
    updateRaportH: (id, item) => {},
    deleteRaportH: (id) => {}
});

const raportReducer = (state: RaportType[], action: RaportAction): RaportType[] => {
    const addHeader = (header?: RaportHeaderType): RaportType[] => {
        if (typeof header === "undefined")
            throw Error(`Error during add new raport. Payload was empty`);

        const id = state[state.length - 1].id + 1;
        const newRaport: RaportType = { ...header, id, data: [] };
        return [...state, newRaport];
    };
    const updateHeader = (id?: number, header?: RaportHeaderType): RaportType[] => {
        if (typeof header === "undefined" || typeof id === "undefined")
            throw Error(`Error during update raport. Payload was empty`);
        
        const raportIndex = state.findIndex((item) => item.id === id);
        if (raportIndex === -1)
            throw Error(`Error during searching to update object in dataObj. Given id = ${id}`);

        const oldRaport = state[raportIndex];

        const newState = [...state];
        newState[raportIndex] = {
            ...header,
            id,
            data: oldRaport.data
        };
        return newState;
    };
    const deleteHeader = (id?: number): RaportType[] => {
        if (typeof id === "undefined")
            throw Error(`Error during update raport. Payload was empty`);

        return state.filter((item) => item.id !== id);
    };

    switch(action.type) {
        case "ADD_H":
            return addHeader(action.payload.header);
        case "UPDATE_H":
            return updateHeader(action.payload.id, action.payload.header);
        case "DELETE_H":
            return deleteHeader(action.payload.id);
        default:
            return state;
    }
};

export const RaportContextProvider = ({children}: ProviderProps) => {
    const [raportState, dispatch] = useReducer(raportReducer, InitData);

    const addRaportH = (item: RaportHeaderType) => {
        dispatch({type: "ADD_H", payload: {header: item}});
    };

    const updateRaportH = (id: number, item: RaportHeaderType) => {
        dispatch({type: "UPDATE_H", payload: {id, header: item}});
    };

    const deleteRaportH = (id: number) => {
        dispatch({type: "DELETE_H", payload: {id}});
    };

    const providerValue: ContextType = {
        raports: raportState,
        addRaportH,
        updateRaportH,
        deleteRaportH
    };

    return (
        <RaportContext.Provider value={providerValue}>
            {children}
        </RaportContext.Provider>
    );
};