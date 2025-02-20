import { getImageProps } from 'next/image';

const ImageResponsive = ({
  src,
  srcMobile,
  alt,
  sizes,
  fill,
  priority = false,
  quality = 75,
  className,
  pictureClassName,
}: {
  src: string;
  srcMobile: string;
  alt: string;
  sizes: string;
  fill: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
  pictureClassName?: string;
}) => {
  const common = {
    alt: alt,
    sizes: sizes,
    fill: fill,
    priority: priority,
    quality: quality,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: src,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: srcMobile,
  });

  return (
    <picture className={pictureClassName}>
      <source media='(min-width: 680px)' srcSet={desktop} />
      <source media='(max-width: 680px)' srcSet={mobile} />
      <img
        {...rest}
        alt='V Transfer Belgrade'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className={`object-cover -z-10 ${className}`}
      />
    </picture>
  );
};

export default ImageResponsive;
