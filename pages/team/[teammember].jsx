import MainPost from "../../components/postCard";
import MemberCard from "../../components/member";

export default function teamMember({
  members,
  posts,
}) {
  const memberPosts = posts.filter((post) => {
    return post.author === members.name;
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="mt-5  md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4">
          <MemberCard member={members} />
        </div>

        <div className="my-10 mx-5 rounded-lg border border-dotted border-gray-400 p-5 text-center">
          <h1 className="text-4xl">
            {members.name} {members.family}
          </h1>
          <h2 className="py-5 text-xl">
            about me
          </h2>
          <p>
            Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
            Similique nam voluptatem atque eius,
            esse est nesciunt voluptatibus maiores
            error, iste laborum ratione sapiente
            provident consectetur et repellendus
            id ipsa excepturi!
            <br />
            <br />
            Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
            Similique nam voluptatem atque eius,
            esse est nesciunt voluptatibus maiores
            error, iste laborum ratione sapiente
            provident consectetur et repellendus
            id ipsa excepturi!
            <br />
            <br />
            Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
            Similique nam voluptatem atque eius,
            esse est nesciunt voluptatibus maiores
            error, iste laborum ratione sapiente
            provident consectetur et repellendus
            id ipsa excepturi!
            <br />
            <br />
          </p>
        </div>
      </div>
      <h2 className="py-5 text-center text-2xl">
        wrote by {members.name} {members.family}
      </h2>
      <div className="grid grid-cols-1 justify-center py-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {memberPosts.map((post) => {
          return (
            <div key={post.id} className="m-5">
              <MainPost post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/portofo"
  );
  const data = await response.json();
  const paths = data.map((member) => {
    return {
      params: {
        teamMember: `${member.id}`,
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
  const respsonseMember = await fetch(
    `https://634d1dd9acb391d34a944653.mockapi.io/api/v1/portofo/${params.teamMember}
`
  );
  const memberData = await respsonseMember.json();

  const responsePost = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts"
  );
  const postData = await responsePost.json();

  return {
    props: {
      members: memberData,
      posts: postData,
    },
    revalidate: 10,
  };
}
