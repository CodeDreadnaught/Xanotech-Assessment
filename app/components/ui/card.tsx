import type { ImageInfo } from "@/app/lib/models";
import Image from "next/image";

interface CardProps {
  image: ImageInfo;
  index: number;
}

const Card = ({ image, index }: CardProps) => {
  return (
    <div
      className="flex w-full flex-col items-center border border-gray-200 overflow-hidden rounded-lg bg-zinc-100 shadow-sm"
      key={image.id}
    >
      <div className="w-full relative h-52">
        <Image
          src={image.urls.regular}
          priority={index < 10}
          alt={image.description || image.alt_description || image.slug}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top"
        />
        <div className="bg-white shadow rounded-full absolute text-[11px] px-2.5 py-1 right-3 top-3">
          ❤️ {image.likes}
        </div>
      </div>
      <div className="p-5 flex items-between w-full items-center justify-between">
        <div className="size-8 rounded-full border-2 border-zinc-800 flex-shrink-0">
          <Image
            src={image.user.profile_image.large}
            alt={image.user.username}
            height={32}
            width={32}
            className="rounded-full"
          />
        </div>
        <p className="text-sm truncate pl-2">{image.user.username}</p>
      </div>
    </div>
  );
};

export default Card;
