import Head from 'next/head'
import ConmodusLogo from '../ConmodusLogo'
import { styled } from '../../stitches.config'
import { SiteName } from '../../types'

const Box = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

const Text = styled('p', {
  fontFamily: '$system',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

interface Props {
  siteName: SiteName;
}

export default function InstallSuccess({siteName}: Props) {
return (
      <>
      <Head>
        <title>{`Install Success - ${siteName ? siteName : 'Conmodus'}`}</title>
      </Head>
      <Box>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>  
      <ConmodusLogo/>
        <Text as="h1">Welcome to {siteName ? siteName : "Conmodus"}.</Text>
        <Text>
          You have a freshly installed instance.
          
        </Text>
      </Container>
    </Box>
    </>
)
}