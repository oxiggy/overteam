import React, { memo } from 'react'
import makeStyles from '@mui/styles/makeStyles'
// Local files
import data from 'data'
import styles from './Home.styles'
import PlayerCard from 'components/PlayerCard/PlayerCard'

const useStyles = makeStyles(styles)

const Home = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.cards} style={{  }}>
        {
          data.map(
            (item, i) => {
              return (
                <PlayerCard key={i} user={item} />
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default memo(Home)
