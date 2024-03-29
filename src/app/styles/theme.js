const theme = {}

//// SPACE
theme.space = [0, '4px', '8px', '16px', '32px', '64px']

//// GRID
theme.breakpoints = ['576px', '768px', '1024px', '1200px', '1600px']

theme.grid = {}
theme.grid.gutters = { xs: 16, sm: 16, md: 24, lg: 24, xl: 24, xxl: 32 }
theme.grid.paddings = [
  theme.grid.gutters.xs,
  theme.grid.gutters.sm,
  theme.grid.gutters.md,
  theme.grid.gutters.lg * 2,
  theme.grid.gutters.xl * 2,
  theme.grid.gutters.xxl * 2
]

//// COLORS
theme.color = {}

// Primary pure
theme.color.primary = {}
theme.color.primary.default = '#1d6fdc'
// theme.color.primary.lighten1 = '#1d6fdc'
// theme.color.primary.lighten2 = '#1d6fdc'
// theme.color.primary.lighten3 = '#1d6fdc'
// theme.color.primary.lighten4 = '#1d6fdc'
// theme.color.primary.lighten5 = '#1d6fdc'
theme.color.primary.lighten6 = '#e3eefa'
// theme.color.primary.lighten7 = '#1d6fdc'
// theme.color.primary.lighten8 = '#1d6fdc'

// Primary transparent
theme.color.primary.t = {}
theme.color.primary.t.lighten1 = 'rgba(29,111,220,0.75)'
theme.color.primary.t.lighten2 = 'rgba(29,111,220,0.5)'
theme.color.primary.t.lighten3 = 'rgba(29,111,220,0.25)'
theme.color.primary.t.lighten4 = 'rgba(29,111,220,0.20)'
theme.color.primary.t.lighten5 = 'rgba(29,111,220,0.15)'
theme.color.primary.t.lighten6 = 'rgba(29,111,220,0.12)'
theme.color.primary.t.lighten7 = 'rgba(29,111,220,0.10)'
theme.color.primary.t.lighten8 = 'rgba(29,111,220,0.08)'
theme.color.primary.t.lighten9 = 'rgba(29,111,220,0.04)'

// Dark pure
theme.color.dark = {}
theme.color.dark.default = '#030b17'
// theme.color.dark.lighten1 = '#1d6fdc'
// theme.color.dark.lighten2 = '#1d6fdc'
// theme.color.dark.lighten3 = '#1d6fdc'
// theme.color.dark.lighten4 = '#1d6fdc'
// theme.color.dark.lighten5 = '#1d6fdc'
// theme.color.dark.lighten6 = '#1d6fdc'
// theme.color.dark.lighten7 = '#1d6fdc'
theme.color.dark.lighten8 = '#f5f5f6'

// Dark transparent
theme.color.dark.t = {}
theme.color.dark.t.lighten1 = 'rgba(3,11,23,0.75)'
theme.color.dark.t.lighten2 = 'rgba(3,11,23,0.5)'
theme.color.dark.t.lighten3 = 'rgba(3,11,23,0.25)'
theme.color.dark.t.lighten4 = 'rgba(3,11,23,0.20)'
theme.color.dark.t.lighten5 = 'rgba(3,11,23,0.15)'
theme.color.dark.t.lighten6 = 'rgba(3,11,23,0.12)'
theme.color.dark.t.lighten7 = 'rgba(3,11,23,0.10)'
theme.color.dark.t.lighten8 = 'rgba(3,11,23,0.08)'
theme.color.dark.t.lighten9 = 'rgba(3,11,23,0.04)'

// White pure
theme.color.white = {}
theme.color.white.default = '#fff'
// theme.color.white.lighten1 = '#fff'
// theme.color.white.lighten2 = '#fff'
// theme.color.white.lighten3 = '#fff'
// theme.color.white.lighten4 = '#fff'
// theme.color.white.lighten5 = '#fff'
// theme.color.white.lighten6 = '#fff'
// theme.color.white.lighten7 = '#fff'
// theme.color.white.lighten8 = '#fff'

// White transparent
theme.color.white.t = {}
theme.color.white.t.lighten1 = 'rgba(255,255,255,0.75)'
theme.color.white.t.lighten2 = 'rgba(255,255,255,0.5)'
theme.color.white.t.lighten3 = 'rgba(255,255,255,0.25)'
theme.color.white.t.lighten4 = 'rgba(255,255,255,0.20)'
theme.color.white.t.lighten5 = 'rgba(255,255,255,0.15)'
theme.color.white.t.lighten6 = 'rgba(255,255,255,0.12)'
theme.color.white.t.lighten7 = 'rgba(255,255,255,0.10)'
theme.color.white.t.lighten8 = 'rgba(255,255,255,0.08)'
theme.color.white.t.lighten9 = 'rgba(255,255,255,0.04)'

// Danger pure
theme.color.danger = {}
theme.color.danger.default = '#ff0000'

// Danger transparent
theme.color.danger.t = {}
theme.color.danger.t.lighten = 'rgba(255,0,0,0.15)'

// Text colors
theme.color.text = {}

// Text dark
theme.color.text.dark = {}
theme.color.text.dark.primary = theme.color.dark.t.lighten1
theme.color.text.dark.secondary = 'rgba(3,11,23,0.45)'
theme.color.text.dark.disabled = theme.color.dark.t.lighten4

// Text light
theme.color.text.light = {}
theme.color.text.light.primary = 'rgba(255,255,255,0.85)'
theme.color.text.light.secondary = 'rgba(255,255,255,0.65)'
theme.color.text.light.disabled = 'rgba(255,255,255,0.35)'

//// GRADIENTS
theme.primaryGradient = 'linear-gradient(-45deg, #0D42B1, #247EE5)'

//// SHADOWS
theme.shadow = {}
theme.shadow.card =
  '0 3px 4px -4px rgba(3,11,23,0.12), 0 6px 12px 0 rgba(3,11,23,0.08), 0 0px 32px 0px rgba(3,11,23,0.05)'
theme.shadow.appNav = `2px 0 2px 0 ${theme.color.dark.t.lighten3}, -3px 0 16px 10px ${theme.color.primary.t.lighten3}`

//// OUTLINE
theme.outline = {}
theme.outline.appNavAvatar = `0 0 0 2px ${theme.color.white.default}`

//// TRANSITION
theme.transition = {}
theme.transition.default = 'all 0.3s'

//// BORDER RADIUS
theme.borderRadius = {}
theme.borderRadius.md = '8px'
theme.borderRadius.sm = '4px'

//// TYPOGRAPHY
theme.typography = {}

theme.typography.fontFamily = 'Poppins'

// Font sizes
theme.typography.fontSize = {}
theme.typography.fontSize.h1 = '40px'
theme.typography.fontSize.h2 = '32px'
theme.typography.fontSize.h3 = '24px'
theme.typography.fontSize.h4 = '20px'
theme.typography.fontSize.h5 = '16px'
theme.typography.fontSize.h6 = '14px'
theme.typography.fontSize.overline = '12px'
theme.typography.fontSize.body1 = '16px'
theme.typography.fontSize.body2 = '14px'
theme.typography.fontSize.caption1 = '12px'
theme.typography.fontSize.caption2 = '10px'

// Line heights
theme.typography.lineHeight = {}
theme.typography.lineHeight.h1 = '48px'
theme.typography.lineHeight.h2 = '40px'
theme.typography.lineHeight.h3 = '32px'
theme.typography.lineHeight.h4 = '28px'
theme.typography.lineHeight.h5 = '24px'
theme.typography.lineHeight.h6 = '20px'
theme.typography.lineHeight.overline = '16px'
theme.typography.lineHeight.body1 = '24px'
theme.typography.lineHeight.body2 = '20px'
theme.typography.lineHeight.caption1 = '16px'
theme.typography.lineHeight.caption2 = '12px'

// Font weights
theme.typography.fontWeight = {}
theme.typography.fontWeight.bold = 700
theme.typography.fontWeight.semibold = 600
theme.typography.fontWeight.medium = 500
theme.typography.fontWeight.regular = 400
theme.typography.fontWeight.light = 300

// Letter spacing
theme.typography.letterSpacing = {}
theme.typography.letterSpacing.overline = 0.6

export default theme
