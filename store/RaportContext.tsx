import { createContext, ReactNode, useReducer } from "react";

import { InitData, RaportDataType, RaportHeaderType, RaportType } from "../data/FakeData";

type ContextType = {
    raports: RaportType[],

    addRaportH: (item: RaportHeaderType) => void,
    updateRaportH: (raportId: number, item: RaportHeaderType) => void,
    deleteRaportH: (raportId: number) => void,

    addRaportI: (raportId: number, item: RaportDataType) => void,
    updateRaportI: (raportId: number, itemId: number, item: RaportDataType) => void,
    deleteRaportI: (raportId: number, itemId: number) => void
};

type ProviderProps = {
    children: ReactNode
};

interface RaportAction {
    /**
     * ADD_H, UPDATE_H, DELETE_H - CRUD operations on raports header
     */
    type: "ADD_H" | "UPDATE_H" | "DELETE_H" |
        "ADD_I" | "UPDATE_I" | "DELETE_I" | "OTHER",
    payload: {
        header?: RaportHeaderType,
        id?: number,
        itemId?: number,
        data?: RaportDataType
    }
}

export const RaportContext = createContext<ContextType>({
    raports: [],
    addRaportH: () => {},
    updateRaportH: () => {},
    deleteRaportH: () => {},
    addRaportI: () => {},
    updateRaportI: () => {},
    deleteRaportI: () => {}
});

const raportReducer = (state: RaportType[], action: RaportAction): RaportType[] => {
    const addHeader = (header?: RaportHeaderType): RaportType[] => {
        if (typeof header === "undefined")
            throw Error(`Error during add new raport. Payload was empty`);

        let id = 0;
        if (state.length !== 0)
            id = state[state.length - 1].id + 1;
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

    const addItem = (raportId?: number, data?: RaportDataType): RaportType[] => {
        if (typeof data === "undefined" || typeof raportId === "undefined")
            throw Error(`Error during add new raport item. Payload was empty`);

        const raportIndex = state.findIndex((item) => item.id === raportId);
        if (raportIndex === -1)
            throw Error(`Error during searching to update object in dataObj. Given id = ${raportId}`);
        const raport = state[raportIndex];
        
        let newId = 0;
        if (raport.data.length !== 0)
            newId = raport.data[raport.data.length - 1].id + 1;
        const newData: RaportDataType = { ...data, id: newId };
        raport.data = [...raport.data, newData];
        state[raportIndex] = raport;
        return [...state];
    };
    const updateItem = (raportId?: number, itemId?: number, data?: RaportDataType): RaportType[] => {
        if (typeof data === "undefined" || typeof raportId === "undefined" || typeof itemId === "undefined")
            throw Error(`Error during update raport item. Payload was empty`);

        const raportIndex = state.findIndex((item) => item.id === raportId);
        if (raportIndex === -1)
            throw Error(`Error during searching to update object in dataObj. Given id = ${raportId}`);
        const raport = state[raportIndex];

        const itemIndex = raport.data.findIndex((item) => item.id === itemId);
        if (itemIndex === -1)
            throw Error(`Error during searching to update object in dataObj. Given id = ${itemId}`);

        const oldItem = raport.data[itemIndex];
        raport.data[itemIndex] = {
            ...data,
            id: oldItem.id
        };

        state[raportIndex] = raport;
        return [...state];
    };
    const deleteItem = (raportId?: number, itemId?: number): RaportType[] => {
        if (typeof raportId === "undefined" || typeof itemId === "undefined")
            throw Error(`Error during delete raport item. Payload was empty`);

        const raportIndex = state.findIndex((item) => item.id === raportId);
        if (raportIndex === -1)
            throw Error(`Error during searching to update object in dataObj. Given id = ${raportId}`);
        const raport = state[raportIndex];

        raport.data = raport.data.filter((item) => item.id !== itemId);

        state[raportIndex] = raport;
        return [...state];
    };

    switch(action.type) {
        case "ADD_H":
            return addHeader(action.payload.header);
        case "UPDATE_H":
            return updateHeader(action.payload.id, action.payload.header);
        case "DELETE_H":
            return deleteHeader(action.payload.id);
        case "ADD_I":
            return addItem(action.payload.id, action.payload.data);
        case "UPDATE_I":
            return updateItem(action.payload.id, action.payload.itemId, action.payload.data);
        case "DELETE_I":
            return deleteItem(action.payload.id, action.payload.itemId);
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

    const addRaportI = (raportId: number, item: RaportDataType) => {
        dispatch({type: "ADD_I", payload: {id: raportId, data: item}});
    };

    const updateRaportI = (raportId: number, itemId: number, item: RaportDataType) => {
        dispatch({type: "UPDATE_I", payload: {id: raportId, itemId, data: item}});
    };

    const deleteRaportI = (raportId: number, itemId: number) => {
        dispatch({type: "DELETE_I", payload: {id: raportId, itemId}});
    };

    const providerValue: ContextType = {
        raports: raportState,
        addRaportH,
        updateRaportH,
        deleteRaportH,
        addRaportI,
        updateRaportI,
        deleteRaportI
    };

    return (
        <RaportContext.Provider value={providerValue}>
            {children}
        </RaportContext.Provider>
    );
};