export interface IApiData {
    count: number
    next: string
    previous: any
    results: IPokemon[]
  }
  

export interface IPokemon {
    name: string
    url: string
  }
  