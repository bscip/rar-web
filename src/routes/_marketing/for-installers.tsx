import { createFileRoute } from '@tanstack/react-router';
import { ForInstallersPage } from '../../pages/ForInstallersPage';

export const Route = createFileRoute('/_marketing/for-installers')({
  component: ForInstallersPage,
});
