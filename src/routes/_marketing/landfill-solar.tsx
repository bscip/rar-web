import { createFileRoute } from '@tanstack/react-router';
import { LandfillSolarPage } from '../../pages/LandfillSolarPage';

export const Route = createFileRoute('/_marketing/landfill-solar')({
  component: LandfillSolarPage,
});
