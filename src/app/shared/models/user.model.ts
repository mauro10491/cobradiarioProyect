export interface User {
    id?: number | null
    username?: string | null
    email?: string | null
    cellPhone?: string | null
    password?: string | null
    role?: Role | null
    routes?: any[]
    credits?: Credit
  }
  
  export interface Role {
    id?: number | null
    name?: string | null
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