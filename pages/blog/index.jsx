import MainPost from "../../components/postCard";

export default function blog({ posts }) {
  return (
    <>
      <h1 className="items-center p-5 text-center font-serif text-4xl text-black">
        blog
      </h1>
      <div className=" grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <MainPost post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts"
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
