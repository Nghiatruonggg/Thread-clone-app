const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      aria-label="Create"
      role="img"
      viewBox="0 0 12 12"
      className={className}
      style={{ fill: "currentColor", height: "24px", width: "24px" }}
    >
      <title>Create</title>
      <path
        d="M6 2v8m4-4H2"
        // stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

export default PlusIcon;
