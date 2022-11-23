import Link from "next/link";

export default function PostPage({
  post,
  allpost,
}) {
  const allPostTitle = allpost;
  const postList = allPostTitle.map((item) => {
    return (
      <Link href={`/blog/${item.title}`}>
        <li className="my-5 flex flex-row-reverse items-center justify-end text-xs">
          {item.title}
          <img
            src={item.image}
            className="mx-5 w-20 rounded-xl"
          />
        </li>
      </Link>
    );
  });

  return (
    <>
      <div className="m-10 flex justify-center">
        <div className="flex w-4/5 flex-col">
          <figure className="mb-10 self-center">
            <img
              src={post.image}
              className="w-full rounded-2xl"
            />
          </figure>
          <section className="flex flex-col justify-around">
            <h1 className="self-center p-10 text-4xl">
              {post.title}
            </h1>
            <p className="self-center px-28 py-8 text-lg">
              {post.body}
            </p>
            <p className="text-ml mb-10 self-center rounded-xl border border-black bg-black p-3 text-white hover:shadow hover:shadow-black">
              {post.author}
            </p>
          </section>
        </div>

        <div className="border-grey-100 mt-24 flex h-fit w-1/5 rounded-lg border">
          <section className="mt-5 w-full text-center">
            <h2>related posts</h2>
            <ul>{postList}</ul>
          </section>
        </div>
      </div>
    </>
  );
}
