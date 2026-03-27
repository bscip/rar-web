import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/technology')({
  loader: () => { throw redirect({ to: '/', replace: true }); },
});
