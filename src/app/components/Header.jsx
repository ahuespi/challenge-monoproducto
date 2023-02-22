import React from "react";

const Header = () => {
  return (
    <div className="h-[100px] bg-[#fff159] w-full flex justify-center">
      <div className="w-[1185px]">
        <div className="mt-3 flex justify-between h-[56px]">
          <img className="w-[134px] h-[34px] mt-1" src="/logo.png" alt="Logo" />
          <div className="input">
            <input
              type="text"
              name="Search"
              id="Search"
              placeholder="Buscar productos,marcas y más..."
              className="w-[549px] px-4 py-2 shadow-md text-slate-200 placeholder-gray-300"
            />
          </div>
          <img
            className="w-[340px] h-[39px]"
            src="/starplus.png"
            alt="Suscripción Star Plus"
          />
        </div>
        <div className={`topContent flex justify-between `}>
          <div className={`address flex h-[25px] `}>
            <img className="mr-1" src="/address.png" alt="" />
            <div className="flex w-[100px] flex-col leading-[14px] ">
              <span className="text-[11px] text-[rgba(51,51,51,.6)]">
                Enviar a Amir
              </span>
              <span className="text-[13px]">Calle falsa 1234</span>
            </div>
          </div>
          <div
            className={`categories-menu text-[12px] flex text-[rgba(51,51,51,.6)] `}
          >
            <ul className="flex">
              <li className="ml-4 text-[14px]">Categorias</li>
              <li className="ml-4 text-[14px]">Ofertas</li>
              <li className="ml-4 text-[14px]">Historial</li>
              <li className="ml-4 text-[14px]">Supermercado</li>
              <li className="ml-4 text-[14px]">Moda</li>
              <li className="ml-4 text-[14px]">Vender</li>
              <li className="ml-4 text-[14px]">Ayuda</li>
            </ul>
          </div>
          <div className="user-menu">
            <ul className="flex ">
              <li className="ml-5 text-[14px] after:content-userImage">Amir</li>
              <li className="ml-5 text-[14px]">Mis compras</li>
              <li className="ml-5 text-[14px]">Favoritas</li>
              <li className="ml-5 text-[14px]">Notificaciones</li>
              <li className="ml-5 text-[14px]">Minicart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
