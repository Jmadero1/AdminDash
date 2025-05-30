interface Props {
  label: string;
}

export const SidebarItem = ({ label }: Props) => {
  return (
    <div className="px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
      {label}
    </div>
  );
};
