import { onMount } from "solid-js";

const IntroProfile = () => {
  let img1;
  let img2;
  onMount(() => {
    const backgroundImage = `url(${profileImg})`;

    if (!img1) {
      setTimeout(() => {
        if (!img1) return;
        img1.style.backgroundImage = backgroundImage;
        img2.style.backgroundImage = backgroundImage;
      }, 100);
      return;
    }

    img1.style.backgroundImage = backgroundImage;
    img2.style.backgroundImage = backgroundImage;
  });
  return (
    <div className="relative">
      <div
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] relative z-1"
        style={`background-size: contain;
        background-position: center;
        background-repeat: no-repeat;`}
        ref={img1}
      ></div>
      <div
        className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] blur-[23px] translate-x-[12px] translate-y-[24px]"
        style={`background-size: contain;
        background-position: center;
        background-repeat: no-repeat;`}
        ref={img2}
      ></div>
      {/* <img
              className="w-[200px] sm:w-[250px] relative z-1"
              src={profileColorfullImg}
              alt=""
            />

            <img
              className="absolute top-0 left-0 w-[200px] sm:w-[250px] blur-[23px] translate-x-[12px] translate-y-[24px]"
              src={profileColorfullImg}
              alt=""
            /> */}
    </div>
  );
};

const profileImg =
export default IntroProfile;