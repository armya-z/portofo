import Link from "next/link";

export default function PostPage({
  post,
  allpost,
}) {
  const allPostTitle = allpost;
  const postList = allPostTitle.map((item) => {
    return (
      <Link href={`/blog/${item.title}`}>
        <li className="grid grid-cols-1 items-center justify-center py-8 text-xl ">
          {item.title}
          <figure className="p-3">
            <img
              src={item.image}
              className=" rounded-xl"
            />
          </figure>
        </li>
      </Link>
    );
  });

  return (
    <>
      <div className="2xl:mx-30 lg:mx-15 m-2 flex flex-col items-center justify-center xl:mx-20">
        <div className="flex flex-col items-center justify-center">
          <figure>
            <img
              src={post.image}
              className=" rounded-2xl"
            />
          </figure>
          <section className="flex flex-col justify-around">
            <h1 className="self-center p-10 text-2xl">
              {post.title}
            </h1>
            <p className="self-center py-2 px-2 text-lg">
              {post.body}
            </p>
          </section>
        </div>

        <div className="border-grey-100 my-10 rounded-lg border">
          <section className="mt-5 text-center">
            <h2 className="text-2xl">
              related posts
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
              {postList}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
