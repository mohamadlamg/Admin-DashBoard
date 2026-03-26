import {
  // Main
  FaHome,
  FaUserCircle,

  // Lists
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaNewspaper,

  // General Elements
  FaLayerGroup,
  FaStickyNote,
  FaWpforms,
  FaCalendarAlt,

  // Maintenance
  FaCog,
  FaDatabase,

  // Analytics
  FaChartBar,
  FaClipboardList,
} from 'react-icons/fa';

import Avatar0 from './assets/images/avatar0.jpg'
import Avatar1 from './assets/images/avatar1.jpg'
import Avatar2 from './assets/images/avatar2.jpg'
import Avatar3 from './assets/images/avatar3.jpg'
import Avatar4 from './assets/images/avatar4.jpg'



export const menu = [{
    id:1,
    title:"🏠 principal",
    listItems:[{
        id:1,
        title:"Accueil",
        url:"/",
        icon:FaHome
    },{
        id:2,
        title:"Profil",
        url:"/users/1",
        icon:FaUserCircle
    }]
},
{
    id:2,
    title:"📋 listes",
    listItems:[{
        id:1,
        title:"Utilisateurs",
        url:"/users",
        icon:FaUsers
    },{
        id:2,
        title:"Produits",
        url:"/products",
        icon: FaBoxOpen
    },
    {
        id:3,
        title:"Commandes",
        url:"/orders",
        icon:FaShoppingCart
    },
    {
        id:4,
        title:"Articles",
        url:"/posts",
        icon:FaNewspaper
    }
]
},
{
    id:3,
    title:"⚙️ général",
    listItems:[{
        id:1,
        title:"Éléments",
        url:"/users",
        icon:FaLayerGroup
    },{
        id:2,
        title:"Notes",
        url:"/products",
        icon:FaStickyNote
    },
    {
        id:3,
        title:"Formulaires",
        url:"/forms",
        icon:FaWpforms
    },
    {
        id:4,
        title:"Calendriers",
        url:"/products",
        icon:FaCalendarAlt
    }
]
},
{
    id:4,
    title:"🔧 maintenance",
    listItems:[{
        id:1,
        title:"Paramètres",
        url:"/settings",
        icon:FaCog
    },{
        id:2,
        title:"Sauvegardes",
        url:"/backups",
        icon:FaDatabase
    }]
},
{
    id:5,
    title:"📊 Analytiques",
    listItems:[{
        id:1,
        title:"Graphiques",
        url:"/charts",
        icon:FaChartBar
    },{
        id:2,
        title:"Journaux",
        url:"/logs",
        icon: FaClipboardList
    }]
},
]

export const topDealUsers =[
    {
        id:1
        ,username:"Mohamad Coulibaly",
        email:"momo@mail.com",
        amount:"500,000 FCFA",
        photo: Avatar0,
        status: "active"
    },
    {
        id:2
        ,username:"Oumar Coulibaly",
        email:"oumar@mail.com",
        amount:"400,000 FCFA",
        photo: Avatar1,
        status: "active"
    },
    {
        id:3
        ,username:"Ousmane Coulibaly",
        email:"ousmane@mail.com",
        amount:"300,000 FCFA",
        photo: Avatar2,
        status: "active"
    },
    {
        id:4
        ,username:"Aïcha Coulibaly",
        email:"aicha@mail.com",
        amount:"200,000 FCFA",
        photo: Avatar4,
        status: "active"
    },
    {
        id:5
        ,username:"Al Coulibaly",
        email:"al@mail.com",
        amount:"100,000 FCFA",
        photo: Avatar3,
        status: "inactive"
    },
    


]
export const revenueData = [
  { value: 180000 }, { value: 220000 }, { value: 195000 },
  { value: 260000 }, { value: 310000 }, { value: 410000 }
];

export const ordersData = [
  { value: 80 }, { value: 95 }, { value: 88 },
  { value: 102 }, { value: 115 }, { value: 125 }
];

export const usersData = [
  { value: 40 }, { value: 45 }, { value: 42 },
  { value: 50 }, { value: 38 }, { value: 34 }
];
export const conversionData = [
  { value: 2.8 }, { value: 3.0 }, { value: 3.1 },
  { value: 3.3 }, { value: 3.5 }, { value: 3.67 }
];
export const visitsData = [
  { name: 'Jan', value: 400 }, { name: 'Fév', value: 300 },
  { name: 'Mar', value: 500 }, { name: 'Avr', value: 280 },
  { name: 'Mai', value: 450 }, { name: 'Jun', value: 390 },
  { name: 'Jul', value: 520 },
];
export const revenueData2 = [
  { name: 'Jan', value: 180000 }, { name: 'Fév', value: 220000 },
  { name: 'Mar', value: 195000 }, { name: 'Avr', value: 310000 },
  { name: 'Mai', value: 270000 }, { name: 'Jun', value: 400000 },
  { name: 'Jul', value: 430000 },
];

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Martin",
    firstName: "Sophie",
    email: "sophie.martin@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status:true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dupont",
    firstName: "Lucas",
    email: "lucas.dupont@hotmail.com",
    phone: "123 456 789",
    createdAt: "03.03.2023",
    status:true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Bernard",
    firstName: "Emma",
    email: "emma.bernard@gmail.com",
    phone: "123 456 789",
    createdAt: "15.03.2023",
     status:true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Leroy",
    firstName: "Hugo",
    email: "hugo.leroy@yahoo.fr",
    phone: "123 456 789",
    createdAt: "22.03.2023",
     status:true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Moreau",
    firstName: "Chloé",
    email: "chloe.moreau@gmail.com",
    phone: "123 456 789",
    createdAt: "05.04.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Simon",
    firstName: "Nathan",
    email: "nathan.simon@hotmail.com",
    phone: "123 456 789",
    createdAt: "10.04.2023",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Laurent",
    firstName: "Inès",
    email: "ines.laurent@gmail.com",
    phone: "123 456 789",
    createdAt: "18.04.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Michel",
    firstName: "Maxime",
    email: "maxime.michel@outlook.com",
    phone: "123 456 789",
    createdAt: "25.04.2023",
     status:true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Garcia",
    firstName: "Léa",
    email: "lea.garcia@gmail.com",
    phone: "123 456 789",
    createdAt: "02.05.2023",
    status:true,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "David",
    firstName: "Théo",
    email: "theo.david@hotmail.com",
    phone: "123 456 789",
    createdAt: "09.05.2023",
     status:true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Petit",
    firstName: "Camille",
    email: "camille.petit@gmail.com",
    phone: "123 456 789",
    createdAt: "14.05.2023",
     status:true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Roux",
    firstName: "Antoine",
    email: "antoine.roux@yahoo.fr",
    phone: "123 456 789",
    createdAt: "20.05.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Vincent",
    firstName: "Manon",
    email: "manon.vincent@gmail.com",
    phone: "123 456 789",
    createdAt: "27.05.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Fournier",
    firstName: "Julien",
    email: "julien.fournier@hotmail.com",
    phone: "123 456 789",
    createdAt: "03.06.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Morel",
    firstName: "Anaïs",
    email: "anais.morel@gmail.com",
    phone: "123 456 789",
    createdAt: "10.06.2023",
  },
  {
    id: 16,
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Girard",
    firstName: "Alexis",
    email: "alexis.girard@outlook.com",
    phone: "123 456 789",
    createdAt: "17.06.2023",
  },
  {
    id: 17,
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Andre",
    firstName: "Lucie",
    email: "lucie.andre@gmail.com",
    phone: "123 456 789",
    createdAt: "24.06.2023",
  },
  {
    id: 18,
    img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lefebvre",
    firstName: "Romain",
    email: "romain.lefebvre@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.07.2023",
  },
  {
    id: 19,
    img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Mercier",
    firstName: "Pauline",
    email: "pauline.mercier@gmail.com",
    phone: "123 456 789",
    createdAt: "08.07.2023",
  },
  {
    id: 20,
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dupuis",
    firstName: "Kevin",
    email: "kevin.dupuis@yahoo.fr",
    phone: "123 456 789",
    createdAt: "15.07.2023",
  },
  {
    id: 21,
    img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Fontaine",
    firstName: "Marie",
    email: "marie.fontaine@gmail.com",
    phone: "123 456 789",
    createdAt: "22.07.2023",
  },
  {
    id: 22,
    img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Chevalier",
    firstName: "Nicolas",
    email: "nicolas.chevalier@hotmail.com",
    phone: "123 456 789",
    createdAt: "29.07.2023",
  },
  {
    id: 23,
    img: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Robin",
    firstName: "Elise",
    email: "elise.robin@gmail.com",
    phone: "123 456 789",
    createdAt: "05.08.2023",
  },
  {
    id: 24,
    img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Clement",
    firstName: "Thomas",
    email: "thomas.clement@outlook.com",
    phone: "123 456 789",
    createdAt: "12.08.2023",
  },
  {
    id: 25,
    img: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gauthier",
    firstName: "Sarah",
    email: "sarah.gauthier@gmail.com",
    phone: "123 456 789",
    createdAt: "19.08.2023",
  },
];

export const singleUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Sophie Martin",
    info: {
      username: "sophiemartin",
      email: "sophie.martin@gmail.com",
      phone: "123 456 789",
      age: 28,
      role: "Administrateur",
      status: "Actif",
      address: "12 Rue de Paris, Lyon",
      createdAt: "01.02.2023",
    },
    activities: [
      { text: "Sophie a acheté 3 iPhones.", time: "il y a 2 jours" },
      { text: "Sophie a mis à jour son profil.", time: "il y a 5 jours" },
      { text: "Sophie a passé une commande de 800€.", time: "il y a 1 semaine" },
      { text: "Sophie s'est connectée depuis un nouvel appareil.", time: "il y a 2 semaines" },
    ],
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Lucas Dupont",
    info: {
      username: "lucasdupont",
      email: "lucas.dupont@hotmail.com",
      phone: "123 456 789",
      age: 34,
      role: "Éditeur",
      status: "Actif",
      address: "45 Avenue Victor Hugo, Paris",
      createdAt: "03.03.2023",
    },
    activities: [
      { text: "Lucas a publié un nouvel article.", time: "il y a 1 jour" },
      { text: "Lucas a modifié 3 produits.", time: "il y a 4 jours" },
      { text: "Lucas a changé son mot de passe.", time: "il y a 2 semaines" },
      { text: "Lucas a rejoint le groupe Éditeurs.", time: "il y a 1 mois" },
    ],
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Emma Bernard",
    info: {
      username: "emmabernard",
      email: "emma.bernard@gmail.com",
      phone: "123 456 789",
      age: 22,
      role: "Utilisateur",
      status: "Inactif",
      address: "8 Rue du Commerce, Marseille",
      createdAt: "15.03.2023",
    },
    activities: [
      { text: "Emma a acheté une paire de chaussures.", time: "il y a 3 jours" },
      { text: "Emma a laissé un avis 5 étoiles.", time: "il y a 1 semaine" },
      { text: "Emma a mis à jour son adresse.", time: "il y a 2 semaines" },
      { text: "Emma s'est inscrite sur la plateforme.", time: "le 15.03.2023" },
    ],
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Hugo Leroy",
    info: {
      username: "hugoleroy",
      email: "hugo.leroy@yahoo.fr",
      phone: "123 456 789",
      age: 31,
      role: "Responsable",
      status: "Actif",
      address: "23 Boulevard Saint-Michel, Bordeaux",
      createdAt: "22.03.2023",
    },
    activities: [
      { text: "Hugo a approuvé 10 commandes.", time: "il y a 1 jour" },
      { text: "Hugo a ajouté 2 nouveaux produits.", time: "il y a 3 jours" },
      { text: "Hugo a généré un rapport mensuel.", time: "il y a 1 semaine" },
      { text: "Hugo a invité 3 nouveaux membres.", time: "il y a 3 semaines" },
    ],
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Chloé Moreau",
    info: {
      username: "chloemoreau",
      email: "chloe.moreau@gmail.com",
      phone: "123 456 789",
      age: 26,
      role: "Utilisateur",
      status: "Actif",
      address: "5 Rue des Fleurs, Toulouse",
      createdAt: "05.04.2023",
    },
    activities: [
      { text: "Chloé a commandé un MacBook Pro.", time: "il y a 2 jours" },
      { text: "Chloé a modifié son email.", time: "il y a 6 jours" },
      { text: "Chloé a laissé un commentaire.", time: "il y a 2 semaines" },
      { text: "Chloé a activé la 2FA.", time: "il y a 1 mois" },
    ],
  },
]