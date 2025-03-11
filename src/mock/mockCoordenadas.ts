import { Coordenada } from '../models/Coordenada'

export const mockCoordenadas: Coordenada[] = [
  {
    id: '92846192',
    nome: 'Agenor Martins de Carvalho',
    segundoNome: 'Central',
    latitude: -8.7610799,
    longitude: -63.8725178,
    atualizacao: '11/03/2025',
    endereco: {
      cep: 76820366,
      logradouro: 'Rua Vespaziano Ramos',
      numero: 3259,
      bairro: 'Agenor M. de Carvalho',
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 3, horario: '19:30' },
        { dia: 5, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '15:00' }],
    },
  },
  {
    id: '1',
    nome: 'CCB Tancredo Neves',
    latitude: -8.760491,
    longitude: -63.835211,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 76829560,
      logradouro: 'Rua Antônio Violão',
      numero: 3675,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 5, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '10:00' }],
      ensaio: { semana: 2, dia: 2, horario: '19:30' },
    },
  },
  {
    id: '241',
    nome: 'CCB São Francisco',
    latitude: -8.775083,
    longitude: -63.829238,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 76813266,
      logradouro: 'Rua Higienópolis',
      numero: 8725,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 4, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '09:30' }],
    },
  },
  {
    id: '942312',
    nome: 'CCB Castanheira',
    segundoNome: 'Gurgel',
    latitude: -8.796694350758013,
    longitude: -63.86694646348956,
    atualizacao: '07/03/2025',
    endereco: {
      cep: 76811544,
      logradouro: 'Rua Cacique Tibiriçá',
      numero: 1815,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 3, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '09:30' }],
      ensaio: { semana: 2, dia: 7, horario: '19:30' },
    },
  },
  {
    id: '532315',
    nome: 'CCB Marcos Freire',
    segundoNome: '',
    latitude: -8.77915273138411,
    longitude: -63.80577782001637,
    atualizacao: '07/03/2025',
    endereco: {
      cep: 76829560,
      logradouro: 'Rua Canoas',
      numero: 11274,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 5, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '09:30' }],
    },
  },
  {
    id: '2',
    nome: 'CCB Cascalheira',
    segundoNome: 'Flamboyant',
    latitude: -8.778104,
    longitude: -63.837291,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 76813068,
      logradouro: 'Rua Fascinação',
      numero: 614,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [
        { dia: 5, horario: '19:30' },
        { dia: 7, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '09:30' }],
    },
  },
  {
    id: '4',
    nome: 'CCB Estrada da Aliança',
    latitude: -8.642954,
    longitude: -63.611601,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 76834899,
      logradouro: 'Linha 28 de Novembro - Km 40',
      numero: 0,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [{ dia: 7, horario: '17:00' }],
      reuniaoJovemMenores: [{ dia: 7, horario: '17:00' }],
    },
  },
  {
    id: '5',
    nome: 'CCB Ramal Bom Jesus',
    latitude: -8.831721,
    longitude: -63.781003,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 76834899,
      logradouro: 'Estrada Bacia Leiteira - Km 10',
      numero: 0,
      cidade: 'Porto Velho',
    },
    diasCulto: {
      cultos: [{ dia: 6, horario: '20:00' }],
    },
  },
  {
    id: '6',
    nome: 'CCB KM 13',
    latitude: -8.805448,
    longitude: -63.777817,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 0,
      logradouro: '',
      numero: 12321,
      cidade: 'Porto Velho',
      complemento: 'Jardim das Castanheiras 7 ou Linha 07',
    },
  },
  {
    id: '7',
    nome: 'CCB Candeias Central',
    latitude: -8.795603,
    longitude: -63.700311,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 1321,
      logradouro: '',
      numero: 12321,
      cidade: 'Candeias do Jamari',
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 5, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '09:30' }],
    },
  },
  {
    id: '8',
    nome: 'CCB Candeias Santa Letícia',
    latitude: -8.787536,
    longitude: -63.690464,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 1321,
      logradouro: '',
      numero: 12321,
      cidade: 'Candeias do Jamari',
    },
    diasCulto: {
      cultos: [
        { dia: 3, horario: '19:30' },
        { dia: 6, horario: '19:30' },
      ],
    },
  },
  {
    id: '45354',
    nome: 'CCB Chapéu de palha',
    latitude: -9.028419,
    longitude: -63.417665,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 76860000,
      logradouro: 'Rodovia BR-362 - Km 72',
      cidade: 'Candeias do Jamari',
      numero: 0,
    },
    diasCulto: {
      cultos: [
        { dia: 1, horario: '19:00' },
        { dia: 5, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 1, horario: '16:30' }],
    },
  },
  {
    id: '435234',
    nome: 'CCB Paraiso das Acácias',
    latitude: -8.77895,
    longitude: -63.596662,
    atualizacao: '26/02/2025',
    endereco: {
      cep: 1321,
      logradouro: '',
      numero: 12321,
      cidade: 'Candeias do Jamari',
    },
    diasCulto: {
      cultos: [
        { dia: 4, horario: '19:30' },
        { dia: 7, horario: '19:30' },
      ],
      reuniaoJovemMenores: [{ dia: 7, horario: '17:00' }],
    },
  },
]
