
import { 
  HeartHandshake, Home, Shield, 
  Sparkles, BookOpen, HeartPulse 
} from "lucide-react";
import ProgramCard from "./ProgramCard";

const ProgramsGrid = () => {
  const services = [
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "GBV Prevention & Support",
      description: "Providing psychosocial support, counselling, awareness campaigns, and community outreach to combat gender-based violence.",
      details: [
        "Initial engagement and client reception",
        "Assessment and care plan development",
        "Court preparation and support",
        "Individual and group counselling sessions"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Family Preservation Services",
      description: "Offering mediation, parenting plan development, bereavement counselling, and conflict resolution interventions.",
      details: [
        "Marital dispute resolution",
        "Parenting agreements development",
        "Bereavement and trauma counselling",
        "Conflict resolution interventions"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Anti-Substance Abuse Services",
      description: "Providing prevention, treatment, and rehabilitation support for individuals affected by substance abuse.",
      details: [
        "Prevention programs",
        "Counselling and therapy",
        "Outpatient support services",
        "Community awareness initiatives"
      ]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Restorative Justice & Child Diversion",
      description: "Offering diversion and rehabilitation services for children at risk or in conflict with the law.",
      details: [
        "Victim-Offender Mediation (Mina na Makwerhu)",
        "Family Group Conferences (Midyangu ya Hina)",
        "Youth Life Skills Development (Rendzo ra Mina)",
        "Rehabilitation support"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "After-School Care Programme",
      description: "Supporting children with academic progress and holistic development while reducing dropout rates and social risks.",
      details: [
        "Homework supervision and academic support",
        "Reading and writing skills development",
        "Sports, music, drama, and recreational activities",
        "Structured and free play under supervision"
      ]
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Other Support Services",
      description: "Providing additional services including HIV/AIDS prevention, support for vulnerable populations, and mental health promotion.",
      details: [
        "HIV/AIDS prevention, care, and support",
        "Protection of vulnerable children",
        "Support services for persons with disabilities",
        "Elderly care and mental health services"
      ]
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ProgramCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          details={service.details}
        />
      ))}
    </div>
  );
};

export default ProgramsGrid;
