import ConmodusLogo from '../ConmodusLogo'
import { styled } from '../../stitches.config'
import { MaintenanceMessage, SiteName } from '../../types'

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
  maintenanceMessage: MaintenanceMessage;
  siteName: SiteName;
}

export default function MaintenanceMode({maintenanceMessage, siteName}: Props) {
return (
      <Box>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>  
      <ConmodusLogo/>
        <Text as="h1">{siteName ? siteName : "Conmodus"} is in Maintenance Mode</Text>
        {!maintenanceMessage ? 
        (
        <Text>
          The adminstrators are updating content and the system will be unavailable.
        </Text>
        ) 
        : 
        (
        <Text>
          Message from the admin user: <br/>{maintenanceMessage}
        </Text>
        )}
        
        


      </Container>
    </Box>
)
}