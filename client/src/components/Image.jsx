export default function Image({ className, data, title, priority, trending }) {
  return (
    <picture className={className}>
      {data.medium && (
        <>
          <source
            srcSet={data.medium + '.jpg'}
            type="image/jpg"
            media="(min-width: 640px)"
          />
          <source
            srcSet={data.medium + '.webp'}
            type="image/webp"
            media="(min-width: 640px)"
          />
          <source
            srcSet={data.medium + '.avif'}
            type="image/avif"
            media="(min-width: 640px)"
          />
          <source
            srcSet={data.medium + '.png'}
            type="image/png"
            media="(min-width: 640px)"
          />
        </>
      )}

      <source
        srcSet={data.large + '.jpg'}
        type="image/jpg"
        media="(min-width: 768px)"
      />
      <source
        srcSet={data.large + '.webp'}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet={data.large + '.avif'}
        type="image/avif"
        media="(min-width: 768px)"
      />
      <source
        srcSet={data.large + '.png'}
        type="image/png"
        media="(min-width: 768px)"
      />

      <source srcSet={data.small + '.png'} type="image/png" />
      <source srcSet={data.small + '.avif'} type="image/avif" />
      <source srcSet={data.small + '.jpg'} type="image/jpg" />

      <img
        className={trending ? 'block w-full rounded-lg' : ''}
        src={data.small + '.webp'}
        alt={title}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'async' : 'async'}
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={priority ? 'high' : 'low'}
      />
    </picture>
  );
}
