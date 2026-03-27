import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/roll-a-rack-gutter-like-racking-system-collects-rainwater-falling-on-solar-arrays')({
  loader: () => { throw redirect({ to: '/', replace: true }); },
});
