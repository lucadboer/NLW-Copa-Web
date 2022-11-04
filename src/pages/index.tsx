import Image from 'next/image'
import Swal from 'sweetalert2'
import 'animate.css';

import { formatNumber } from '../utils/formatNumber'

import previewAppMobile from '../assets/app-nlw-preview.png'
import logoImg from '../assets/logo.svg'
import avatares from '../assets/avatares.png'
import check from '../assets/icon-check.svg'
//import { api } from '../lib/axios'
import { FormEvent, useEffect, useState } from 'react'


// interface HomeProps {
//   poolsCount: number
//   guessCount: number
//   usersCount: number
// }

const POOLS_CREATEAD = 'poolsCount:pools'

export default function Home(/*props: HomeProps*/) {
  const [newPoolTitle, setNewPoolTitle] = useState('')
  const [poolsCount, setPoolsCount] = useState(2032)

  function handleCreateNewPool(event: FormEvent) {
    event.preventDefault()

    setPoolsCount(state => state + 1)

    Swal.fire({
      title: 'BOLÃO CRIADO',
      color: '#F7DD43',
      width: '22rem',
      timer: 1500,
      showConfirmButton: false,
      background: '#129E57',
      showClass: {
        popup: 'animate__animated animate__zoomInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
      }
    })
    setNewPoolTitle('')
  }

  // async function createNewPool(event: FormEvent) {
  //   event.preventDefault()
    
  //   try {
  //     const response = await api.post('pools', {
  //       title: newPoolTitle
  //     });

  //     const { code } = response.data;

  //     // colocando o code na area de transferência(ctrl + c) do usuário
  //     await navigator.clipboard.writeText(code);

  //     alert('Bolão criado com sucesso, o código foi copiado para a área de transferência!');

  //     setNewPoolTitle('');
  //   } catch (error) {
  //     console.log(error);
  //     alert('Falha ao criar o Bolão, tente novamente!');
  //   }
  // }

  return (
    <div className='max-w-6xl h-screen grid grid-cols-2 items-center gap-28 mx-auto leading-tight '>
      <main>
        <Image 
        src={logoImg} 
        alt='Logo do nlw-copa'
        quality={100} 
        />

        <h1 className='mt-16 text-white text-5xl font-bold tracking-wide leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div className='mt-10 flex items-center gap-2'>
          <Image 
            src={avatares}
            alt='Imagem de apostadores'
            quality={100}
          />

          <strong className='text-xl text-zinc-300'>
            <span className='text-green-600'>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className='mt-10 flex items-center gap-2' onSubmit={handleCreateNewPool}>
          <input 
          type="text"
          value={newPoolTitle}
          className='flex-1 px-6 py-4 rounded text-gray-200 outline-none shadow shadow-emerald-300 bg-gray-800 border border-gray-600 placeholder:text-gray-300' required placeholder='Qual o nome do seu bolão?' 
          onChange={(event) => {
            setNewPoolTitle(event?.target.value)
          }}
          />
          
          <button type='submit' className='animate-bounce px-6 py-4 rounded bg-yellow-300 text-gray-900 text-sm font-bold uppercase hover:bg-yellow-400 transition-all'>Criar meu bolão</button>
        </form>

        <p className='w-[420px] mt-4 text-gray-300 text-sm leading-6'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div className='mt-10 pt-10 flex justify-between items-center border-t border-gray-600'>
          <div className='flex items-center gap-6'>
            <Image src={check} alt="" />
            <div className='flex flex-col gap-2 text-gray-200'>
              <span className='font-semibold text-2xl leading-5'>+{formatNumber(poolsCount)}</span>
              <span className='text-sm text-gray-400'>Bolões criados</span>
            </div>
          </div>
          <div className='w-[2px] bg-gray-600 h-14'></div>
          <div className='flex items-center gap-6'>
            <Image src={check} alt="" />
            <div className='flex flex-col gap-2 text-gray-200'>
              <span className='font-semibold text-2xl leading-5'>+126.044</span>
              <span className='text-sm text-gray-400'>Palpites Enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image 
      src={previewAppMobile}
      alt='Dois celulares reprensantando uma prévia do App Mobile'
      quality={100}
      />

    </div>
  )
}

// export const getServerSideProps = async () => {

//   const [poolsCountResponse, guessCountResponse, usersCountResponse] = await Promise.all([
//     api.get('pools/count'),
//     api.get('guess/count'),
//     api.get('user/count'),
//   ])

  
//   return {
//     props: {
//       poolsCount: poolsCountResponse.data.count,
//       guessCount: guessCountResponse.data.count,
//       usersCount: usersCountResponse.data.count,
//     }
//   }
// }
