// État du retour de soumission
export interface DemoRequestState {
  success?: boolean
  message?: string
  errors?: Record<string, string>
}

// Champs du formulaire
export interface DemoRequestFormData {
  name: string
  email: string
  company: string
  country: 
    | "Côte d’Ivoire"
    | "Bénin"
    | "Burkina Faso"
    | "Mali"
    | "Sénégal"
    | "Togo"
  size: "0-5" | "6-15" | "16-30" | "31-50" | "51-100" | "+100"
  interest:
    | "paie"
    | "declarations"
    | "administratif"
    | "conges"
    | "compta"
  message?: string
}