export interface GlobalSettings
    {
        id: string;
        isAdminSet: boolean;
        isFirstVisit: boolean;
        isInstallSuccess: boolean;
        isMaintenanceMode: boolean;
        isOperationSuccess: boolean;
        maintenanceMessage: string;
        siteName: string;
    }

export type MaintenanceMessage = string;

export type SiteName = string;
