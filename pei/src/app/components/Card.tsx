import Image from "next/image"

export default function Card (props:any) {
    return (
        <div className="flex flex-col justify-center items-center ">
                <div className={props.grad}>
                <Image className="my-3" src={props.image} alt={props.alt} width={props.tama}
                height={props.tama}/>
              </div>
              <div className="bg-white flex flex-col justify-center px-6  gap-5">
                <span className="text-center mt-5 text-xl"><strong>{props.titulo}</strong></span>
                <hr className=" border-4 rounded-lg border-[#6d6a6a57]" />
                <span><strong>Ano de Fundação</strong>: {props.fundacao}</span>
                <span><strong>Local de Fundação</strong>: {props.local}</span>
                <span><strong>Atribuições</strong>: <ul className=" list-disc list-inside leading-10 mb-6">
                  <li className="text-wrap">{props.atribuicoes}</li>
                  <li className="text-wrap">{props.atribuicoes2}</li>
                  <li className="text-wrap">{props.atribuicoes3}</li>
                  <li className="text-wrap">{props.atribuicoes4}</li>
                  </ul></span>
                  
                  
              </div>
              </div>
    )
}