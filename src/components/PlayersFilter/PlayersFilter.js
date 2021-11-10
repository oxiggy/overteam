import React, { memo } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import FormControlLabel from '@mui/material/FormControlLabel'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import Checkbox from '@mui/material/Checkbox'
// Local files
import styles from './PlayersFilter.styles'

const useStyles = makeStyles(styles)

const PlayersFilter = (props) => {
  const classes = useStyles(props)
  const [open, setOpen] = React.useState(false)
  const [hideDisabled, setHideDisabled] = React.useState(false)

  return (
    <div className={classes.root}>
      <ButtonBase
        className={classes.head}
        onClick={() => setOpen(!open)}
        disableRipple
      >
        <Typography variant='h6' variantMapping={{ h6: 'div'}}>Filter</Typography>
      </ButtonBase>
      <Collapse in={open} classes={{ wrapper: classes.wrapper }}>
        <FormControlLabel
          classes={{ root: classes.checkboxForm, label: classes.checkboxLabel }}
          control={<Checkbox color='secondary' />}
          label={'Hide disabled users'}
          checked={hideDisabled}
          onChange={(event) => setHideDisabled(event.target.checked)}
        />
      </Collapse>
    </div>
  )
}

export default memo(PlayersFilter)
