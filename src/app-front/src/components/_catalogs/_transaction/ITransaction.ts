export interface ITransaction {
    id: number;
    updateDate: Date;
    isActive: boolean;
    shortDescription: string;
    description: string;
    value: number;
    date: Date;
    transactionFrequencyId: number;
    cardId: number;
    agentId: number;
    categoryId: number;
    tagId: number;
}