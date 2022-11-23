export default function MemberCard({ member }) {
  const listColor = [
    `bg-red-400`,
    `bg-orange-400`,
    `bg-yellow-400`,
    `bg-green-400`,
    `bg-cyan-400`,
    `bg-purple-400`,
    `bg-teal-600`,
    `bg-lime-400`,
    `bg-pink-400`,
  ];

  const skillList = member.skills;
  const listItems = skillList.map(
    (member, index) => (
      <li
        key={member}
        className={`${listColor[index]} m-2 flex w-16 animate-fade-in-down flex-row justify-evenly rounded-lg border border-black p-1 text-sm italic text-black shadow-2xl hover:bg-transparent `}
      >
        {member}
      </li>
    )
  );

  return (
    <>
      <div className="m-10 my-20 h-96 w-96 max-w-md rounded-lg  bg-gradient-to-br from-slate-700 to-cyan-600 py-4 px-8 shadow-2xl ">
        <div className="-mt-16 flex justify-center md:justify-end ">
          <img
            className="border-grey h-40 w-40 rounded-full border-2 object-cover shadow-2xl"
            src={member.image}
            alt={member.name}
          />
        </div>

        <h1 className=" self-center text-3xl font-semibold text-white ">
          {member.name} {member.family}
        </h1>
        <h2 className="text-ml self-center font-sans italic text-white">
          {member.jtitle}
        </h2>

        <ul className="  mt-2 flex flex-row flex-wrap text-white">
          {listItems}
        </ul>
      </div>
    </>
  );
}
