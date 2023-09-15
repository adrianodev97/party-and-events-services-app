import { MUIHeroSection } from './components/MUIHeroSection'
import { heroSectionPropsMock } from './components/MUIHeroSection/mocks'
import { MUINewsletter } from './components/MUINewsletter'

export const HomePage = () => {
  return (
    <>
      <MUIHeroSection {...heroSectionPropsMock} />
      <MUINewsletter />
    </>
  )
}
