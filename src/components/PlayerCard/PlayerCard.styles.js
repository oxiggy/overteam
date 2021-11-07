const styles = (theme) => ({
  root: {
    width: 400,
    height: 200,
    display: 'flex',
    borderRadius: '12px',
    padding: 16,
  },
  avatar: {
    flexShrink: 0,
    width: 165,
    height: 165,
    fontSize: 160,
    color: theme.palette.grey[900],
    backgroundColor:  theme.palette.grey[800],
    borderRadius: '10px',
  },
  content: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingLeft: 24,
  },
  head: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1
  },
  settingsButton: {
    color:  theme.palette.rank.default.main,
  },
  checkboxForm: {
    '&.Mui-disabled': {
      '& $icon': {
        color: theme.palette.rank.default.dark,
      }
    }
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    '.Mui-checked ~ &': {
      color: theme.palette.rank.default.light,
    }
  },
  iconContainer: {
    width: 32,
    height: 'auto',
    display: 'inline-flex',
    justifyContent: 'center',
  },
  icon: {},
})

export default styles
