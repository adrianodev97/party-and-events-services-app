import { MUIGlobalContainer } from '@/style/global'
import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import {
  MUIStyledHeroDescription,
  MUIStyledHeroFlag,
  MUIStyledHeroImageBlock,
  MUIStyledHeroSection,
  MUIStyledHeroTitle,
} from './styles'
import { MUIHeroSectionProps } from './types'

export const MUIHeroSection = ({
  flag,
  title,
  description,
  imageUrl,
  button,
}: MUIHeroSectionProps) => {
  return (
    <MUIStyledHeroSection>
      <MUIGlobalContainer>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item md={5} xs={12}>
            <MUIStyledHeroImageBlock>
              <Image src={imageUrl} fill alt="Hero Image" />
            </MUIStyledHeroImageBlock>
          </Grid>
          <Grid item md={6.5} xs={12} display={'flex'} flexDirection={'column'}>
            <MUIStyledHeroFlag>{flag}</MUIStyledHeroFlag>
            <MUIStyledHeroTitle>{title}</MUIStyledHeroTitle>
            <MUIStyledHeroDescription>{description}</MUIStyledHeroDescription>
            <Link href={button.href}>
              <Button variant="contained">{button.label}</Button>
            </Link>
          </Grid>
        </Grid>
      </MUIGlobalContainer>
    </MUIStyledHeroSection>
  )
}
