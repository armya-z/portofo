export default function postPage({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.author}</p>
      <figure>
        <img src={post.image} />
      </figure>
    </>
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
  console.log(context);
  const response = await fetch(
    `https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
