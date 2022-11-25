import Link from "next/link";

export default function MainPost({ post }) {
  return (
    <>
      <div className=" rounded-lg border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <figure>
          <img
            className=" rounded-t-lg border border-black shadow-xl"
            src={post.image}
            alt="image name"
          />
        </figure>

        <div className=" py-5">
          <h3 className="mb-2 mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-base lg:text-sm xl:text-xs">
            {post.title}
          </h3>

          <p className="mb-3 font-normal text-gray-300">
            {post.author}
          </p>

          <button
            type="button"
            className=" mr-2  rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link href={`/blog/${post.id}`}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
