const MoreIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            aria-label="More"
            role="img"
            viewBox="0 0 24 24"
            className={className}
            style={{ fill: "currentColor", height: "24px", width: "24px" }}
        >
            <title>More</title>
            <rect style={{ width: "21px", height: "2.5px" }} x="3" y="7"></rect>
            <rect
                style={{ width: "14px", height: "2.5px" }}
                rx="1.25"
                x="3"
                y="15"
            ></rect>
        </svg>
    );
};

export default MoreIcon;
