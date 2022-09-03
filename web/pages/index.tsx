import Head from 'next/head'
import InstallFailed from "../components/Home/InstallFailed.component"
import InstallSuccess from "../components/Home/InstallSuccess.component"
import { useRouter } from "next/router"
import MaintenanceMode from "../components/Home/MaintenanceMode.component"

import { IntialSettings, SiteName } from "../types"

interface Props {
  intialSettings: [IntialSettings];
  siteName: SiteName;
}

export default function Home({intialSettings}: Props) {
  const {
    isFirstVisit, 
    isInstallSuccess, 
    isAdminSet, 
    isOperationSuccess, 
    isMaintenanceMode, 
    maintenanceMessage,
    siteName
  } = intialSettings[0]
  
  if (
    isFirstVisit &&
    isInstallSuccess &&
    !isAdminSet &&
    !isMaintenanceMode
    ) {
     return (
    <InstallSuccess siteName={siteName}/>
  )
  } else if (
    isFirstVisit &&
    !isInstallSuccess &&
    !isAdminSet &&
    !isMaintenanceMode
    ) {
       return (
        <>
          <Head>
            <title>Under Maintenance - {siteName ? siteName : "Conmodus"}</title>
          </Head> 
          <InstallFailed siteName={siteName} />
        </>
   
  )
  }
  else if (
    isMaintenanceMode
    ) {
       return (
    <MaintenanceMode
      siteName={siteName}
      maintenanceMessage={maintenanceMessage}
    />
  )
  }
}

export async function getStaticProps() {
  const intialSettings = 
   [
      {
        "id": "4b8ba481-1941-469e-9b45-583dcf9a64bd",
        "isAdminSet": false,
        "isFirstVisit": true,
        "isInstallSuccess": true,
        "isOperationSuccess": true,
        "isMaintenanceMode": false,
        "maintenanceMessage": "We are updating some course materials. The system will be back online in 1 hour.",
        "siteName": "Conmodus"
      }
   ]

  return {
    props: {
      intialSettings
    },
  };
}