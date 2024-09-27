export function itensDeLista1EstaoEmLista2(lista1: string[], lista2: string[]) {
    return lista1.every((itemLista1) => lista2.includes(itemLista1));
}