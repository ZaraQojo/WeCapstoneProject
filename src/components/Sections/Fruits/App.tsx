import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "mammamiasrcimg\f1.png" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const App = () => {
  return (
    <div style={{ justifySelf: "center", margin: "20px" }}>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default App;
