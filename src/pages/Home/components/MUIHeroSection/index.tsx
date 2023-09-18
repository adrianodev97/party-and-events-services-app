import { MUIGlobalContainer } from '@/style/global'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import {
  MUIStyledHeroContent,
  MUIStyledHeroDescription,
  MUIStyledHeroFlag,
  MUIStyledHeroImageBlock,
  MUIStyledHeroInfo,
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
        <MUIStyledHeroContent>
          <MUIStyledHeroImageBlock>
            <Image src={imageUrl} fill alt="Hero Image" />
          </MUIStyledHeroImageBlock>
          <MUIStyledHeroInfo>
            <MUIStyledHeroFlag>{flag}</MUIStyledHeroFlag>
            <MUIStyledHeroTitle>{title}</MUIStyledHeroTitle>
            <MUIStyledHeroDescription>{description}</MUIStyledHeroDescription>
            <Link href={button.href}>
              <Button variant="contained">{button.label}</Button>
            </Link>
          </MUIStyledHeroInfo>
        </MUIStyledHeroContent>
      </MUIGlobalContainer>
    </MUIStyledHeroSection>
  )
}
