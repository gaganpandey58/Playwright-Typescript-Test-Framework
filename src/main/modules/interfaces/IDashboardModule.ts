export interface IDashboardModule {

  validateDashboard(): Promise<void>

  validateProfileCollectionScreen(): Promise<void>
}