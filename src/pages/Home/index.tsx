import { MUIHeroSection } from './components/MUIHeroSection'
import { heroSectionPropsMock } from './components/MUIHeroSection/mocks'

export const HomePage = () => {
  return <MUIHeroSection {...heroSectionPropsMock} />
}
