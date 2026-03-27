import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/videos/feavideo')({
  loader: () => { throw redirect({ to: '/', replace: true }); },
});
