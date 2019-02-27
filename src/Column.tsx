import cx from 'classnames'
import * as React from 'react'

export interface ColumnProps {
  className: string,
  sm: number,
  md: number,
  lg: number,
  xl: number,
  innerRef: (ref: HTMLDivElement | null) => void,
  children: React.ReactNode
}

export function Column(props: ColumnProps) {
  const {
    sm = 1,
    md = 0,
    lg = 0,
    xl = 0,
    children,
    className,
    innerRef,
    ...extraProps
  } = props

  const smUnits = sm && (sm * 5) % 1 ? 24 : 5
  const mdUnits = md && (md * 5) % 1 ? 24 : 5
  const lgUnits = lg && (lg * 5) % 1 ? 24 : 5
  const xlUnits = xl && (xl * 5) % 1 ? 24 : 5

  const classes = cx(
    sm === 1 ? 'pure-u-1' : `pure-u-${Math.round(sm * smUnits)}-${smUnits}`,
    sm === 1 ? 'pure-u-sm-1' : `pure-u-sm-${Math.round(sm * smUnits)}-${smUnits}`,
    md === 1 ? 'pure-u-md-1' : `pure-u-md-${Math.round(md * mdUnits)}-${mdUnits}`,
    lg === 1 ? 'pure-u-lg-1' : `pure-u-lg-${Math.round(lg * lgUnits)}-${lgUnits}`,
    xl === 1 ? 'pure-u-xl-1' : `pure-u-xl-${Math.round(xl * xlUnits)}-${xlUnits}`,
    className
  )

  return (
    <div className={classes} {...extraProps} ref={(it) => innerRef && innerRef(it)}>
      {children}
    </div>
  )
}

export default Column
