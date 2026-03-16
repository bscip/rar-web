import { createFileRoute } from '@tanstack/react-router';
import { InstallationsPage } from '../../pages/InstallationsPage';

export const Route = createFileRoute('/_marketing/installations')({
  component: InstallationsPage,
});
