import React, { memo, useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Box from '@mui/material/Box'
// Local files
import data from 'data'
import styles from './Home.styles'
import TeamSettings from 'components/TeamSettings/TeamSettings'
import PlayerCard from 'components/PlayerCard/PlayerCard'
import PlayersFilter from 'components/PlayersFilter/PlayersFilter'

const useStyles = makeStyles(styles)

const Home = (props) => {
  const classes = useStyles(props)
  const [amount, setAmount] = useState(null)
  const [rolePreset, setRolePreset] = useState(null)

  return (
    <div className={classes.root}>
      <TeamSettings
        value={amount}
        preset={rolePreset}
        handleValueChange={setAmount}
        handleRolePresetChange={setRolePreset}
      />

      <Box sx={{ fontSize: 10, }} >
        <Box sx={{ color: 'secondary.main' }}>debugging info:</Box>
        <div>slots amount: {amount}</div>
        <div>slots preset: {rolePreset}</div>
      </Box>

      <PlayersFilter />
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
