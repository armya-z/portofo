import PostPage from "../../components/postPage";

export default function postsPage({
  post,
  allpost,
}) {
  return (
    <PostPage post={post} allpost={allpost} />
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts"
  );
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts/${params.postId}`
  );
  const data = await response.json();

  const allPostResponse = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts"
  );
  const allPostData =
    await allPostResponse.json();
  return {
    props: {
      post: data,
      allpost: allPostData,
    },
    revalidate: 10,
  };
}
