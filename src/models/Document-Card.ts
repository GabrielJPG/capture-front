
export type DocumentCard = {
    documentTypeId: number;
    process: number;
    handle: number;
    documentTypeName: string;
    client: string;
    type: 'Solicitante' | 'Other';
};
