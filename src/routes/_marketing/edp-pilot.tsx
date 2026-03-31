import { createFileRoute } from '@tanstack/react-router';
import { EdpPilotPage } from '../../pages/EdpPilotPage';

export const Route = createFileRoute('/_marketing/edp-pilot')({
  component: EdpPilotPage,
});
