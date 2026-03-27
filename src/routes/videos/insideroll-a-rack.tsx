import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/videos/insideroll-a-rack')({
  loader: () => { throw redirect({ to: '/', replace: true }); },
});
