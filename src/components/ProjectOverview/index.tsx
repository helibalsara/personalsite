interface ProjectOverviewProps {
  role?: string;
  duration?: string;
  disciplines?: string;
  team?: string;
  description?: React.ReactNode;
}

export default function ProjectOverview({
  role,
  duration,
  disciplines,
  team,
  description,
}: ProjectOverviewProps) {
  return (
    <div className="flex flex-row w-full gap-[94px] px-[182px] py-16">
      <div className="flex flex-col gap-4 flex-1">
        {[role, duration, disciplines, team]
          .filter((item) => item !== undefined)
          .map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <h3 className="font-bold">
                {["Role", "Duration", "Disciplines", "Team"][index]}
              </h3>
              <p className="text-base">{item}</p>
            </div>
          ))}
      </div>
      <div className="flex-1">
        <h2 className="text-xl">{description}</h2>
      </div>
    </div>
  );
}
