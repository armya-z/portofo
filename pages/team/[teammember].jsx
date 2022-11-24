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
      <div className="fllex-row flex w-full justify-center ">
        <div className="w-1/3">
          <MemberCard member={members} />
        </div>

        <div className="my-10 w-2/3 rounded-lg border border-dotted border-gray-400 p-16 text-center">
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

      <div className="m-5 flex flex-row justify-center p-5">
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
