import Image from "next/image";
import img from "../public/image1.jpg";
// import blurImage from "../public/image1_blur.jpg"; // 이미지를 블러 처리한 Base64 인코딩 데이터 URL을 가져온다.

const Pets = () => {
  return (
    <>
      <div>
        Static Path
        <div>
          <Image
            src={img}
            placeholder="blur"
            // blurDataURL={blurImage}
            alt="pet"
            width="300"
            height="800"
          />
        </div>
      </div>
      <div>
        Dynamic Path
        {["image1", "image2", "image3", "image4", "image5"].map((image) => (
          <div key={image}>
            <Image src={`/${image}.jpg`} alt="pet" width="300" height="800" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Pets;
