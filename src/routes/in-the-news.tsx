import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/in-the-news')({
  loader: () => { throw redirect({ to: '/', replace: true }); },
});
