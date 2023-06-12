import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAjustes, IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";


export default function Autenticacao() {

    const { usuario, loginGoogle} = useAuth()

    const [erro, setErro] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {
        if (modo === 'login') {
            console.log ('login')
            exibirErro('Ocorreu um erro no login',5)
        } else {
            console.log('cadastrar')
            exibirErro('Ocorreu um erro no cadastro')
        }

    }
    
    function exibirErro(msg, tempo_segundos = 5) {
        setErro(msg)
        setTimeout (() => setErro(null), tempo_segundos * 1000)
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/user/wsanter" 
                    alt="Imagem da tela de autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className ={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className = {`
                    text-3xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>
                {erro ? (
                    <div className = {`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                        `}>
                        {IconeAtencao()}
                        <span className={`ml-3`}>{erro}</span>
                    </div>
                ) : ""}

                <AuthInput 
                label = "E-mail"
                valor= {email}
                tipo = "text" 
                valorMudou = {setEmail}
                obrigatorio
                />

                <AuthInput 
                label = "Senha"
                valor= {senha}
                tipo = "password"
                valorMudou = {setSenha}
                obrigatorio
                />
            
            {modo === 'cadastro' ? 
                <AuthInput 
                label = "Confirmar Senha"
                valor= {senha}
                tipo = "password"
                valorMudou = {setSenha}
                obrigatorio
                />
            : ""
            }
         
            <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                    `}>
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                    <hr className="my-6 border-gray-300 w-full" />


                    <button onClick={loginGoogle} className={`
                        w-full bg-red-500 hover:bg-red-400
                        text-white rounded-lg px-4 py-3 
                        `}>
                    Entrar com Google
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                                text-blue-500 hover:tet-blue-700 font-semibold cursor-pointer`} > Crie uma Conta Gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte de nossa comunidade?
                        <a onClick={() => setModo('cadastro')} className={`
                                text-blue-500 hover:tet-blue-700 font-semibold cursor-pointer`} > Entre com as suas Credenciais
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}