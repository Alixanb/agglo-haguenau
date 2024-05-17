interface Type {
  nom: string;
}

interface Coordonnees {
  num_voie: string;
  libelle_voie: string;
  code_postal: string;
  libelle_commune: string;
}

interface PrestataireCoordonnees {
  telephone1: string;
  email1: string;
}

interface Prestataire {
  coordonnees: PrestataireCoordonnees;
}

interface Heure {
  heure_debut: string;
  heure_fin: string;
  lundi: string;
  mardi: string;
  mercredi: string;
  jeudi: string;
  vendredi: string;
  samedi: string;
  dimanche: string;
  acces_permanent: string;
  tps_acces_fin: string;
  commentaire: string;
}

interface Horaire {
  date_debut: string;
  date_fin: string;
  heures: Heure[];
}

interface Modalite {
  id: number;
  nom: string;
  ordre: string;
}

interface Critere {
  id: number;
  nom: string;
  type_critere: string;
  type_valeur: string;
  classe: string;
  valeur?: string;
  modalites?: Modalite[];
}

export interface Product {
  debut_periode: string;
  date_debut: string;
  date_fin: string;
  id: number;
  nom: string;
  type: Type;
  coordonnees: Coordonnees;
  latitude: string;
  longitude: string;
  commentaire: string;
  prestataire: Prestataire;
  datmaj: string;
  datecreation: string;
  horaires: Horaire[];
  criteres: Critere[];
}
