"use client";
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { useEffect, useMemo } from 'react';
import { urlFor } from '@/lib/sanity/sanityImage';
import Image from 'next/image';
import { useToC } from '@/app/content/ToCContext';
import slugify from 'slugify';

interface Props {
  value: any;
}

export function PortableTextComponent({ value }: Props) {
  const { setToC } = useToC();

  const { components, headings } = useMemo(() => {
    const headings: { id: string; text: string; level: number }[] = [];

    const components: PortableTextComponents = {
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
        h2: ({ children }) => {
          const text = String(children);
          const id = slugify(text, { lower: true, strict: true });
          headings.push({ id, text, level: 2 });
          return <h2 id={id} className="text-3xl font-semibold my-4">{children}</h2>;
        },
        h3: ({ children }) => {
          const text = String(children);
          const id = slugify(text, { lower: true, strict: true });
          headings.push({ id, text, level: 3 });
          return <h3 id={id} className="text-2xl font-semibold my-4">{children}</h3>;
        },
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

    return { components, headings };
  }, [value]);

  useEffect(() => {
    setToC(headings);
  }, [headings, setToC]);

  return <PortableText value={value} components={components} />;
}
