import { createFileRoute } from '@tanstack/react-router';
import { ForInvestorsPage } from '../../pages/ForInvestorsPage';

export const Route = createFileRoute('/_marketing/for-investors')({
  component: ForInvestorsPage,
});
