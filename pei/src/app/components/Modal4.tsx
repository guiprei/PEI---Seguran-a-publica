import Image from "next/image";
import React from "react";


const Modal4 = ({visivel, onClose}) => {
    if ( !visivel ) return null;
    return (
        <div className="card fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center ">
            <div className="flex flex-col justify-center items-center  w-[1200px] ">
        <div className="bg-gradient-to-r from-[#C6B41A] to-[#60570D] w-full flex justify-center rounded-t-3xl flex-col ">
        <button className="text-white place-self-end text-2xl m-7" onClick={() => onClose()}><strong>X</strong></button>
        <Image className="my-3 place-self-center" src="/PoliciaCivilIcon.svg" alt="Logo Policia Civil Federal" width={130}
        height={130}/>
      </div>
      <div className="bg-white flex flex-col justify-center px-6 rounded-b-3xl gap-5">
        <div className="flex flex-col justify-center items-center">
            <span className="text-center my-5 text-3xl"><strong>POLICIA CIVIL</strong></span>
            <hr className=" border-2 rounded-lg border-[#6d6a6a57] w-3/6" />
        </div>
        <div className="flex gap-7 my-9">
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#C6B41A] rounded-lg p-5">
                <Image src="/DistintivoIcon.svg" alt="Icone Distintivo" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Funcionalidade</span>
                <p className=""> A Polícia Civil é uma Instituição que integra a estrutura da Secretaria de Estado dos Negócios da Segurança Pública e tem por atribuição principal (essencial) o desenvolvimento das atividades próprias administrativas e de Polícia Judiciária, a Polícia Civil é crucial para a resolução de crimes e para a aplicação da lei, trabalhando para identificar e prender criminosos. 
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#C6B41A] rounded-lg p-5">
            <Image src="/FundacaoIcon.svg" alt="Icone Fundacao" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Fundação</span>
                <p>A Polícia Civil nasceu junto à Secretaria dos Negócios da Justiça, em 1841, tendo como primeiro chefe de polícia, o Conselheiro Rodrigo Antonio Monteiro de Barros, No ano seguinte, surgiu o cargo de delegado de polícia, através da Lei nº 261, de 3 de dezembro, regulamentada pelo Decreto nº 120, de 31 de janeiro, o qual modificou o Código de Processo Criminal, estabelecendo um aparelhamento policial centralizado e eficiente em nosso PaíS.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#C6B41A] rounded-lg p-5">
            <Image src="/TecnologiaIcon.svg" alt="Icone Tecnologia" width={50} height={50}/>
            <span className="text-[#14193D] text-2xl font-extrabold">Impacto Tecnológico</span>
            <p>A tecnologia tem sido fundamental para a modernização das investigações, com a utilização de bancos de dados integrados, análise forense digital, câmeras de vigilância e sistemas de reconhecimento facial.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      
      
    )
}
export default Modal4