import { createFileRoute } from '@tanstack/react-router';
import { PartnersPage } from '../../pages/PartnersPage';

export const Route = createFileRoute('/_marketing/partners')({
  component: PartnersPage,
});
