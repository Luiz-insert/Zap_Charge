const brl = (n) => 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const product = (name, conn, was, price) => ({
  name,
  conn,
  price: brl(price),
  was: brl(was),
  off: `-${Math.round((1 - price / was) * 100)}%`,
})

export const wallbox = [
  product('EcoCharge Mnk', 'Mennekes', 5899, 3999.9),
  product('EcoCharge GB/T', 'GB/T', 3650.5, 3190),
  product('EcoCharge Super', 'SuperCharger', 8200, 6400.9),
]

export const portable = [
  product('GB/T Portable Pro', 'GB/T', 860.99, 540.9),
  product('SuperCharger Portable Pro', 'SuperCharger', 1220, 999.9),
  product('Mnk Portable Pro', 'Mennekes', 780.9, 650.9),
  product('ElectricPulse', 'Portátil', 1480.9, 1200.9),
]

export const connectors = [
  { id: 'GB/T', icon: 'gbt', desc: 'Padrão chinês de recarga, encontrado em parte dos modelos importados.' },
  { id: 'Mennekes', icon: 'mnk', desc: 'Tipo 2, o padrão europeu de recarga em corrente alternada.' },
  { id: 'SuperCharger', icon: 'super', desc: 'Recarga de alta potência para quem precisa de mais autonomia no dia a dia.' },
]

export const perks = [
  { icon: 'box', label: 'Retirada em 1 hora' },
  { icon: 'card', label: 'Parcelas em até 12x' },
  { icon: 'truck', label: 'Frete grátis em todo o Sudeste' },
  { icon: 'headset', label: 'Atendimento personalizado' },
]
