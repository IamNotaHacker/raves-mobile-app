export type Employee = {
  id: string
  name: string
  role: string
  phone: string
  clockedIn: boolean
  image?: string
  hours: string
  stops: number
  miles: number
  expenses: number
  email?: string
  lastActivity?: string
  location?: {
    lat: number
    lng: number
    address: string
  }
}

