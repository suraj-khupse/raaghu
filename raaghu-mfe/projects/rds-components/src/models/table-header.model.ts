export interface TableHeader {
    displayName: string;
    key: string;
    dataType: string;
    dataLength?: number;
    required?: boolean;
    sortable?: boolean;
    filterable?: boolean;
    colWidth?: string;
    disabled?: boolean;
    options?:any;
}