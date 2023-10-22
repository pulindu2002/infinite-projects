import TeamCard from "./TeamCard";

const teamData = [
  {
    id: 1,
    name: "Gay venuja",
    role: "Technical Developer Backend",
    image:
      "https://i.pinimg.com/564x/82/f9/2c/82f92c1a604428ad4c8e86222f86b79f.jpg",
    joined: "2022 Mar 20",
  },
  {
    id: 2,
    name: "pulindu",
    role: "Backend Developer and Database",
    image:
      "https://i.pinimg.com/564x/11/b6/89/11b68993d0858e86b2b50808438608a5.jpg",
    joined: "2023 Mar 20",
  },
  {
    id: 3,
    name: "Praveen",
    role: "fullstack dev",
    image:
      "https://i.pinimg.com/564x/7f/11/0b/7f110b6da087e312ed7b914fc1b4513b.jpg",
    joined: "2022 Mar 20",
  },
  {
    id: 4,
    name: "Hirusha",
    role: "fullstack dev",
    image:
      "https://i.pinimg.com/564x/52/68/ad/5268ada2ea487ae18f757b85b89cc94a.jpg",
    joined: "2022 Mar 20",
  },
  {
    id: 5,
    name: "Ravindu",
    role: "fullstack dev",
    image:
      "https://i.pinimg.com/564x/30/57/9d/30579db4a2bae3fc01fafd4d9fc4474e.jpg",
    joined: "2022 Mar 20",
  },
];

export default function About() {
  return (
    <div className=" container py-36 ">
      <h1 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Say hello to team
      </h1>
      <div className="grid mx-0 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            id={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            joined={member.joined}
          />
        ))}
      </div>
    </div>
  );
}
