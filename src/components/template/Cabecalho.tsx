import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants"
import useAppData from "../../data/hook/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"
import AvatarUsuario from "./AvatarUsuario"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props:CabecalhoProps){
    const {tema, alternarTema} =  useAppData()
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}></div>

            <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
            <AvatarUsuario className="ml-3" />
        </div>
    )
}