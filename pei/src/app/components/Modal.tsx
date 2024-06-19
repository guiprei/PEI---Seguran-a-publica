import Image from "next/image";
import React from "react";


const Modal = ({visivel, onClose}) => {
    if ( !visivel ) return null;
    return (
        <div className="card fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center ">
            <div className="flex flex-col justify-center items-center  w-[1200px] ">
        <div className="bg-gradient-to-r from-[#C6B41A] to-[#60570D] w-full flex justify-center rounded-t-3xl flex-col ">
        <button className="text-white place-self-end text-2xl m-7" onClick={() => onClose()}><strong>X</strong></button>
        <Image className="my-3 place-self-center" src="/PoliciaFederealIcon.svg" alt="Logo Policia Federal" width={130}
        height={130}/>
      </div>
      <div className="bg-white flex flex-col justify-center px-6 rounded-b-3xl gap-5">
        <div className="flex flex-col justify-center items-center">
            <span className="text-center my-5 text-3xl"><strong>POLICIA FEDERAL</strong></span>
            <hr className=" border-2 rounded-lg border-[#6d6a6a57] w-3/6" />
        </div>
        <div className="flex gap-7 my-9">
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#C6B41A] rounded-lg p-5">
                <Image src="/DistintivoIcon.svg" alt="Icone Distintivo" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Funcionalidade</span>
                <p className="">A Policia Federal, instituída por lei como órgão permanente, organizado e mantido pela união e estruturado em carreira. Subordinada ao ministério da justiça e segurança pública, que, de acordo com a constituição de 1988, exerce com exclusividade as funções de polícia judiciaria da união.</p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#C6B41A] rounded-lg p-5">
            <Image src="/FundacaoIcon.svg" alt="Icone Fundacao" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Fundação</span>
                <p>Segundo alguns historiadores a polícia federal remonta ao período do estado novo (1937-1945), no governo de Getúlio Vargas, quando este, no dia 28 de março de 1944, altera a denominação da antiga polícia civil do Distrito Federal para Departamento Federal de Segurança Pública (DFPS), por meio do Decreto-Lei n°6 378. A mudança de nomenclatura foi motivada pela necessidade de uma polícia com atuação em todo território nacional.</p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#C6B41A] rounded-lg p-5">
            <Image src="/TecnologiaIcon.svg" alt="Icone Tecnologia" width={50} height={50}/>
            <span className="text-[#14193D] text-2xl font-extrabold">Impacto Tecnológico</span>
            <p>Antes do ano de 2002, as investigações ficavam restritas à burocracia da saleta do delegado e do escrivão. Os agentes saíam ás ruas para cumprir diligencias; na volta entregavam as informações e o papelório era despachado. A partir de então começaram a se usar pequenos sensores, câmeras em forma de botões de camisetas e telefones celulares que na verdade são câmeras e gravadores de áudio e monitoramentos remotos.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      
      
    )
}
export default Modal