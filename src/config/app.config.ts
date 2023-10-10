interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Student Voter', 'Candidate'],
  tenantName: 'University',
  applicationName: 'wevote',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View university information',
    'View election details',
    'View candidate profiles',
    'View voting results',
  ],
  ownerAbilities: ['Manage users', 'Manage universities', 'Manage candidates', 'Manage elections'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8f14c7eb-f857-44b9-a59e-41da22ae0580',
};
