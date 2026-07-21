import CardSkeleton from "./CardSkeleton";

const SkeletonList = ({index}) => {
    return (
        <>
            {Array.from({ length: index }, (_, i) => (
                <div key={i} className="pb-3 col-12 col-md-6 col-lg-4">
                    <CardSkeleton />
                </div>
            ))}
        </>
    )
}


export default SkeletonList;