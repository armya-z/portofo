import MainPost from "../../components/postCard";

export default function blog({ posts }) {
  return (
    <>
      <div className=" flex flex-row justify-evenly">
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
