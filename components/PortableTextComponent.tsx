import { urlFor } from '@/lib/sanity/sanityImage';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
        const imageUrl = urlFor(value).width(800).url();
      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || ' '}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
    normal: ({ children }) => <p className="text-base leading-7 my-2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

interface Props {
  value: any;
}

export function PortableTextComponent({ value }: Props) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}
