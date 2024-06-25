import AnimatedTitle from "../UI/AnimatedTitle";

export default function Carosello1(props) {
  return (
    <div className="py-6">
      <div id="myWork" className="my-5 mb-13 ">
        <AnimatedTitle>My WORK</AnimatedTitle>
        <div className="flex justify-center items-center ">
          <div
            style={{
              color: "var(--rosetto)",
              backgroundColor: "var(--rosetto)",
            }}
          >
            <div
              id="carosello-1"
              style={{
                color: "var(--rosetto)",
                backgroundColor: "var(--rosetto)",
              }}
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
