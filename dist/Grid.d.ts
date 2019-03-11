import * as React from 'react';
import './Grid.styles.css';
import './vendor/pure-grids-min.css';
import './vendor/pure-grids-responsive-min.css';
export interface GridProps {
    className?: string;
    spaced?: boolean | 'sm' | 'md' | 'lg' | 'xl';
    stretch?: boolean;
    children: React.ReactNode;
}
export declare function Grid({ className, spaced, stretch, children, ...props }: GridProps): JSX.Element;
