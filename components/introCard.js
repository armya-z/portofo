export default function IntroCard({ member }) {
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
        className={`${listColor[index]} justify-evenly text-black italic text-sm rounded-lg w-16 p-1 m-2 flex flex-row`}
      >
        {member}
      </li>
    )
  );

  return (
    <>
      <div className="w-96 max-w-md h-96 py-4 px-8 m-10 bg-gradient-to-br from-slate-700 to-cyan-600 shadow-2xl rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16 ">
          <img
            className="w-40 h-40 object-cover rounded-full border-2 border-grey shadow-2xl"
            src={member.image}
            alt={member.name}
          />
        </div>

        <h1 className=" self-center text-white text-3xl font-semibold ">
          {member.name} {member.family}
        </h1>
        <h2 className="self-center text-white text-ml font-sans italic">
          {member.jtitle}
        </h2>

        <ul className="  mt-2 text-white flex flex-row flex-wrap ">
          {listItems}
        </ul>
      </div>
    </>
  );
}
