import React, { memo } from 'react'
import makeStyles from '@mui/styles/makeStyles'
// Local files
import styles from './Home.styles'

const useStyles = makeStyles(styles)

const Home = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      Home
    </div>
  )
}

export default memo(Home)