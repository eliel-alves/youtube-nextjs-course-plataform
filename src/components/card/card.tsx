import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const Card = ({ title, description, imageUrl, href }: CardProps) => {
  return (
    <Link href={href} className="block md:max-w-[400px]">
      <article className="flex flex-col gap-2 rounded-xl border bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900 md:hover:bg-primary">
        <Image
          src={imageUrl}
          width={1000}
          height={0}
          className="aspect-video rounded-lg object-cover"
          alt="Curso Criação de Landing Pages com WordPress e Elementor"
          draggable="false"
        />

        <div className="flex flex-col gap-2 p-3">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="line-clamp-3 text-sm text-zinc-500 dark:text-zinc-400 md:line-clamp-4 md:text-base">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
