import { expect } from '@playwright/test';
import DashboardPage from '../pageObjects/DashboardPage';
import AssertionFailedException from '../exceptions/AssertionFailedException';
import { IDashboardModule } from './interfaces/IDashboardModule';

export abstract class DashBoardModule implements IDashboardModule{

  async validateDashboard(): Promise<void> {
    try {
      await expect(DashboardPage.getDashboardSummaryTile()).toBeVisible({timeout: 20000, visible: true})
    } catch (e) {
      throw new AssertionFailedException("Failed to validate dashboard" , e as Error)
    }
  }

  async validateProfileCollectionScreen(): Promise<void> {
    try {
      await expect(DashboardPage.getProfileCollectionScreen()).toBeVisible({timeout: 20000, visible: true})
    } catch (e) {
      throw new AssertionFailedException("Failed to validate profile collection screen", e as Error)
    }
  }
}