import Image from "next/image";
import React from "react";


const Modal5 = ({visivel, onClose}) => {
    if ( !visivel ) return null;
    return (
        <div className="card fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center ">
            <div className="flex flex-col justify-center items-center  w-[1200px] ">
        <div className="bg-gradient-to-r from-[#1C1473] to-[#3426D9] w-full flex justify-center rounded-t-3xl flex-col ">
        <button className="text-white place-self-end text-2xl m-7" onClick={() => onClose()}><strong>X</strong></button>
        <Image className="my-3 place-self-center" src="/PoliciaCivilIcon.svg" alt="Logo Policia Civil Federal" width={130}
        height={130}/>
      </div>
      <div className="bg-white flex flex-col justify-center px-6 rounded-b-3xl gap-5">
        <div className="flex flex-col justify-center items-center">
            <span className="text-center my-5 text-3xl"><strong>POLICIA MILITAR</strong></span>
            <hr className=" border-2 rounded-lg border-[#6d6a6a57] w-3/6" />
        </div>
        <div className="flex gap-7 my-9">
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#1C1473] rounded-lg p-5">
                <Image src="/DistintivoIcon.svg" alt="Icone Distintivo" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Funcionalidade</span>
                <p className="">é a corporação que exerce o poder de polícia no âmbito interno das forças armadas, garantindo a segurança, a ordem e a lei no seu seio. Geralmente, a sua atuação limita-se apenas às instalações e aos membros das forças armadas. Excepcionalmente, quando exercem a função de Polícia Judiciária Militar, podem ser incluídos civis inquéritos policiais militares, a depender do crime cometido, a PM é a primeira linha de defesa da sociedade contra crimes e situações de emergência, sendo essencial para a sensação de segurança da população. 
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#1C1473] rounded-lg p-5">
            <Image src="/FundacaoIcon.svg" alt="Icone Fundacao" width={50} height={50}/>
                <span className="text-[#14193D] text-2xl font-extrabold">Fundação</span>
                <p>A denominação "Polícia Militar" só foi padronizada mesmo em 1946 sobre o regime de Getúlio Vargas, com a nova Constituição de 1946 após Era Vargas do Estado Novo (1937-1945). Todos as unidades federadas adotaram o termo, com exceção do Rio Grande do Sul, que até hoje mantém o nome Brigada Militar em sua força policial.
                </p>
            </div>
            <div className="flex items-center flex-col gap-4 w-5/6 border-solid border-2 border-[#1C1473] rounded-lg p-5">
            <Image src="/TecnologiaIcon.svg" alt="Icone Tecnologia" width={50} height={50}/>
            <span className="text-[#14193D] text-2xl font-extrabold">Impacto Tecnológico</span>
            <p>A tecnologia tem auxiliado a PM com sistemas de comunicação mais eficientes, como rádios digitais e sistemas de geolocalização, além de softwares de análise de dados para previsão de crimes e otimização do patrulhamento.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      
      
    )
}
export default Modal5