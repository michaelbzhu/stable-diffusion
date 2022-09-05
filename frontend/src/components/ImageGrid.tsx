import { FC } from 'react'

const ImageRow: FC = () => {
  return (
    <div className="flex h-1/2 my-4">
      <img
        src="https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
        alt=""
        className="w-1/2 p-4"
      />
      <img
        src="https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
        alt=""
        className="w-1/2 p-4"
      />
    </div>
  )
}

const ImageGrid: FC = () => {
  return (
    <div className="flex flex-col">
      <ImageRow />
      <ImageRow />
    </div>
  )
}

export default ImageGrid
