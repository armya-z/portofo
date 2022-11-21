export default function MainPost({ post }) {
  return (
    <>
      <div className="h-84 max-w-sm rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <figure>
          <img
            className="max-h-44 rounded-t-lg"
            src={post.image}
            alt="image name"
          />
        </figure>

        <div className="h-48 p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
          <p className="mb-3 font-normal text-gray-300">
            {post.author}
          </p>

          <button
            type="button"
            className=" mr-2  rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
