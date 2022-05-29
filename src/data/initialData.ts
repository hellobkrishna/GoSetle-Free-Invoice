import { ProductLine, Invoice } from './types'


export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}


export const initialInvoice: Invoice = {

  
  logo: '',
  logoWidth: 100,
  title: 'INVOICE',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'India',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'India',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'GoSetle Premium Invoice ',
      quantity: '1',
      rate: '249.00',
    },
    // { ...initialProductLine },
    // { ...initialProductLine },
  ],
  
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: '',

  notesLabel: 'Notes',
  notes: 'Thank You, for your purchase. We’re so lucky to have customers like you! We hope your experience was awesome and we can’t wait to see you again soon.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
