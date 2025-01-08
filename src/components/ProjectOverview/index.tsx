interface ProjectOverviewProps {
  role: string;
  duration: string;
  disciplines: string;
  team: string;
  description: React.ReactNode;
}

export default function ProjectOverview({
  role,
  duration,
  disciplines,
  team,
  description
}: ProjectOverviewProps) {
  return (
    <div className="flex flex-row w-full gap-[94px] px-[182px] py-16">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Role</h3>
          <p className="text-base">{role}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Duration</h3>
          <p className="text-base">{duration}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Disciplines</h3>
          <p className="text-base">{disciplines}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Team</h3>
          <p className="text-base">{team}</p>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-xl">{description}</h2>
      </div>
    </div>
  );
}
