import React, { useEffect, useRef, useState } from "react";

const ProductExperience = () => {
  const blueSwitch = useRef();
  const secondBlueSwitch = useRef();
  const brownSwitch = useRef();
  const secondBrownSwitch = useRef();

  const redSwitch = useRef();
  const secondRedSwitch = useRef();

  const [selectSwitches, setSelectSwitches] = useState();

  useEffect(() => {
    console.log(`Actualiza a: ${selectSwitches}`);
    const play = () => {
      switch (selectSwitches) {
        case "Blue":
          if (blueSwitch.current) {
            blueSwitch.current.play();
            secondBlueSwitch.current.play();

            brownSwitch.current.pause();
            secondBrownSwitch.current.pause();

            redSwitch.current.pause();
            secondRedSwitch.current.pause();
          }
          break;
        case "Brown":
          if (brownSwitch.current) {
            blueSwitch.current.pause();
            secondBlueSwitch.current.pause();

            brownSwitch.current.play();
            secondBrownSwitch.current.play();

            redSwitch.current.pause();
            secondRedSwitch.current.pause();
          }
          break;
        case "Red":
          if (redSwitch.current) {
            blueSwitch.current.pause();
            secondBlueSwitch.current.pause();

            brownSwitch.current.pause();
            secondBrownSwitch.current.pause();

            redSwitch.current.play();
            secondRedSwitch.current.play();
          }
          break;

        default:
          break;
      }
    };
    if (process.browser) {
      document.addEventListener("keydown", function (e) {
        e.preventDefault();
        play();
      });
    }
  }, [selectSwitches]);

  const selectSound = (select) => {
    setSelectSwitches(select);
  };

  return (
    <div className=" mx-auto text-center">
      <h1 className="text-[24px] text-bold">
        Bienvenidx a esta nueva experiencia de compra de teclados mecanicos
      </h1>
      <div className="text-left mx-auto w-[77%] mt-5">
        <p>
          Estas cansado de no saber como suena los switch y tenes que ir a
          buscar videos a youtube?
        </p>
        <p>
          En esta nueva experiencia que creamos para vos, vas a poder conocer el
          ruido que hará tu teclado, para facilitarte la elección y ahorrarte
          mucho tiempo
        </p>
      </div>

      <h3 className="mt-[30px]">
        Tu producto: Teclado Bluetooth Redragon Fizz Pro Argentina K616 Qwerty
      </h3>
      <img src="/teclado-img.png" className="w-[400px] h-[200px] mx-auto" />

      <h3 className="mt-[30px]">
        <p>
          Hace clic sobre el switch que quieras probar y usá tu teclado para
          escuchar como sonaría los switches elegidos...
        </p>
      </h3>

      <div className="mt-3 flex justify-between mx-auto w-[77%]">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => selectSound("Blue")}
        >
          Switches Blue
        </button>
        <button
          className="bg-red-900 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => selectSound("Brown")}
        >
          Switches Brown
        </button>
        <button
          className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => selectSound("Red")}
        >
          Switches Red
        </button>
      </div>

      <audio ref={blueSwitch} src="/resources/mk1.mp3" />
      <audio ref={secondBlueSwitch} src="/resources/mk1b.mp3" />
      <audio ref={brownSwitch} src="/resources/mk3.mp3" />
      <audio ref={secondBrownSwitch} src="/resources/mk3b.mp3" />
      <audio ref={redSwitch} src="/resources/mk5.mp3" />
      <audio ref={secondRedSwitch} src="/resources/mk5b.mp3" />
    </div>
  );
};

export default ProductExperience;
