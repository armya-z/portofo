import IntroCard from "../components/introCard.js";

export default function Home({ members }) {
  return (
    <>
      <div className="bg-main2 bg-cover bg-fixed">
        <h1 className="p-5 text-center font-serif text-4xl text-white">
          Chap Click Team Members
        </h1>
        <div className="fllex-row flex w-full bg-white bg-opacity-0">
          {members.map((member) => {
            return (
              <div key={member.id}>
                <IntroCard member={member} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
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
