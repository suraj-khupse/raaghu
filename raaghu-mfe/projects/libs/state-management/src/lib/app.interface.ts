import { DelegationsState, UserNameFilterState } from './state/authority-delegations/authority-delegations.reducer';
import { EditionsState } from './state/edition/edition.reducer';
import { CountryState, DefaultLanguageState, LanguagesState } from './state/language/language.reducer';
import { maintenanceState } from './state/maintenance/maintenance.reducer';
import { profileState } from './state/mysettings/mysettings.reducer';
import { LoginAttemptsState } from './state/login-attempts/login-attempts.reducer';
import { ManageLinkedAccountsState } from './state/manage-linked-accounts/manage-linked-accounts.reducer';
import { ProductState } from './state/products/product.reducer';
import { RolesState } from './state/role/role.reducer';
import { SubscriptionInformationState, SubscriptionState } from './state/subscription/subscription.reducer';
import { VisualsettingsState } from './state/Visual-settings/visual-settings.reducer';
import { WebhookSubscriptionState } from './state/webhook-subscription/webhook-subscription.reducer';
import { TenantState } from './state/tenant/tenant.reducer';
import { AuditLogsState } from './state/audit-logs/audit-logs.reducer';
import { DynamicPermissionState, DynamicPropertyState, EditDynampicPropertState, InputPropertynameState } from './state/dynamic-property-management/dynamic-property.reducer';
import { OrganizationUnitState } from './state/organization-unit/organization-unit.reducer';
import { UsersState } from './state/user/user.reducer';
//import { SettingsState, ValidateTenantState } from '../public-api';
import { MLAState } from './state/mla/mla.reducer';
import { LanguageTextsState } from './state/language-text/language-text.reducer';
import { SettingsState } from './state/settings/settings.reducer';
import { ValidateTenantState } from './state/login/login.reducer';
import { downloadState } from './state/DownloadData/download-data.reducer';
import { ProfilepictureState } from './state/profile-settings/profile-settings.reducers';
import { AllDynamicEntitySate, AllDynamicPropertyEntitySate, DynamicEntityState } from './state/dynamic-entity/dynamic-entity.reducer';

export interface AppState {
  products: ProductState,
  webhookSubscriptions: WebhookSubscriptionState,
  profile: profileState,
  properties: DynamicPropertyState,
  organizationUnit: OrganizationUnitState
  dynamicEntity: DynamicEntityState,
  editions: EditionsState,
  roles: RolesState,
  user: UsersState,
  languages: LanguagesState,
  Subscription: SubscriptionState,
  SubscriptionInformation: SubscriptionInformationState,
  visualsettings: VisualsettingsState,
  maintenances: maintenanceState,
  WebhookSubscription: WebhookSubscriptionState,
  ManageLinkedAccounts: ManageLinkedAccountsState,
  loginAttempts: LoginAttemptsState,
  settings: SettingsState,
  tenants: TenantState,
  auditLogs: AuditLogsState,
  changeLogs:AuditLogsState
  PermissionI:PermissionState,
  countries: CountryState,
  Delegation: DelegationsState,
  mla: MLAState,
  Entities: AllDynamicEntitySate,
  PropertiesEntitie: AllDynamicPropertyEntitySate
 
  validateTenant: ValidateTenantState,
  InputTypeNames: InputPropertynameState
  EditDynamicPropertSateI: EditDynampicPropertState,
  DynanmicPermission: DynamicPermissionState,
  usernames: UserNameFilterState,
  languageText: LanguageTextsState
  defaultLanguage: DefaultLanguageState,
  download:downloadState,
  editdynamicProperty:EditDynampicPropertState,
  profilePicture : ProfilepictureState,
}

export const products = 'products';
export const roles = 'roles';
export const Validatetenant = 'ValidatetenantState';
export const visualsettings = 'visualsettings';
export const Subscription = 'Subscription';
export const auditLogs = 'auditLogs';
export const languageText = 'languageText';
export const download = 'download';



 