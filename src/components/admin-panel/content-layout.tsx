import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar title={title} />
      <div className="flex flex-col flex-grow pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
