export interface Client {
  id?: string | null
  name?: string | null
  alias?: any | null
  documentId?: string | null
  pais?: string | null
  direccion?: string | null
  routeId?: string | null
  longitud?: string | null
  latitud?: string | null
  phone1?: string | null
  phone2?: string | null
  comments?: string | null
  credits?: Credit
  route?: Route
  payments?: any[]
}

export interface Route {
  id?: string | null
  routeName?: string | null
}

export interface Credit {
  id?: number | null 
  paymentMin?: number | null
  currentCreditMount?: number | null
  latePayments?: boolean | null
  status?: string | null
  contractPercent?: number | null
  createAt?: string | null
  creditMount?: number | null
  interestRate?: number | null
  payments?: number | null
  clientId?: number | null
  temporalityId?: number | null
  userId?: number | null
}


  