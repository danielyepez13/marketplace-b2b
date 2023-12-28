import Image from "next/image";

const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <Image src={imgSrc} alt="brand image" className="h-10 w-full" width={40} height={40} />
            </a>
        </>
    );
};
export default SingleImage;