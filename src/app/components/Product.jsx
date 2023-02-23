import React from "react";

const Product = () => {
  return (
    <div className="w-[1185px] mx-auto">
      <div className={`interest text-[13px] my-5`}>
        <strong className="text-[rgba(0,0,0,.9)] mr-2">
          También puede interesarte:
        </strong>
        teclado hpkeycaps - teclado bluetooth - rk61red dragonducky - teclado
        ergonomico
      </div>
      <div className="product">
        <div className={`breadcrumb flex justify-between`}>
          <div className={`breabcrumb__left`}>
            <ul className="flex">
              <li className="text-[13px] mr-5">Volver al listado</li>
              <li className="text-[13px] mr-5 text-blue-500">Computación</li>
              <li className="text-[13px] mr-5 text-blue-500">
                Periféricos de PC
              </li>
              <li className="text-[13px] mr-5 text-blue-500">
                Mouses y Teclados
              </li>
              <li className="text-[13px] mr-5 text-blue-500">Teclados</li>
              <li className="text-[13px] mr-5 text-blue-500">
                Teclados Físicos
              </li>
            </ul>
          </div>
          <div className={`breabcrumb__right `}>
            <ul className="flex justify-end">
              <li className="text-[13px] mr-5 text-blue-500">Compartir</li>
              <li className="text-[13px] mr-5 text-blue-500">
                Vender uno igual
              </li>
            </ul>
          </div>
        </div>
        <div className={`content bg-white p-5 flex mt-3`}>
          <div className={`thumbnail w-[5%] p-2`}>
            <ul className="flex flex-col">
              <li className="border border-gray-300 rounded-md py-2 px-4 mb-2">
                <img src="/teclado-img.png" alt="Teclado" />
              </li>
              <li className="border border-gray-300 rounded-md py-2 px-4 mb-2">
                <img src="/teclado-img.png" alt="Teclado" />
              </li>
              <li className="border border-gray-300 rounded-md py-2 px-4 mb-2">
                <img src="/teclado-img.png" alt="Teclado" />
              </li>
              <li className="border border-gray-300 rounded-md py-2 px-4 mb-2">
                <img src="/teclado-img.png" alt="Teclado" />
              </li>
            </ul>
          </div>
          <div className={`product__image w-[35%] p-2`}>
            <img src="/teclado-img.png" alt="Teclado" />
          </div>
          <div className={`product__info w-[30%] p-2`}>
            <div
              className={`info__quality text-[rgba(0,0,0,.55)] text-[12px] mb-3`}
            >
              Nuevo | +500 vendidos
            </div>
            <div className={`info__title text-[22px] mb-3`}>
              Teclado Bluetooth Redragon Fizz Pro Argentina K616-rgb-ar Qwerty
              Red Español Color Celeste Y Blanco Con Luz Rgb
            </div>
            <div className={`info__more-sell flex mb-3`}>
              <div className="text-[11px] text-bold mr-3 uppercase bg-[#f73] text-white pt-[3px] px-[3px]  rounded-sm font-bold">
                Mas vendidos
              </div>
              <div className="text-[11px] text-blue-500 pt-[3px] ">
                7° en Teclados fisicos
              </div>
            </div>
            <div className={`info__price flex flex-col`}>
              <span className={`price text-[36px]`}>$18.499</span>
              <span className={`installment`}>en 12x $3.144</span>
              <span className={`payments mb-3 text-[12px] text-blue-500`}>
                Ver los medios de pago
              </span>
            </div>
            <div className={`info__description mb-3`}>
              <span className={`text-[13px] font-bold`}>
                Lo que tenés que saber de este productos
              </span>
              <ul className={`text-[12px] list-disc`}>
                <li className={`mt-2 mb-2`}>
                  Conectividad con múltiples dispositivos.
                </li>
                <li className={`mb-2`}>Resiste a salpicaduras.</li>
                <li className={`mb-2`}>Tipo de teclado: mecánico.</li>
                <li className={`mb-2`}>Con conector USB 2.0.</li>
                <li className={`mb-2`}>Con cable removible.</li>
              </ul>
            </div>
          </div>
          <div className={`shipping_info w-[30%] p-5 border rounded-md`}>
            <div className="shipping__today flex flex-col mb-3">
              <span className={`mb-1 text-[#00a650] text-[16px]`}>
                Llega gratis <span className={`font-bold`}>hoy</span>
              </span>
              <span className={`mb-1 text-[rgba(0,0,0,.55)] text-[12px]`}>
                Comprando dentro de las próximas 7h 3min
              </span>
              <span className={`mb-1 text-[12px] text-blue-500`}>
                Enviar a Calle falsa 123
              </span>
            </div>
            <div className={`sell__by text-[12px] mb-4`}>
              <p>
                Vendido por{" "}
                <span className={`mb-1 text-blue-500 text-[12px]`}>
                  TecladosLumilag
                </span>
              </p>
              <p>MercadoLíder | +10mil ventas</p>
              <p className={`mb-1 text-[rgba(0,0,0,.55)] text-[11px]`}>
                Hace Factura A
              </p>
            </div>
            <div className={`stock mb-3`}>
              <p>Stock disponible</p>
            </div>
            <div className={`quantity mb-3`}>
              <p>
                Cantidad: <span className={`font-bold`}>1 unidad</span>{" "}
                <span>(14 disponibles)</span>
              </p>
            </div>
            <div className="buy__buttons">
              <button class="w-full mb-3 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Comprar ahora
              </button>
              <button class="w-full bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">
                Agregar al carrito
              </button>
            </div>
            <div className={`shipping_description mt-4 text-blue-500`}>
              <ul className={`text-[13px] `}>
                <li className={`mb-2`}>Devolución gratis</li>
                <li className={`mb-2`}>Compra Protegida</li>
                <li className={`mb-2`}>Mercado Puntos</li>
                <li className={`mb-2`}>6 meses de garantia de fábrica</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
