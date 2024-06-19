import Image from "next/image";
import React from "react";


const Modal3 = ({visivel, onClose}) => {
    if ( !visivel ) return null;
    return (
        <div className=" card fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center ">
            <div className="flex flex-col justify-center items-center  w-[1200px] ">
        <div className="bg-gradient-to-r from-[#652010] to-[#47160C] w-full flex justify-center rounded-t-3xl flex-col ">
        <button className="text-white place-self-end text-2xl m-7" onClick={() => onClose()}><strong>X</strong></button>
        <Image className="my-3 place-self-center" src="/PoliciaRodoviariaFederal.svg" alt="Logo Policia Ferroviaria Federal" width={130}
        height={130}/>
      </div>
      <div className="bg-white flex flex-col justify-center px-6 rounded-b-3xl gap-5">
        <div className="flex flex-col justify-center items-center">
            <span className="text-center my-5 text-3xl"><strong>POLICIA FERROVIÁRIA FEDERAL</strong></span>
            <hr className=" border-2 rounded-lg border-[#6d6a6a57] w-3/6" />
        </div>
        <div className="flex gap-7 my-9">
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#652010] rounded-lg p-5">
                <Image src="/DistintivoIcon.svg" alt="Icone Distintivo" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Funcionalidade</span>
                <p className=""> Polícia Ferroviária Federal (PFF) é uma instituição policial ostensiva federal brasileira cuja principal função é garantir a segurança com cidadania nas ferrovias federais e em áreas de interesse da União, previsto na Constituição Federal mas ainda não instituído integralmente, seja administrativamente ou funcionalmente. Hoje em dia, poucos brasileiros conhecem a PFF, como é chamada. Seu contingente é de aproximadamente 1.200 agentes, muitos deles cedidos de outros órgãos de governo, sendo poucos os membros, de fato, policiais ferroviários.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#652010] rounded-lg p-5">
            <Image src="/FundacaoIcon.svg" alt="Icone Fundacao" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Fundação</span>
                <p>Foi criada em 1852, por meio do Decreto nº 641, de 26 de junho de 1852 assinado pelo imperador Dom Pedro II, inicialmente com a denominação de Polícia dos Caminhos de Ferro,com a responsabilidade de cuidar das riquezas do Brasil, que eram transportadas em trilhos de ferro. Ela foi a primeira corporação policial especializada do país.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#652010] rounded-lg p-5">
            <Image src="/TecnologiaIcon.svg" alt="Icone Tecnologia" width={50} height={50}/>
            <span className="text-[#14193D] text-2xl font-extrabold">Impacto Tecnológico</span>
            <p>atualmente a Policia Ferroviária Federal não existe de fato, não há o órgão fisicamente formado e não existe quadro de funcionários.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      
      
    )
}
export default Modal3