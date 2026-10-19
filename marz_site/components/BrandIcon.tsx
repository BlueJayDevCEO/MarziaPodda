import React from 'react';

export type BrandIconKind = 'spiral' | 'lotus' | 'heart' | 'leaf' | 'head';
export default function BrandIcon({ kind = 'spiral', className = '' }: { kind?: BrandIconKind; className?: string }) {
  const paths: Record<BrandIconKind, React.ReactNode> = {
    spiral: <path d="M32 32c0-6-9-6-9 0 0 11 18 12 19 0 1-18-28-21-30-2-3 27 39 31 42 3C58 0 6-5 5 30c-1 16 11 28 27 29" />,
    heart: <path d="M32 54 10 32C-2 19 6 7 18 8c6 .4 11 4 14 9 3-5 8-9 14-9 12-1 20 11 8 24L32 54Z" />,
    leaf: <><path d="M13 55C22 32 35 15 55 9c-2 21-13 34-33 35M19 46l28-27" /><path d="M26 36C15 34 9 24 8 13c14 1 23 10 24 20" /></>,
    lotus: <><path d="M32 54C12 49 5 35 5 23c14 1 24 13 27 31 3-18 13-30 27-31 0 12-7 26-27 31Z" /><path d="M32 44C22 35 20 20 32 7c12 13 10 28 0 37ZM19 31l-4-16 12 7m18 9 4-16-12 7" /></>,
    head: <><path d="M20 56V44l-9-5 4-9C14 7 45 3 51 24c3 10-1 19-10 23v9Z" /><path d="m32 34-8-8c-5-6 2-13 8-7 6-6 13 1 8 7Z" /></>,
  };
  return <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}
