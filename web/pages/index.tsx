import Head from 'next/head'

import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

import InstallFailed from "../components/Home/InstallFailed.component"
import InstallSuccess from "../components/Home/InstallSuccess.component"
import { useRouter } from "next/router"
import MaintenanceMode from "../components/Home/MaintenanceMode.component"

import { GlobalSettings, SiteName } from "../types"

interface Props {
  globalSettings: GlobalSettings;
  siteName: SiteName;
}

export default function Home({globalSettings}: Props) {
  const {
    isFirstVisit, 
    isInstallSuccess, 
    isAdminSet, 
    isOperationSuccess, 
    isMaintenanceMode, 
    maintenanceMessage,
    siteName
  } = globalSettings
  
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
          <InstallFailed siteName={siteName} />
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
 const { data } = await client.query({
      query: gql`
        query globals {
          globalSettings {
            id
            isAdminSet
            isFirstVisit
            isInstallSuccess
            isMaintenanceMode
            isOperationSuccess
            maintenanceMessage
            siteName
          }
        }
      `,
    });

    console.log(data.globalSettings[0]);

  return {
    props: {
      globalSettings: data.globalSettings[0],
    revalidate: 1,
    },
  };
}