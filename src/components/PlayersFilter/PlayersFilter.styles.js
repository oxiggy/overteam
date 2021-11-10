const styles = (theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1),
  },
  head: {
    width: '100%',
    justifyContent: 'flex-start',
    color: theme.palette.text.disabled,
    padding: '16px 0',
    '&:hover': {
      color: theme.palette.text.secondary,
    },
    transition: theme.transitions.create(['color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  wrapper: {
    paddingBottom: theme.spacing(2),
  },
  checkboxForm: {
    width: '100%',
  },
  checkboxLabel: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  }
})

export default styles
