import { FC } from 'react'

type ImageItemProps = {
  src: string
}

const ImageItem: FC<ImageItemProps> = ({ src }) => {
  return <img src={src} alt="" className="w-1/2 p-4" />
}

type ImageRowProps = {
  images: string[]
}

const ImageRow: FC<ImageRowProps> = ({ images }) => {
  return (
    <div className="flex h-1/2 my-4">
      <ImageItem src={images[0]} />
      <ImageItem src={images[1]} />
    </div>
  )
}

const ImageGrid: FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <ImageRow
        images={[
          'https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg',
          'https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg',
        ]}
      />
      <ImageRow
        images={[
          'https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg',
          'https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg',
        ]}
      />
    </div>
  )
}

export default ImageGrid
