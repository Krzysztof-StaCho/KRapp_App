export type RootParamList = {

    /**
     * Home (Startup page)
     */
    Home: undefined

    /**
     * Raport -> Item selection
     */
    RaportSelection: undefined;

    /**
     * Raport -> Overview
     */
    RaportOverview: { raportId: number };

    /**
     * Raport -> Raport table
     */
    RaportRTable: { raportId: number };

    /**
     * Raport -> Create Raport
     */
    RaportRUpsert: { raportId?: number }
}