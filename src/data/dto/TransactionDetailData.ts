export type TransactionDetailData = {
    tid:       number;
    buyer_uid: number;
    datetime:  string;
    status:    string;
    total:     number;
    items:     Item[];
}

export type Item = {
    tpid:     number;
    product:  TransactionProduct;
    quantity: number;
    subtotal: number;
}

export type TransactionProduct = {
    pid:         number;
    name:        string;
    description: string;
    price:       number;
    stock:       number;
}
