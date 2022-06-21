import Image from "next/image";

export default function HeroStats({
  isPublicSaleActive,
  isPresaleActive,
  totalSupply,
}) {
  return (
    <>
      <Image
        src="/images/reel2.gif"
        width="300"
        height="300"
        alt="Randomice gif"
        className="sm:rounded-3xl "
      />
      {(isPublicSaleActive || isPresaleActive) && (
        <p className="px-2 py-1 my-4 text-4xl font-extrabold text-center text-gray-800 bg-blue-200 rounded-md font-flower">
          Minted:
          <span className="text-blue-600"> {`${totalSupply}`}</span> / 3000
          <br></br>

        </p>
      )}
    </>
  );
}
