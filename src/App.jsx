import React from 'react';
import './App.css'
import { perros } from './data'
import { Header } from './components/Header'
import { Footer} from './components/Footer'
import { MyCard } from './components/MyCard'


function App() {

  return (
    <>
      <Header title="Adopta un perrito" />
      <MyCard posts={perros} />
      <Footer footer="Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto.Tenemos una variedad de perros diferentes y tamaños, todos en busca de un hogar amoroso.Cada imagen captura su esencia unica. Adopta un perro y brindale una segunda oportunidad.Encuentra a tu compañero peludo para siempre." />
    </>
  );
}

export default App
