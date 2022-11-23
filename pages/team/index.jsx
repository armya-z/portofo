import MemberCard from "../../components/member";

export default function allTeam({ members }) {
  return (
    <>
      <h1 className="my-8 text-center text-4xl">
        All team
      </h1>
      <div className="fllex-row flex w-full bg-white bg-opacity-0">
        {members.map((member) => {
          return (
            <div key={member.id}>
              <MemberCard member={member} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/portofo"
  );
  const data = await response.json();
  return {
    props: {
      members: data,
    },
  };
}
