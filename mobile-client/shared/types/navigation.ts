export interface INavigation {
  name: string
  component: (...args: any[]) => JSX.Element
  title: string
}