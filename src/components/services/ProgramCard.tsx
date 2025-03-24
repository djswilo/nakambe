
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  details: string[];
};

const ProgramCard = ({ icon, title, description, details }: ProgramCardProps) => {
  return (
    <div className="card-hover bg-white p-8 rounded-xl shadow-subtle flex flex-col h-full">
      <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      <div className="mt-auto">
        <h4 className="font-medium text-sm uppercase tracking-wider text-primary mb-3">
          Key Components
        </h4>
        <ul className="space-y-2">
          {details.map((detail, i) => (
            <li key={i} className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
              <span className="text-sm text-foreground/80">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramCard;
