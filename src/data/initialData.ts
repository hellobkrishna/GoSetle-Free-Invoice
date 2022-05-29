import { ProductLine, Invoice } from './types'
// import React, { useEffect,useState } from "react";
// import axios from "axios";


export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}
// export const abc=()=>{
//   const [locCurrency, setlocCurrency] = useState('')


// // Within the body of your React functional component:
// useEffect(() => {
//    //currency API start
//     // const baseURL = "http://ip-api.com/json?fields=status,country,currency";
//     const baseURL = "https://ipgeolocation.abstractapi.com/v1/?api_key=18200c9b2f404addbbad45c7f1eac214";
//     // const baseURL ="https://api.ipregistry.co/103.54.27.69?key=z1hghi9pvb2gj11q"
    
//     axios.get(baseURL)
//     .then( res =>  {
//       console.log("Country is : ", res?.data);
//       setlocCurrency(res?.data?.currency?.currency_code)
//       // setCountryFlag(res?.data?.flag?.emoji)
//       // setcountryName(res?.data?.country)
//       console.log("Country Final123 : ", locCurrency);

//    })
//     //currency API End
// }, []); // 2nd argument is the dependency array, here empty

// }






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
      description: 'App Development ',
      quantity: '1',
      rate: '21999',
    },
    {
      description: 'Graphic Designing ',
      quantity: '1',
      rate: '999.00',
    },
    {
      description: 'Website Designing ',
      quantity: '1',
      rate: '19999.00',
    },
    // { ...initialProductLine },
    // { ...initialProductLine },
  ],
  
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: '₹',

  notesLabel: 'Notes',
  notes: 'Thank You, for your purchase. We’re so lucky to have customers like you! We hope your experience was awesome and we can’t wait to see you again soon.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
