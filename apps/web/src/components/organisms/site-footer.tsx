import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 text-[11px] text-[var(--muted-2)]">
        <p className="text-[var(--muted)]">
          One star can&rsquo;t pick your next AI dev tool. Six axes can.
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} EverythingRated · Multi-axis ratings for AI dev tool
          decisions · Anonymous, cookie-bound ratings · POC by{' '}
          <a
            href="https://sarthakagrawal.pages.dev"
            className="underline-offset-4 hover:text-[var(--foreground)] hover:underline"
          >
            Sarthak
          </a>
          .
        </p>
        <p className="mt-1 flex items-center gap-2">
          <Link
            href="/feeds"
            className="underline-offset-4 hover:text-[var(--foreground)] hover:underline"
          >
            JSON & RSS feeds
          </Link>{' '}
          ·{' '}
          <Link
            href="/api-docs"
            className="underline-offset-4 hover:text-[var(--foreground)] hover:underline"
          >
            API docs
          </Link>{' '}
          ·{' '}
          <a
            href="https://github.com/High-Signal-App/everythingrated"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            title="GitHub repository"
            className="inline-flex items-center hover:text-[var(--foreground)]"
          >
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
}
