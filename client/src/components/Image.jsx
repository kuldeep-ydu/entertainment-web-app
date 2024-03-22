import { useState } from 'react';

export default function Image({ className, data, title, priority, trending }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <picture
      className={`${className} ${loaded ? '' : 'aspect-[20/9]'} relative before:absolute before:inset-0 before:rounded-lg before:bg-secondary-dark before:z-50 before:transition before:${loaded ? 'opacity-0' : 'opacity-100'}`}
    >
      <source
        srcSet={`${data.large}.jpg`}
        type="image/jpg"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${data.large}.webp`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${data.large}.avif`}
        type="image/avif"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${data.large}.png`}
        type="image/png"
        media="(min-width: 768px)"
      />

      <source srcSet={`${data.small}.avif`} type="image/avif" />
      <source srcSet={`${data.small}.png`} type="image/png" />
      <source srcSet={`${data.small}.jpg`} type="image/jpg" />

      <img
        className={`${trending ? 'block w-full rounded-lg' : ''}`}
        src={`${data.small}.webp`}
        alt={title}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'async' : 'async'}
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={priority ? 'high' : 'low'}
        onLoad={() => setLoaded(true)}
      />
    </picture>
  );
}
