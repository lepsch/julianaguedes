import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import SelfDisplay from './SelfDisplay'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import Cover from './Cover'
import Section from './Section'
import botox from '../../assets/dra-juliana-guedes-botox.jpg'
import acidohialuronico from '../../assets/dra-juliana-guedes-acido-hialuronico.jpg'
import fios from '../../assets/dra-juliana-guedes-fios-de-pdo.jpg'
import bioestimuladores from '../../assets/dra-juliana-guedes-bioestimuladores-de-colageno.jpg'
import pronokal from '../../assets/dra-juliana-guedes-pronokal.jpg'
import peeling from '../../assets/dra-juliana-guedes-peeling-quimico.jpg'
import microagulhamento from '../../assets/dra-juliana-guedes-dermapen-microagulhamento.jpg'
import consultas from '../../assets/dra-juliana-guedes-consultas-medicas.jpg'
import './index.scss'

function Home () {
  return <main className='Home'>
    <Menu />
    <Cover />
    <SelfDisplay />
    <Section
      alt='Foto de um paciente com o procedimento de Botox antes e depois'
      name='Toxina Botulínica'
      photo={ botox }
      reverse
      text='O Botox é um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
      alt='Foto da Dra. Juliana Guedes com uma seringa de Ácido Hialurônico'
      name='Ácido Hialurônico'
      photo={ acidohialuronico }
      text='O Ácido Hialurônico é um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
      alt='Foto de uma paciente com o procedimento de Fios de PDO aplicados na face pela Dra. Juliana Guedes'
      name='Fios de PDO'
      photo={ fios }
      reverse
      text='Os Fios são um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
      alt='Foto da Dra. Juliana Guedes com os Bioestimuladores de Colágeno'
      name='Bioestimu&#8203;ladores de Colágeno'
      photo={ bioestimuladores }
      text='Os Bioestimuladores de Colágeno são um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
    alt='Foto da Dra. Juliana Guedes com ficha do PronoKal®'
      name='PronoKal®'
      photo={ pronokal }
      reverse
      text='O PronoKal® é um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
      alt='Foto de uma paciente com o procedimento de Peeling Químico'
      name='Peeling Químico'
      photo={ peeling }
      text='O Peeling é um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
      alt='Foto de uma paciente com o procedimento de Microagulhamento'
      name='Microneedling'
      photo={ microagulhamento }
      reverse
      text='O Microagulhamento é um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Section
      alt='Foto da Dra. Juliana Guedes na Clínica Senhora-a-Branca'
      name='Consultas Médicas'
      photo={ consultas }
      text='O Microagulhamento é um procedimento estético que atua na diminuição das rugas e linhas de expressão, além de amenizar a flacidez da pele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla erat erat, ut congue purus congue
        sed. Quisque pharetra dui nisi. Sed scelerisque dui vel massa ornare condimentum. Praesent vestibulum enim
        maximus justo tristique molestie sit amet non leo. Mauris gravida metus eros, nec porta lacus pulvinar
        aliquam. Nullam convallis massa ac eros laoreet, eget iaculis purus ullamcorper. Vivamus congue scelerisque
        justo, in faucibus purus pretium id. Nullam condimentum consequat eros rhoncus porta. Curabitur sit amet enim
        maximus nisl consequat laoreet.'
    />
    <Social />
    <Schedule />
    <Footer />
  </main>
}

export default Home
