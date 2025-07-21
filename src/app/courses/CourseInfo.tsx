interface CourseInfoProps {
  items: Array<{
    icon: React.ReactNode;
    text: string;
    highlight?: boolean;
  }>;
}

export default function CourseInfo({ items }: CourseInfoProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          {item.icon}
          <span
            className={`text-white ${
              item.highlight ? "font-normal text-xl" : ""
            }`}
            data-edit-disabled="true"
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
