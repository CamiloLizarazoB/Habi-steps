import { AddressBook, Buildings, EnvelopeSimple, User } from "@phosphor-icons/react";
import CheckboxGroup from "../components/checkbox/checkbox-group";
import InputComponent from "../components/input/input";
import SummaryComponent from "../components/summary/summary";

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
    instruction: "Por favor ingresa tu nombre y apellidos completos.",
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
    instruction: "Por favor ingresa un correo electrónico.",
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
    instruction: "Por favor ingresa una dirección de la vivienda.",
    description: "Dirección del Apartamento",
    validation: {
      message: "Por favor dirección del departamento.",
    },
    Icon: AddressBook,
    placeholder: "Ej: Carrera 11 # 14-23"
  },
  {
    path: "/piso",
    component: InputComponent,
    name: "floor",
    order: 4,
    instruction: "Por favor ingresa el número de piso. Ten en cuenta que en número maximo puede ser hasta 50 pisos.",
    description: "Número de Piso",
    validation: {
      max: 50,
      message: "El valor es requerido y no puede ser un valor mayor a 50.",
    },
    Icon: Buildings
  },
  {
    path: "/opciones",
    component: CheckboxGroup,
    options: optionsCheckboxGroup,
    name: "flat-options",
    order: 5,
    instruction: "Por favor ingresa las caracteristicas adicionales del inmueble.",
    description: "Opciones del Apartamento",
  },
  {
    path: "/resumen",
    component: SummaryComponent,
    order: 6,
    description: "Resumen",
  },
];
