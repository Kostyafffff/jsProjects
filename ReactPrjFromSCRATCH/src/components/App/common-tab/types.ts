export enum Tabs {
    LATEST = 'Latest',
    HISTORY = 'History',
    CURRENCIES = 'Currencies'
}

export interface ITabsProps {
    tabs: Tabs;
}