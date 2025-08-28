interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowItWorksStep = ({ step, title, description, icon }: HowItWorksStepProps) => {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4 shadow-soft">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};