export interface Projects   {
  id: number,
  name: string,
  github: string,
  web: string,
  type: 'aplication' | 'landing' | 'game' | 'other',
  resume?: string,
  cover: string,
  technologies?: string[]
}

export interface Technologic {
  name: string,
  icon: string
}
