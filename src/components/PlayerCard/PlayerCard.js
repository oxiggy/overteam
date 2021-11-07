import React, { memo } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
// Local files
import styles from './PlayerCard.styles'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'
import TankIcon from 'components/Icons/TankIcon'
import SupportIcon from 'components/Icons/SupportIcon'
import DamageIcon from 'components/Icons/DamageIcon'

const useStyles = makeStyles(styles)

const PlayerCard = (props) => {
  const classes = useStyles(props)
  const { user: { name, avatar, enabled, roles } } = props

  const [tank, setTank] = React.useState({ value: roles.tank.value, enabled: roles.tank.enabled });
  const [damage, setDamage] = React.useState({ value: roles.damage.value, enabled: roles.tank.enabled });
  const [support, setSupport] = React.useState({ value: roles.support.value, enabled: roles.tank.enabled });

  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [isEnabled, setEnabled] = React.useState(enabled);

  const handleEnabledChange = () => {
    setEnabled(!isEnabled)
    setTank({...tank, enabled: false })
    setDamage({...damage, enabled: false })
    setSupport({...support, enabled: false })
  }

  return (
    <Paper
      className={classes.root}
      sx={{
        opacity: !isEnabled ? .2 : undefined,
        userSelect: !isEnabled ? 'none' : undefined,
      }}
    >
      <Avatar
        src={avatar}
        alt={`${name}`}
        variant='square'
        className={classes.avatar}
      >
        {name[0]?.toUpperCase()}
      </Avatar>
      <div className={classes.content}>
        <div className={classes.head}>
          <Typography className={classes.title} noWrap>
            {name}
          </Typography>
          <IconButton
            className={classes.settingsButton}
            aria-label='settings'
            onClick={(event) => setAnchorMenu(event.currentTarget)}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorMenu}
            open={!!anchorMenu}
            onClose={() => setAnchorMenu(null)}
          >
            <MenuItem onClick={handleEnabledChange}>{isEnabled ? 'Enabled' : 'Disabled'}</MenuItem>
            <MenuItem disabled>Edit user</MenuItem>
          </Menu>
        </div>
        <Box
          sx={{
            pointerEvents: !isEnabled ? 'none' : undefined,
          }}
        >
          <FormControlLabel
            classes={{ root: classes.checkboxForm, label: classes.checkboxLabel }}
            disabled={!roles.tank.value}
            control={
              <Checkbox
                checked={tank.enabled}
                onChange={(event) => {
                  setTank({
                    ...tank, enabled: event.target.checked
                  })
                }}
              />
            }
            label={
              <Box
                component={'span'}
                display='flex'
                alignItems='center'
                sx={{
                  color: !!tank.enabled ? `rank.${roles.tank.rank}` : 'rank.default.main',
                }}
              >
                <span className={classes.iconContainer}><TankIcon className={classes.icon} fontSize={'small'} /></span>
                <Typography variant='body1' component={'span'}>{tank.value}</Typography>
              </Box>
            }
          />
          <FormControlLabel
            classes={{ root: classes.checkboxForm, label: classes.checkboxLabel }}
            disabled={!roles.damage.value}
            control={
              <Checkbox
                checked={damage.enabled}
                onChange={(event) => {
                  setDamage({
                    ...damage, enabled: event.target.checked
                  })
                }}
              />
            }
            label={
              <Box
                component={'span'}
                display='flex'
                alignItems='center'
                sx={{
                  color: !!damage.enabled ? `rank.${roles.damage.rank}` : 'rank.default.main'
                }}
              >
                <span className={classes.iconContainer}><DamageIcon className={classes.icon} fontSize={'small'} /></span>
                <Typography variant='body1' component={'span'}>{damage.value}</Typography>
              </Box>
            }
          />
          <FormControlLabel
            classes={{ root: classes.checkboxForm, label: classes.checkboxLabel }}
            disabled={!roles.support.value}
            control={
              <Checkbox
                checked={support.enabled}
                onChange={(event) => {
                  setSupport({
                    ...support, enabled: event.target.checked
                  })
                }}
              />
            }
            label={
              <Box
                component={'span'}
                display='flex'
                alignItems='center'
                sx={{
                  color: !!support.enabled ? `rank.${roles.support.rank}` : 'rank.default.main'
                }}
              >
                <span className={classes.iconContainer}> <SupportIcon className={classes.icon} fontSize={'small'} /></span>
                <Typography variant='body1' component={'span'}>{support.value}</Typography>
              </Box>
            }
          />
        </Box>
      </div>
    </Paper>
  )
}

export default memo(PlayerCard)
