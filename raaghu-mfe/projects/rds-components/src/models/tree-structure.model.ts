export class TreeStructureNode {
    constructor(
        public   description: string,
        public displayName: string,
        public isGrantedByDefault: boolean,
        public level: number,
        public name: string,
        public parentName: string,
        public children: TreeStructureNode[] = [],
        public selected: boolean = false,
    ) {}
}
export class TreeType {
    public IconLabel: boolean;
    public Normal: boolean;
    public checkbox: boolean;
}