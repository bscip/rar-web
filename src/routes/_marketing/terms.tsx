import { createFileRoute } from '@tanstack/react-router';
import { TermsPage } from '../../pages/TermsPage';

export const Route = createFileRoute('/_marketing/terms')({
  component: TermsPage,
});
