const SocialCard = ({ icon, title, username, styles }) => {
    return (
        <div className={`flex p-[10px] ${styles}`}>
            <span className="w-[30px] text-white">{icon}</span>
            <div className="flex justify-between flex-col">
                <h1 className="text-white text-[12px]">{title}</h1>
                <p className="text-[10px] text-gray-400">{username}</p>
            </div>
        </div>
    )
}

export default SocialCard;