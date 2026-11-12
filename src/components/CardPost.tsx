
interface CardPostProps {
    title: string;
    description?: string;
    imgPath?: string;
}

const CardPost = ({title, description, imgPath }: CardPostProps) => {
    return (
        <div className="flex flex-col w-80 h-96 bg-gray-200 rounded-lg shadow-md p-4">
            <h1>{title}</h1>
        </div>
    )
}

export default CardPost; 