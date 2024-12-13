import NextImage, { ImageProps } from 'next/image';

const Image = ({
  width = 500, // Default width
  height = 300, // Default height
  layout = 'intrinsic',
  ...props
}: ImageProps) => {
  return <NextImage {...props} width={width} height={height} layout={layout} />;
};

export default Image;