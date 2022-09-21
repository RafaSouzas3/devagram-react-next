import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'
import { UploadImagem } from '../componentes/uploadImagem'



export default function Home() {
  const [imagem , setImagem] = useState(null);
  console.log(imagem);

  return (
    <>
        <h1 >Olá Mundo!</h1>
        <UploadImagem setImagem={setImagem} imagemPreview= {imagem?.preview}/>
        <div style={{width : 200}}>
          <Avatar/>
          <Botao texto ={'Login'} cor= 'invertido' manipularClique={ () => console.log('botao clicado')}/>
        </div>
        </>

       
  )
}
