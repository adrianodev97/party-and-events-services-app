import { MUIGlobalContainer } from '@/style/global'
import { Button } from '@mui/material'
import {
  MUIStyledNewsletterContent,
  MUIStyledNewsletterFormControl,
  MUIStyledNewsletterInput,
  MUIStyledNewsletterSection,
  MUIStyledNewsletterSubtitle,
  MUIStyledNewsletterTitle,
} from './styles'

export const MUINewsletter = () => {
  return (
    <MUIStyledNewsletterSection>
      <MUIGlobalContainer>
        <MUIStyledNewsletterContent>
          <MUIStyledNewsletterTitle>
            Join our Newsletter
          </MUIStyledNewsletterTitle>
          <MUIStyledNewsletterSubtitle>
            Recently, the company has been under the spolight for changing its
            priorities to the metaverse, rather than sticking
          </MUIStyledNewsletterSubtitle>
          <MUIStyledNewsletterFormControl>
            <MUIStyledNewsletterInput label={'For latest updates send mail'} />
            <Button>Send Mail</Button>
          </MUIStyledNewsletterFormControl>
        </MUIStyledNewsletterContent>
      </MUIGlobalContainer>
    </MUIStyledNewsletterSection>
  )
}
