import React, { memo, useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import FormControlLabel from '@mui/material/FormControlLabel'
import SettingsIcon from '@mui/icons-material/Settings'
import SpeedDialAction from '@mui/lab/SpeedDialAction'
import SpeedDial from '@mui/lab/SpeedDial'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import clsx from 'clsx'
// Local files
import styles from './TeamSettings.styles'

const useStyles = makeStyles(styles)

const actions = [
  { value: 1, },
  { value: 2, },
  { value: 3, },
  { value: 4, },
  { value: 4, preset: '1 / 2 / 1' },
  { value: 5, },
  { value: 5, preset: '1 / 2 / 2' },
  { value: 6, },
  { value: 6, preset:  '2 / 2 / 2' },
  { value: 6, preset:  '3 / 0 / 3' },
];

const TeamSettings = ({ value, handleValueChange, preset, handleRolePresetChange, ...otherProps }) => {
  const classes = useStyles(otherProps)
  const [includePreset, setIncludePreset] = useState(true)

  return (
    <div className={classes.root}>
      <Box pb={4}>
        <SpeedDial
          direction={'right'}
          ariaLabel="Change amount slot"
          icon={!value ? <SettingsIcon /> : <div className={classes.speedDialIconLabel}>{value}</div>}
        >
          {actions.map((action, index) => {
            if (!!includePreset || (!includePreset && !action.preset)) {
              return (
                <SpeedDialAction
                  key={index}
                  onClick={() => {
                    handleValueChange(action.value)
                    handleRolePresetChange(action.preset)
                  }}
                  icon={
                    <div className={clsx(classes.actionLabel, !!action.preset && classes.actionLabel_withPreset)}>
                      {action.value}
                    </div>
                  }
                  tooltipTitle={
                    <div className={classes.tooltipTitle}>
                      {!!action.preset ? action.preset : '-'}
                    </div>
                  }
                />
              )
            }
          })}
        </SpeedDial>
      </Box>

      <FormControlLabel
        classes={{ root: classes.checkboxForm, label: classes.checkboxLabel }}
        checked={includePreset}
        onChange={(event) => {
          setIncludePreset(event.target.checked)
          handleRolePresetChange(null)
        }}
        control={<Checkbox color='secondary' />}
        label={'Include preset'}
      />

      <Button
        disabled={!value && !preset}
        onClick={() => {
          handleValueChange(null)
          handleRolePresetChange(null)
        }}
      >
        Reset
      </Button>
    </div>
  )
}

export default memo(TeamSettings)