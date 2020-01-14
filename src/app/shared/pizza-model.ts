export interface PizzaAttributesModel {
  name: string;
  description: string;
  toppings: Toppings[];
}

export interface Toppings {
  string;
}

export interface PizzaModel {
  id: string;
  type: string;
  attributes: PizzaAttributesModel[];
  links: { self: string };
}


export interface PizzaGetModel {
  data: PizzaModel[];
  links: { self: string };
}

export interface PizzaResolved {
  pizza: PizzaModel;
  errors?: any;
}
