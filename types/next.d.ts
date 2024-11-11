/// <reference types="next" />

declare module 'next' {
  export type Metadata = {
    title?: string;
    description?: string;
  };
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function redirect(url: string): never;
}

declare module 'next/link';
declare module 'next/image';
declare module 'next/script';
declare module 'next/server';