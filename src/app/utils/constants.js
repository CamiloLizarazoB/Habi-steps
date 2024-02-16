import { AddressBook, Buildings, EnvelopeSimple, User } from "@phosphor-icons/react";
import CheckboxGroup from "../components/checkbox/checkbox-group";
import InputComponent from "../components/input/input";
import SummaryContainer from "../containers/summary-container/summary-container";

const optionsCheckboxGroup = [
  {
    name: "bbq",
    text: "Zona BBQ",
  },
  {
    name: "room",
    text: "Salón comunal",
  },
  {
    name: "park",
    text: "Parque de juegos",
  },
];

export const stepsObj = [
  {
    path: "/nombre-apellidos",
    component: InputComponent,
    name: "name",
    order: 1,
    description: "Nombre y Apellidos",
    validation: {
      message: "Por favor ingresar nombre y apellidos.",
    },
    Icon: User
  },
  {
    path: "/correo",
    component: InputComponent,
    name: "email",
    order: 2,
    description: "Correo Electrónico",
    validation: {
      pattern: /^\S+@\S+\.\S{2,}$/,
      message: "Por favor, introduce un correo electrónico válido.",
    },
    Icon: EnvelopeSimple
  },
  {
    path: "/direccion",
    component: InputComponent,
    name: "address",
    order: 3,
    description: "Dirección del Apartamento",
    validation: {
      message: "Por favor dirección del departamento.",
    },
    Icon: AddressBook
  },
  {
    path: "/piso",
    component: InputComponent,
    name: "floor",
    order: 4,
    description: "Número de Piso",
    validation: {
      message: "Por favor ingresar número de piso.",
    },
    Icon: Buildings
  },
  {
    path: "/opciones",
    component: CheckboxGroup,
    options: optionsCheckboxGroup,
    name: "flat-options",
    order: 5,
    description: "Opciones del Apartamento",
  },
  {
    path: "/resumen",
    component: SummaryContainer,
    order: 6,
    description: "Resumen",
  },
];
