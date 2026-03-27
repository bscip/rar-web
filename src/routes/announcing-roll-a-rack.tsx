import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/announcing-roll-a-rack')({
  loader: () => { throw redirect({ to: '/', replace: true }); },
});
