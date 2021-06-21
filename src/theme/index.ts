// Component style overrides
import Button from './components/button'
import breakpoints from './foundations/breakpoints'
import colors from './foundations/colors'
// Foundational style overrides
import config from './foundations/config'
import { extendTheme } from '@chakra-ui/react'
import fonts from './foundations/fonts'
import shadows from './foundations/shadows'
// Global style overrides
import styles from './styles'

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  breakpoints,
  components: {
    Button
  }
}

export default extendTheme(customTheme)
