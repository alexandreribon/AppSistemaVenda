import { DetalheVenda } from "./detalhe-venda"

export interface Venda {
    idVenda?: number,
    numeroDocumento?: string,
    tipoPago: string,
    totalTexto: string,
    dataRegistro?: string
    detalheVenda: DetalheVenda[]
}
