import { CheckCircle } from "lucide-react";

interface FeatureListProps {
  title: string;
  features: string[];
}

export default function FeatureList({ title, features }: FeatureListProps) {
  return (
    <div>
      <h5 className="font-normal text-white mb-3" data-edit-disabled="true">
        {title}
      </h5>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
            <span className="text-white/90" data-edit-disabled="true">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
