import * as React from 'react';
export interface ColumnProps {
    className: string;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    innerRef: (ref: HTMLDivElement | null) => void;
    children: React.ReactNode;
}
export declare function Column(props: ColumnProps): JSX.Element;
export default Column;
