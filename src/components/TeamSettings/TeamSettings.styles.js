const styles = (theme) => ({
  speedDialIconLabel: {
    fontSize: 20,
    fontWeight: 800,
    lineHeight: '100%',
  },
  actionLabel: {
    fontWeight: 800,
  },
  actionLabel_withPreset: {
    color: theme.palette.primary.main
  },
  tooltipTitle: {
    fontSize: 14,
    fontWeight: 800,
  },
  //
  checkboxForm: {
    width: '100%',
  },
  checkboxLabel: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  }
})

export default styles