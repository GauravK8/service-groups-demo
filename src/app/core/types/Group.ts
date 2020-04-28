import { SubGroup } from './SubGroup';

export interface Group {
    id: number;
    name: string;
    value: string;
    checked: boolean;
    subGroups: Array<SubGroup>;
}