

import Image from "next/image";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import Grade from "./components/Grade";
const noto_n = Noto_Nastaliq_Urdu({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <div>
      <header className="flex justify-around items-center gap-52 pt-8">
        <Image src="/Logo.svg" alt="Logo projeto" width={150} height={150} />
        <nav className="text-white flex gap-44 text-xl font-light">
          <a className="transicao" href="#inicio">Inicio</a>
          <a className="transicao" href="#servicos">Orgãos atuantes</a>
          <a className="transicao" href="">Sobre</a>
        </nav>
        </header>
        <main id="inicio" className=" mt-44">
          <div className="flex items-center justify-between mx-36">
            <div className="flex flex-col gap-8" >
              <div>
                <h1 className="text-6xl mb-4">Segurança Pública</h1>
                <span className="text-white text-6xl font-extrabold">Brasileira</span>
              </div>
              <p className="text-white w-[620px] ">A segurança pública pode ser definida como um conjunto de dispositivos e de medidas de precaução que asseguram a população de estar livre do perigo, de danos e riscos eventuais à vida e ao patrimônio. Segurança pública no Brasil é dividida em diferentes setores, cada um desempenhando funções específicas para garantir a ordem e proteger a população.</p>
              <a className="buttond hover:bg-[#60570D] text-white bg-gradient-to-r  p-4 px-8 w-fit tracking-widest rounded-md duration-75" href="https://www.gov.br/pt-br/orgaos-do-governo"target="_blank"><strong>Saiba Mais</strong></a>
            </div>
              <Image src="/ImageMain.svg" alt="representação do mapa brasileiro" width={600} height={600}/>
          </div>
          <div id="servicos" className="flex flex-col items-center justify-center bg-[#14193D] my-20">
            <h2 className="text-6xl font-extrabold my-9">Orgãos atuantes</h2>
            <Grade/>
          </div>
          
        </main>      
    </div>
  );
}
