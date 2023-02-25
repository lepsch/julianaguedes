import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import SelfDisplay from './SelfDisplay'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import Cover from './Cover'
import Section from './Section'
import botox from '../../assets/botox.jpg'
import acidohialuronico from '../../assets/acido-hialuronico.jpg'
import fios from '../../assets/fios-de-pdo.jpg'
import bioestimuladores from '../../assets/bioestimuladores-de-colageno.jpg'
import pronokal from '../../assets/pronokal.jpg'
import peeling from '../../assets/peeling-quimico.jpg'
import microagulhamento from '../../assets/dermapen-microagulhamento.jpg'
import './index.scss'

function Home () {
  return <main className='Home'>
    <Menu />
    <Cover />
    <SelfDisplay />
    <Section
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
      name='Fios Tensores'
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
    <Social />
    <Schedule />
    <Footer />
  </main>
}

export default Home
