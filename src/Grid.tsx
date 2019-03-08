import * as React from 'react'
import cx from 'classnames'
import './Grid.styles.css'
import './vendor/pure-grids-min.css'
import './vendor/pure-grids-responsive-min.css'

export interface GridProps {
  className: string,
  spaced   : boolean | 'sm' | 'md' | 'lg' | 'xl',
  stretch  : boolean,
  children: React.ReactNode
}

export function Grid({ className, spaced= false, stretch = false, children, ...props }: GridProps) {
  let spacedClass = ''

  switch (spaced) {
    case true:
      spacedClass = 'reactPureGridSpaced'
      break

    case false:
      spacedClass = ''
      break

    default:
      spacedClass = `reactPureGridSpaced ${spaced}-reactPureGridSpaced`
      break
  }

  return (
    <div className={cx('reactPureGrid', 'pure-g', className, spacedClass, { stretch })} {...props}>
      {children}
    </div>
  )
}