
const ShoeCard = ({shoe, changeBigShoeImg, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== shoe.bigShoe) {
            changeBigShoeImg(shoe.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === shoe.bigShoe ? 'border-coral-red' : 'border-transparent max-sm:flex-1'} cursor-pointer`}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img 
                src={shoe.thumbnail}  
                alt="shoe collection" 
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard
