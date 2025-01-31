interface ContainerProps {
  children: React.ReactNode;
  header: string;
}

export default function Container(props: ContainerProps) {
  return (
    <div className="bg-background min-h-90">
      <div className="p-8">
        <h2 className="p-4 md:text-left text-center text-2xl font-semibold text-primary-content sm:text-3xl">
          {props.header}
        </h2>
        {props.children}
      </div>
    </div>
  );
}
