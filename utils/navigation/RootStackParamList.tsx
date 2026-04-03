export type RootStackParamList = {

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
}