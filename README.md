# React Avant Grid

## Install it

`yarn add react-avant-grid`

## Use it

```
import { Grid, Column } from 'react-avant-grid'

<Grid spaced>
    // Use fractions of 24
    <Column sm={1 / 24}></Column>
    <Column md={2 / 24}></Column> // or 1 / 12
    <Column lg={3 / 24}></Column> // or 1 / 8
    
    // Or fractions of 5
    <Column xl={1/5}></Column>
</Grid>
```