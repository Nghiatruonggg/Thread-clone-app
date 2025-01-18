const ProfileIcon = ({ className }: { className: string }) => {
    return (
        <svg
            aria-label="ProfileIcon"
            role="img"
            viewBox="0 0 26 26"
            className={className}
            style={{ fill: "transparent", height: "24px", width: "24px" }}
        >
            <title>ProfileIcon</title>
            <circle
                cx="13"
                cy="7.25"
                r="4"
                stroke="currentColor"
                strokeWidth="2.5"
            ></circle>
            <path
                d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
                stroke="currentColor"
                strokeWidth="2.5"
            ></path>
        </svg>
    );
};

export default ProfileIcon;
