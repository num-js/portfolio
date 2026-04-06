type ActiveStatusGreenDotProps = {
    icon: string;
    inactive?: boolean;
};

const ActiveStatusGreenDot = ({ icon, inactive }: ActiveStatusGreenDotProps) => {
    const imgURL = '/icons/' + icon;
    return (
        <div
            style={{ backgroundImage: 'url(' + imgURL + ')' }}
            className="flex h-[53px] w-[53px] flex-row-reverse rounded-full bg-cover bg-center bg-[rgb(214,214,214)]"
        >
            <div
                className={`-mr-1 -mt-1 h-[18px] w-[18px] rounded-full border-[3.5px] border-[rgb(39,39,39)] ${
                    inactive ? 'bg-[rgb(78,78,78)]' : 'bg-primary'
                }`}
            />
        </div>
    );
};

export default ActiveStatusGreenDot;
