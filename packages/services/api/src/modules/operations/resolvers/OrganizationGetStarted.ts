import { OperationsManager } from '../providers/operations-manager';
import type { OrganizationGetStartedResolvers } from './../../../__generated__/types';

export const OrganizationGetStarted: Pick<
  OrganizationGetStartedResolvers,
  'reportingOperations' | '__isTypeOf'
> = {
  reportingOperations: async (organization, _, { injector }) => {
    if (organization.reportingOperations === true) {
      return organization.reportingOperations;
    }

    return injector.get(OperationsManager).hasOperationsForOrganization({
      organizationId: organization.id,
    });
  },
};
