import { createFileRoute } from '@tanstack/react-router';
import { TeamPage } from '../../pages/TeamPage';

export const Route = createFileRoute('/_marketing/team')({
  component: TeamPage,
});
