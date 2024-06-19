'use client';

import Card from "./Card";

import { useState } from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";


export default function Grade () {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModal2, setMostrarModal2] = useState(false);
    const [mostrarModal3, setMostrarModal3] = useState(false);
    const [mostrarModal4, setMostrarModal4] = useState(false);
    const [mostrarModal5, setMostrarModal5] = useState(false);
    const [mostrarModal6, setMostrarModal6] = useState(false);
    return (
        <div className="flex flex-wrap mx-24 justify-around items-center my-11 ">
            <div className="mb-7">
                <Card
                grad="bg-gradient-to-r from-[#C6B41A] to-[#60570D] w-full flex justify-center rounded-t-3xl"
                image="/PoliciaFederealIcon.svg"
                tama="80"
                alt="Logo Policia Federal"
                titulo="Policia Federal"
                fundacao="28 de março de 1994"
                local="Rio de Janeiro"
                atribuicoes="Investigações"
                atribuicoes2="Operações Policiais"
                atribuicoes3="Repreensão de ilicitos penais"
                atribuicoes4="Cumprir medidas de segurança"
                 />
                 <div className="text-center bg-white rounded-b-3xl"><button className=" text-white buttonc bg-gradient-to-r from-[#b3b0b0c7] to-[#5f5f5fc9] w-fit rounded-3xl p-4 mb-5 duration-75" onClick={() => setMostrarModal(true)}><strong>Mais informações</strong></button></div>
            </div>
            <div className="mb-7">
                <Card
                grad="bg-gradient-to-r from-[#051A39] to-[#0A2144] w-full flex justify-center rounded-t-3xl"
                image="/LogoRodoviariaFederal.svg"
                tama="82"
                alt="Logo Policia Rodovaria Federal"
                titulo="Policia Rodoviaria Federal"
                fundacao="24 de julho de 1928"
                local="Brasilia"
                atribuicoes="repressão aos crimes contra a vida"
                atribuicoes2="Furtos e roubos de veículos"
                atribuicoes3="Tráfico de entorpecentes"
                atribuicoes4="Contrabando e descaminho previstos"
                 />
                 <div className="text-center bg-white rounded-b-3xl"><button className=" text-white buttonc bg-gradient-to-r from-[#b3b0b0c7] to-[#5f5f5fc9] w-fit rounded-3xl p-4 mb-5 duration-75" onClick={() => setMostrarModal2(true)}><strong>Mais informações</strong></button></div>
            </div>
            <div className="mb-7">
                <Card
                grad="bg-gradient-to-r from-[#652010] to-[#47160C] w-full flex justify-center rounded-t-3xl"
                image="/PoliciaRodoviariaFederal.svg"
                tama="81"
                alt="Logo Policia Ferroviaria Federal"
                titulo="Policia Ferroviária Federal"
                fundacao="26 de junho de 1852"
                local="Brasilia"
                atribuicoes="propor a política de segurança ferroviária"
                atribuicoes2="policiamento e a fiscalização"
                atribuicoes3="gestão da segurança pública"
                atribuicoes4="garantir a segurança com cidadania"
                 />
                 <div className="text-center bg-white rounded-b-3xl"><button className=" text-white buttonc bg-gradient-to-r from-[#b3b0b0c7] to-[#5f5f5fc9] w-fit rounded-3xl p-4 mb-5 duration-75" onClick={() => setMostrarModal3(true)}><strong>Mais informações</strong></button></div>
            </div>
            <div>
                <Card
                grad="bg-gradient-to-r from-[#C6B41A] to-[#60570D] w-full flex justify-center rounded-t-3xl"
                image="/PoliciaCivilIcon.svg"
                tama="81"
                alt="Logo Policia Civil"
                titulo="Policia Civil"
                fundacao="1841"
                local="São Paulo"
                atribuicoes="Investigação dos crimes comuns"
                atribuicoes2="Identificação e captura de criminosos"
                atribuicoes3="Investigação de organizações"
                atribuicoes4="Repressão à infrações"
                 />
                 <div className="text-center bg-white rounded-b-3xl"><button className=" text-white buttonc bg-gradient-to-r from-[#b3b0b0c7] to-[#5f5f5fc9] w-fit rounded-3xl p-4 mb-5 duration-75" onClick={() => setMostrarModal4(true)}><strong>Mais informações</strong></button></div>
            </div>
            <div>
                <Card
                grad="bg-gradient-to-r from-[#1C1473] to-[#3426D9] w-full flex justify-center rounded-t-3xl"
                image="/PoliciaMilitarIcon.svg"
                tama="81"
                alt="Logo Policia Militar"
                titulo="Policia Militar"
                fundacao="13 de maio de 1809"
                local="Brasil"
                atribuicoes="Dão forças de segurança pública "
                atribuicoes2="Políciamento ostensivo"
                atribuicoes3="Preservação da ordem pública vigente"
                atribuicoes4="Atuar em  situações de emergência"
                 />
                 <div className="text-center bg-white rounded-b-3xl"><button className=" text-white buttonc bg-gradient-to-r from-[#b3b0b0c7] to-[#5f5f5fc9] w-fit rounded-3xl p-4 mb-5 duration-75" onClick={() => setMostrarModal5(true)}><strong>Mais informações</strong></button></div>
            </div>
            <div>
                <Card
                grad="bg-gradient-to-r from-[#7E2714] to-[#E44724] w-full flex justify-center rounded-t-3xl"
                image="/CorpoBombeirosIcon.svg"
                tama="101"
                alt="Logo Corpo de Bombeiros"
                titulo="Corpo de Bombeiros Militar"
                fundacao="1912"
                local="Brasil"
                atribuicoes="Prevenção e o combate a incêndios"
                atribuicoes2="Prevenção em situações de pânico"
                atribuicoes3="Ações de busca e salvamento de pessoas"
                atribuicoes4="Desenvolvimento de atividades educativas"
                 />
                 <div className="text-center bg-white rounded-b-3xl"><button className=" text-white buttonc bg-gradient-to-r from-[#b3b0b0c7] to-[#5f5f5fc9] w-fit rounded-3xl p-4 mb-5 duration-75" onClick={() => setMostrarModal6(true)}><strong>Mais informações</strong></button></div>
            </div>
            <Modal visivel ={mostrarModal} onClose={() => setMostrarModal(false)}/>
            <Modal2 visivel ={mostrarModal2} onClose={() => setMostrarModal2(false)}/>
            <Modal3 visivel ={mostrarModal3} onClose={() => setMostrarModal3(false)}/>
            <Modal4 visivel ={mostrarModal4} onClose={() => setMostrarModal4(false)}/>
            <Modal5 visivel ={mostrarModal5} onClose={() => setMostrarModal5(false)}/>
            <Modal6 visivel ={mostrarModal6} onClose={() => setMostrarModal6(false)}/>

        </div>
        
    )
}