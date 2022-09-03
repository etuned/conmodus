
import Head from "next/head";
import { GlobalSettings } from "../../types"

interface Props {
  globalSettings: [GlobalSettings];
}

export default function Setup({globalSettings}: Props) {
  const {
    isFirstVisit, 
    isInstallSuccess, 
    isAdminSet, 
    isOperationSuccess, 
    isMaintenanceMode, 
    maintenanceMessage,
    siteName
  } = globalSettings[0]
  
  return (
    <>
    <Head>
        <title>Intial Setup - {siteName ? siteName : "Conmodus"}</title>
    </Head>
    <div>TODO Settings for </div>
    </>
  )
  
}

export async function getStaticProps() {
  const globalSettings = 
   [
      {
        "id": "4b8ba481-1941-469e-9b45-583dcf9a64bd",
        "isAdminSet": false,
        "isFirstVisit": true,
        "isInstallSuccess": true,
        "isOperationSuccess": true,
        "isMaintenanceMode": true,
        "maintenanceMessage": "We are updating some course materials. The system will be back online in 1 hour.",
        "siteName": "Conmodus"
      }
   ]

  return {
    props: {
      globalSettings
    },
  };
}