import Image from "next/image";
import React from "react";


const Modal6 = ({visivel, onClose}) => {
    if ( !visivel ) return null;
    return (
        <div className="card fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center ">
            <div className="flex flex-col justify-center items-center  w-[1200px] ">
        <div className="bg-gradient-to-r from-[#7E2714] to-[#E44724] w-full flex justify-center rounded-t-3xl flex-col ">
        <button className="text-white place-self-end text-2xl m-7" onClick={() => onClose()}><strong>X</strong></button>
        <Image className="my-3 place-self-center" src="/CorpoBombeirosIcon.svg" alt="Logo Corpo de Bombeiros" width={150}
        height={150}/>
      </div>
      <div className="bg-white flex flex-col justify-center px-6 rounded-b-3xl gap-5">
        <div className="flex flex-col justify-center items-center">
            <span className="text-center my-5 text-3xl"><strong>Corpo de Bombeiros Militar</strong></span>
            <hr className=" border-2 rounded-lg border-[#6d6a6a57] w-3/6" />
        </div>
        <div className="flex gap-7 my-9">
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#7E2714] rounded-lg p-5">
                <Image src="/DistintivoIcon.svg" alt="Icone Distintivo" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Funcionalidade</span>
                <p className=""> O Corpo de Bombeiros atua para salvar vidas e proteger o patrimônio, sendo essencial em situações de emergência, responsável pelo combate a incêndios, resgate em acidentes, atendimento pré-hospitalar e ações de prevenção e proteção civil. 
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#7E2714] rounded-lg p-5">
            <Image src="/FundacaoIcon.svg" alt="Icone Fundacao" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Fundação</span>
                <p>Em 1912, atendendo a uma demanda da sociedade, o presidente do Estado do Espírito Santo, Marcondes Alves de Souza, sanciona a Lei nº. 874, de 26 de dezembro, determinando a criação do Corpo de Bombeiros. Essa é a certidão de nascimento da corporação. No entanto, essa lei não foi executada. Somente no ano seguinte, em 13 de novembro de 1913, com a publicação da Lei nº. 920, o Estado implanta a primeira estrutura de combate a incêndios e outras catástrofes.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#7E2714] rounded-lg p-5">
            <Image src="/TecnologiaIcon.svg" alt="Icone Tecnologia" width={50} height={50}/>
            <span className="text-[#14193D] text-2xl font-extrabold">Impacto Tecnológico</span>
            <p>A tecnologia tem proporcionado equipamentos mais avançados, como veículos especializados, equipamentos de resgate e detecção de incêndios mais eficientes, além de sistemas de gestão de emergências que permitem uma resposta mais rápida e coordenada.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      
      
    )
}
export default Modal6