import { format } from 'date-fns';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const formatDate = (date: string | Date) => format(new Date(date), 'yyyy-MM-dd'); // Consistent format

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const { _createdAt, views, author: { _id: authorId, name }, title, category, _id, image, description } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={`${name}'s profile`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_description">{description}</p>
        <Image
          src={image }
          alt="Startup"
          width={300}
          height={200}
          className="startup-card_img"
        />
      </Link>
    </li>
  );
};

export default StartupCard;
