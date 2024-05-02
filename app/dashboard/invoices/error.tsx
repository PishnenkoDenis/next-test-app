'use client';

import { useEffect } from 'react';

type TError = Error & { digest: string };

export default function Error({
  error,
  reset,
}: {
  error: TError;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReset = () => reset();
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={handleReset}
      >
        Try again
      </button>
    </main>
  );
}
