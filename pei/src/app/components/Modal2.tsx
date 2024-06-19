import Image from "next/image";
import React from "react";


const Modal2 = ({visivel, onClose}) => {
    if ( !visivel ) return null;
    return (
        <div className="card fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center ">
            <div className="flex flex-col justify-center items-center  w-[1200px] ">
        <div className="bg-gradient-to-r from-[#051A39] to-[#0A2144] w-full flex justify-center rounded-t-3xl flex-col ">
        <button className="text-white place-self-end text-2xl m-7" onClick={() => onClose()}><strong>X</strong></button>
        <Image className="my-3 place-self-center" src="/LogoRodoviariaFederal.svg" alt="Logo Policia Rodoviaria Federal" width={130}
        height={130}/>
      </div>
      <div className="bg-white flex flex-col justify-center px-6 rounded-b-3xl gap-5">
        <div className="flex flex-col justify-center items-center">
            <span className="text-center my-5 text-3xl"><strong>POLICIA RODOVIARIA FEDERAL</strong></span>
            <hr className=" border-2 rounded-lg border-[#6d6a6a57] w-3/6" />
        </div>
        <div className="flex gap-7 my-9">
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#051A39] rounded-lg p-5">
                <Image src="/DistintivoIcon.svg" alt="Icone Distintivo" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Funcionalidade</span>
                <p className="">Atualmente, a Polícia Rodoviária Federal tem sob sua responsabilidade a segurança viária e a prevenção e repressão qualificada ao crime em mais de 75 mil quilômetros de rodovias e estradas federais em todos os estados brasileiros e nas áreas de interesse da União, as principais atribuições da Polícia Rodoviária Federal incluem, fiscalização, patrulhamento e policiamento nas rodovias federais, além de atendimento a vítimas de acidentes e verificação do cumprimento das leis de trânsito.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#051A39] rounded-lg p-5">
            <Image src="/FundacaoIcon.svg" alt="Icone Fundacao" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Fundação</span>
                <p>Criada pelo Presidente Washington Luís em 24 de julho de 1928, a “Polícia de Estradas" foi denominada em 1945 como Polícia Rodoviária Federal, com o advento da Constituição de 1988, a Polícia Rodoviária Federal foi institucionalizada e integrada ao Sistema Nacional de Segurança Pública, sob o novo diploma legal, consolidou sua missão com a segurança pública, além das rodovias federais.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#051A39] rounded-lg p-5">
            <Image src="/TecnologiaIcon.svg" alt="Icone Tecnologia" width={50} height={50}/>
            <span className="text-[#14193D] text-2xl font-extrabold">Impacto Tecnológico</span>
            <p>A polícia rodoviária federal tem investido em tecnologias e inteligência analítica com objetivo de dispor de geração de informações qualificadas que apoiem o processo de decisão. Permitindo otimizar o cumprimento das competências previstas por lei, promover ações mais assertivas e viabilizar melhorias continuadas do efetivo policial da instituição.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      
      
    )
}
export default Modal2