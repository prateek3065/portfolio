import Image from "next/image";
const MyProfilePhoto: React.FC = () => {
  return (
    <div className="w-48 aspect-square rounded-full bg-[#1717176e] overflow-hidden border-2 border-white">
      <Image
        src="/assets/my-photo.jpeg" // no need for `public/`
        alt="bg-img"
        width={400}
        height={0} // use actual height or use `fill`
        priority
      />
    </div>
  );
};

export default MyProfilePhoto;
