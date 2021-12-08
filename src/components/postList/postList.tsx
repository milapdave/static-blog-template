import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { PostSnippet } from "../../types";
export interface PostList {
  posts: PostSnippet[];
}

export const PostListItem: FunctionComponent<PostSnippet> = ({
  href,
  img,
  imgAlt,
  title,
  tags,
  summary,
}) => {
  return (
    <div className="flex px-14 flex-col rounded-lg overflow-hidden  mb-16 sm:mb-16">
      <div className="mb-6 blogthum">
        <a href={href}>
          <Image
            fluid={img}
            alt={imgAlt || title}
            className="w-full object-cover rounded-sm"
          />
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="block">
          <a href={href}>
            <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
          </a>
          <div className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map((tag, index) => (
              <span key={index} className="mr-4">
                <a href={`/tags/${tag}`} className="hover:underline">
                  #{tag}
                </a>
              </span>
            ))}
          </div>
          {/* <a href={href}>
            <p className="mt-3 text-base leading-6 text-gray-500">{summary}</p>
          </a> */}
          {/* <p dangerouslySetInnerHTML={{ __html: summary }} /> */}
        </div>
        <div className="mt-4">
          <a href={summary} target="_blank" rel="noreferrer" className="block font-medium tracking-wide">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export const PostList: FunctionComponent<PostList> = ({ posts }) => {
  return (
    <div className="mt-3 grid gap-5 xl:gap-10 max-w-lg mx-auto grid-cols-1 md:grid-cols-3 md:max-w-none">
      {posts.map((post, index) => (
        <PostListItem {...post} key={index} />
      ))}
    </div>
  );
};
