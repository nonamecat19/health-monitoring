import { adminNavigation } from './adminNavigation'
import { shareNavigation } from './shareNavigation'
import { studentNavigation } from './studentNavigation'
import { INavigation } from '../../shared/types/navigation'

export const navigationConfig: INavigation[] = [
  ...adminNavigation,
  ...studentNavigation,
  ...shareNavigation,
]
