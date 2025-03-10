const Breadcrumb = ({ pathname }: { pathname?: string }) => {
  return (
    <header className="flex justify-center font-medium">{pathname}</header>
  );
};

export default Breadcrumb;
