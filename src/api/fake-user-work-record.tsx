import { CardInfo } from "../models/Card-info";
import { DocumentCard } from "../models/Document-Card";

export const data: Array<CardInfo> = [
    {
        processId: 1234,
        processName: 'Solicitud de préstamo Hipotecario comercial',
        clientName: 'Juan Medina Carvajal',
        creatorName: 'Juan Peréz',
        creatorEmail: 'juanperez@gmail.com',
        creatorPhone: '+569-8-939-8982',
        creationDate: new Date('2018-10-10T15:30:00').toISOString(),
        expiryDate: new Date('2018-10-12T17:50:45').toISOString(),
        status: 'Pendiente',
        processDocumentRequirement: 9,
        currentDocumentInProcess: 3,
    },
    {
        processId: 1235,
        processName: 'Solicitud de préstamo Hipotecario comercial',
        clientName: 'Pedro Medina Carvajal',
        creatorName: 'Juan Peréz',
        creatorEmail: 'juanperez@gmail.com',
        creatorPhone: '+569-8-939-8982',
        creationDate: new Date('2018-10-10T15:30:00').toISOString(),
        expiryDate: new Date('2018-10-09T15:30:00').toISOString(),
        status: 'Pendiente',
        processDocumentRequirement: 9,
        currentDocumentInProcess: 5,
    },
    {
        processId: 1236,
        processName: 'Solicitud de préstamo Hipotecario comercial',
        clientName: 'Luis Medina Carvajal',
        creatorName: 'Juan Peréz',
        creatorEmail: 'juanperez@gmail.com',
        creatorPhone: '+569-8-939-8982',
        creationDate: new Date('2018-10-10T15:30:00').toISOString(),
        expiryDate: new Date('2018-10-15T17:50:45').toISOString(),
        status: 'Pendiente',
        processDocumentRequirement: 9,
        currentDocumentInProcess: 4,
    }
]


export const simulateCRMData: Array<DocumentCard> = [
    {
        documentTypeId: 1,
        process: 1236,
        handle: 1,
        documentTypeName: 'Carta de trabajo',
        client: 'Luis Medina Carvajal',
        type: 'Solicitante',
    },
    {
        documentTypeId: 2,
        process: 1236,
        handle: 0,
        documentTypeName: 'Contrato de prestamo',
        client: 'Luis Medina Carvajal',
        type: 'Solicitante',
    },

    {
        documentTypeId: 3,
        process: 1235,
        handle: 0,
        documentTypeName: 'Cedula de identidad',
        client: 'Pedro Medina Carvajal',
        type: 'Solicitante',
    },
    {
        documentTypeId: 4,
        process: 1235,
        handle: 4,
        documentTypeName: 'Acta de nacimineto',
        client: 'Pedro Medina Carvajal',
        type: 'Solicitante',
    },

    {
        documentTypeId: 1,
        process: 1234,
        handle: 0,
        documentTypeName: 'Carta de trabajo',
        client: 'Juan Medina Carvajal',
        type: 'Solicitante',
    },
    {
        documentTypeId: 6,
        process: 1234,
        handle: 6,
        documentTypeName: 'Contrato de seguro',
        client: 'Juan Medina Carvajal',
        type: 'Solicitante',
    }
]




export const getUserWorkRecordsCards = () => new Promise<Array<CardInfo>>((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 1000);
})

export const getUserRecordById = (userId: number, processId: number) => new Promise<Array<DocumentCard>>((resolve, reject) => {
    setTimeout(() => {
        resolve(simulateCRMData.filter(item => item.process === processId))
    }, 1000);
})