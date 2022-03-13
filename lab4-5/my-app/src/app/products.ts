export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    brand: string;
    category:string;
    like:number;
    link: string;
  }
  
export const products = [
  {
    id: 1,
    name: 'IPhone 11 Pro Max',
    price: 499.99,
    description: 'Smart Phone, Memory: 64GB, OS: IOS 12, color : Midnight Green',
    image: 'https://m.media-amazon.com/images/I/71yIGykJFNS._AC_SX679_.jpg',
    rating: 4.3,
    brand: "Apple",
    category:"Phone",
    like:0,
    link:"https://www.amazon.com/Apple-iPhone-64GB-Midnight-Green/dp/B08BHXG144/ref=sr_1_3?crid=2BGN7UNI2TUD3&keywords=iphone&qid=1647100221&sprefix=iphone%2Cspecialty-aps%2C368&sr=8-3"
  },
  {
    id: 2,
    name: 'IPhone 12 Pro Max',
    price: 49.60,
    description: 'Apple Smart Phone, Memory: 256GB, OS: IOS 12, color: Pacific Blue',
    image: 'https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg',
    rating: 4.3,
    brand: "Apple",
    category:"Phone",
    like:0,
    link:"https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_5?crid=2BGN7UNI2TUD3&keywords=iphone&qid=1647100601&sprefix=iphone%2Cspecialty-aps%2C368&sr=8-5"
  },
  {
    id: 3,
    name: 'Iphone 7',
    price: 189.99,
    description: 'Apple Smart Phone, Memory: 32GB, OS: IOS, color: Black',
    image: 'https://m.media-amazon.com/images/I/31+rHqWgOrL._AC_.jpg',
    rating: 4.5,
    brand: "Apple",
    category:"Phone",
    like:0,
    link:"https://www.amazon.com/Tracfone-Apple-iPhone-Prepaid-Smartphone/dp/B08CL4CCG2/ref=sr_1_6?crid=2BGN7UNI2TUD3&keywords=iphone&qid=1647100601&sprefix=iphone%2Cspecialty-aps%2C368&sr=8-6"
  },
  {
    id: 4,
    name: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop ',
    price: 429.99,
    description: 'Gaming Laptop, Hard Disk Size: 256 GB, OS: Windows 11, color : Black',
    image: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg',
    rating: 4.6,
    brand: "Acer",
    category:"Laptop",
    like:0,
    link:"https://www.amazon.com/Acer-AN515-55-53E5-i5-10300H-GeForce-Keyboard/dp/B092YHJGMN/ref=sr_1_1?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=94Q6MP6TJR7EB87TY3E4&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647104806&sr=8-1"
  },
  {
    id: 5,
    name: 'Apple MacBook Air Laptop 2020',
    price: 729.99,
    description: 'Laptop, Hard Disk Size: 256 GB, OS: Mac OS, color : Silver',
    image: 'https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg',
    rating: 4.8,
    brand: "Apple",
    category:"Laptop",
    like:0,
    link:"https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5KWB9H/ref=sr_1_1?crid=2ZYM9MRHB9NUM&keywords=macbook&qid=1647105078&sprefix=macboo%2Caps%2C404&sr=8-1"
  },
  {
    id: 6,
    name: 'SENZER headset SG500',
    price: 29.99,
    description: 'Gaming Headset with Noise Cancelling Microphone, color : Black',
    image: 'https://m.media-amazon.com/images/I/71ZW0p+mWwL._AC_SL1500_.jpg',
    rating: 4.4,
    brand: "SENZER",
    category:"Headset",
    like:0,
    link:"https://www.amazon.com/dp/B07X3RGV9C/ref=syn_sd_onsite_desktop_108?psc=1&pd_rd_w=DgSgu&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFBREJaRk1HN01TQ0kmZW5jcnlwdGVkSWQ9QTAxMzMwODcyOVMxMFpCOTU4T0Q5JmVuY3J5cHRlZEFkSWQ9QTA0ODMzMjgxVk5IOTFBN1M1WDlIJndpZGdldE5hbWU9c2Rfb25zaXRlX2Rlc2t0b3AmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 7,
    name: 'BENGOO headset SG500',
    price: 49.99,
    description: 'Gaming Headset with Noise Cancelling Microphone, color : Black',
    image: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg',
    rating: 4.3,
    brand: "BENGOO",
    category:"Headset",
    like:0,
    link:"https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_4?keywords=gaming+headsets&pd_rd_r=b8b35530-a8ff-44a2-aac6-757353ff820f&pd_rd_w=7lFnA&pd_rd_wg=eTnYu&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=EXKHCNX8GNJ127BJ29ZA&qid=1647106056&sr=8-4"
  },
  {
    id: 8,
    name: 'HyperX headset SG500',
    price: 68.99,
    description: 'Gaming Headset with Noise Cancelling Microphone, color : Black',
    image: 'https://m.media-amazon.com/images/I/71g5MRbP52L._AC_SL1500_.jpg',
    rating: 4.6,
    brand: "HyperX",
    category:"Headset",
    like:0,
    link:"https://www.amazon.com/HyperX-Cloud-Gaming-Headset-KHX-HSCP-RD/dp/B00SAYCXWG/ref=sr_1_5?keywords=gaming+headsets&pd_rd_r=b8b35530-a8ff-44a2-aac6-757353ff820f&pd_rd_w=7lFnA&pd_rd_wg=eTnYu&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=EXKHCNX8GNJ127BJ29ZA&qid=1647106056&sr=8-5"
  },
  {
    id: 9,
    name: 'Razer headset SG500',
    price: 39.99,
    description: 'Gaming Headset with Noise Cancelling Microphone, color : Green',
    image: 'https://m.media-amazon.com/images/I/71BKQhFzDmL._AC_SL1500_.jpg',
    rating: 4.6,
    brand: "Razer",
    category:"Headset",
    like:0,
    link:"https://www.amazon.com/Razer-Kraken-Gaming-Headset-2019/dp/B07N86GL5T/ref=sr_1_6?keywords=gaming+headsets&pd_rd_r=b8b35530-a8ff-44a2-aac6-757353ff820f&pd_rd_w=7lFnA&pd_rd_wg=eTnYu&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=EXKHCNX8GNJ127BJ29ZA&qid=1647106056&sr=8-6"
  },
  {
    id: 10,
    name: 'HP Flagship 15.6',
    price: 769.99,
    description: 'Laptop, Hard Disk Size: 1 TB, OS: Windows 11, color : Spruce Blue',
    image: 'https://m.media-amazon.com/images/I/81GzHjQ0mEL._AC_SL1500_.jpg',
    rating: 5.0,
    brand:"HP",
    category:"Laptop",
    like:0,
    link:"https://www.amazon.com/Flagship-HP-15-6-Laptop-HubxcelCables/dp/B09S5Z73BY/ref=sr_1_1_sspa?crid=2GO7ZSL2TCTXJ&keywords=laptop&qid=1647106333&sprefix=laptop%2Caps%2C307&sr=8-1-spons&smid=A39LX1CZ9BSTRA&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyS1VaRElIRjNCU0ZYJmVuY3J5cHRlZElkPUEwNjIxNjYwMjMwTUJSRTBaN0RISiZlbmNyeXB0ZWRBZElkPUEwNDkzMzExMlRIVlJaRVE4SElJMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1"
  },
  {
    id: 11,
    name: 'Turtle Beach Recon 200 Gen 2',
    price: 29.99,
    description: 'Gaming Headset with Noise Cancelling Microphone, color : White',
    image: 'https://m.media-amazon.com/images/I/71FTp0Dp5MS._SL1500_.jpg',
    rating: 4.3,
    brand:"Turtle",
    category:"Headset",
    like:0,
    link:"https://www.amazon.com/Powered-Headset-PlayStation-Nintendo-connection-x/dp/B099M73BF2/ref=sr_1_14?keywords=gaming%2Bheadsets&pd_rd_r=fa0c9bc7-95b3-496a-ab68-baba760896c5&pd_rd_w=sa0mc&pd_rd_wg=a3iX0&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=WHK0DY5ACG7VH3EW8N1D&qid=1647149765&sr=8-14&th=1"
  },
  {
    id: 12,
    name: 'HP 14" HD (1366 x 768) Thin and Light Laptop PC',
    price: 249.99,
    description: 'Laptop, Hard Disk Size: 1 TB, OS: Windows 10 S, color : White',
    image: 'https://m.media-amazon.com/images/I/71IyteItZhL._AC_SL1500_.jpg',
    rating: 4.5,
    brand:"HP",
    category:"Laptop",
    like:0,
    link:"https://www.amazon.com/HP-Dual-Core-Processor-Bluetooth-Microsoft/dp/B08KLMKLZR/ref=sr_1_11?crid=16VYLR1C4CYE3&keywords=laptop&qid=1647149980&sprefix=laptop%2Caps%2C375&sr=8-11"
  },
  {
    id: 13,
    name: 'ASUS Laptop L510 Ultra Thin Laptop',
    price: 701.99,
    description: 'Laptop, Hard Disk Size: 125 GB, OS: Windows 10, color : Black',
    image: 'https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_SL1500_.jpg',
    rating: 4.5,
    brand:"ASUS",
    category:"Laptop",
    like:0,
    link:"https://www.amazon.com/ASUS-Display-Processor-Microsoft-L510MA-DS04/dp/B08XB41YVQ/ref=sr_1_15?crid=16VYLR1C4CYE3&keywords=laptop&qid=1647150145&sprefix=laptop%2Caps%2C375&sr=8-15&th=1"
  },
  {
    id: 14,
    name: 'Fiodio LED Gaming Keyboard',
    price: 46.11,
    description: 'Keyboard Gaming, Connectivity Technology:	USB,Special Feature: Lighting, color : Black',
    image: 'https://m.media-amazon.com/images/I/71pPm31LFkS._AC_SL1500_.jpg',
    rating: 4.3,
    brand:"Fliodio",
    category:"Keyboard",
    like:0,
    link:"https://www.amazon.com/FIODIO-Mechanical-Anti-ghosting-Quick-Response-Multimedia/dp/B086168SJT/ref=sr_1_1_sspa?keywords=gaming%2Bkeyboard&pd_rd_r=fa0c9bc7-95b3-496a-ab68-baba760896c5&pd_rd_w=sa0mc&pd_rd_wg=a3iX0&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=WHK0DY5ACG7VH3EW8N1D&qid=1647150510&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE5N09IMVRHUDk1OEYmZW5jcnlwdGVkSWQ9QTAxNDQ3MjU1NzRNQjFEMk4xNFUmZW5jcnlwdGVkQWRJZD1BMDE4MTMyNlhIUk5YTEtZT0U5RCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1"
  },
  {
    id: 15,
    name: 'Snpurdiri Gaming Keyboard',
    price: 29.99,
    description: 'Keyboard Gaming, Connectivity Technology:	USB,Special Feature: Lighting, color : Black-White',
    image: 'https://m.media-amazon.com/images/I/61+CP7KG4nL._AC_SL1500_.jpg',
    rating: 4.3,
    brand:"Snpurdiri",
    category:"Keyboard",
    like:0,
    link:"https://www.amazon.com/Snpurdiri-Keyboard-Ultra-Compact-Waterproof-Black-White/dp/B097T276QL/ref=sr_1_3?keywords=gaming%2Bkeyboard&pd_rd_r=fa0c9bc7-95b3-496a-ab68-baba760896c5&pd_rd_w=sa0mc&pd_rd_wg=a3iX0&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=WHK0DY5ACG7VH3EW8N1D&qid=1647150690&sr=8-3&th=1"
  },
  {
    id: 16,
    name: 'Redragon S101 Wired Gaming Keyboard',
    price: 35.98,
    description: 'Keyboard Gaming, Connectivity Technology:	USB,Special Feature: Lighting, color : Black',
    image: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
    rating: 4.6,
    brand:"Redragon",
    category:"Keyboard",
    like:0,
    link:"https://www.amazon.com/Redragon-S101-Keyboard-Ergonomic-Programmable/dp/B00NLZUM36/ref=sr_1_4?keywords=gaming+keyboard&pd_rd_r=fa0c9bc7-95b3-496a-ab68-baba760896c5&pd_rd_w=sa0mc&pd_rd_wg=a3iX0&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=WHK0DY5ACG7VH3EW8N1D&qid=1647150690&sr=8-4"
  },
  {
    id: 17,
    name: 'ROCCAT Vulcan TKL Mechanical PC Tactile Gaming Keyboard',
    price: 129.99,
    description: 'Keyboard Gaming, Connectivity Technology:	USB,Special Feature: Lighting, color : Black',
    image: 'https://m.media-amazon.com/images/I/81S5Wjpyq2L._AC_SL1500_.jpg',
    rating: 4.6,
    brand:"ROCCAT",
    category:"Keyboard",
    like:0,
    link:"https://www.amazon.com/ROCCAT-Vulcan-Compact-Mechanical-Keyboard/dp/B08RHNB4HD/ref=sxin_14_pa_sp_search_thematic_sspa?cv_ct_cx=gaming+keyboard&keywords=gaming+keyboard&pd_rd_i=B08RHNB4HD&pd_rd_r=7f8cdf5a-a56b-4410-81a6-cb6ae09c943e&pd_rd_w=hWqee&pd_rd_wg=lpkUr&pf_rd_p=3feacbbb-bf22-4bbb-a627-3d7aa821c0c6&pf_rd_r=26KGET2HDX6H92C9JYG2&qid=1647150690&sr=1-3-a8004193-6951-43f6-852a-aff7dbba9115-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1WklPWDBOS1RMRUkmZW5jcnlwdGVkSWQ9QTAwMzEzNjNERklLMU5NQTFRRU8mZW5jcnlwdGVkQWRJZD1BMDgwMTYxMTNSOTk0TVhEUEo5S04md2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 18,
    name: 'Fiodio Rainbow Wired Gaming Computer Keyboard and Mouse',
    price: 25.67,
    description: 'Keyboard Gaming, Connectivity Technology:	USB,Special Feature: Lighting, color : Black',
    image: 'https://m.media-amazon.com/images/I/71TLQjN3CjL._AC_SL1500_.jpg',
    rating: 4.5,
    brand:"Fiodio",
    category:"Keyboard",
    like:0,
    link:"https://www.amazon.com/FIODIO-Ergonomic-Keyboards-Multimedia-F-1100/dp/B08616PZQK/ref=sr_1_7_sspa?keywords=gaming+keyboard&pd_rd_r=fa0c9bc7-95b3-496a-ab68-baba760896c5&pd_rd_w=sa0mc&pd_rd_wg=a3iX0&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=WHK0DY5ACG7VH3EW8N1D&qid=1647150690&sr=8-7-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1WklPWDBOS1RMRUkmZW5jcnlwdGVkSWQ9QTAxMDg0ODFFS0dGTEhLVlVRTUcmZW5jcnlwdGVkQWRJZD1BMDE5NjUxMDFBMlY1RklVR1Y4VVEmd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 19,
    name: 'Samsung Galaxy S21 FE 5G Cell Phone',
    price: 39.99,
    description: 'Samsung Smart Phone, Memory: 126 GB, OS: Android, color: White',
    image: 'https://m.media-amazon.com/images/I/61kLsk8RslL._AC_SL1500_.jpg',
    rating: 4.6,
    brand:"Samsung",
    category:"Phone",
    like:0,
    link:"https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Intelligent/dp/B09BFRV59N/ref=sr_1_2?crid=3QRS9O3WIW75E&keywords=samsung&qid=1647151199&sprefix=samsu%2Caps%2C297&sr=8-2&th=1"
  },
  {
    id: 20,
    name: 'Samsung Galaxy S22 Ultra Phone',
    price: 119.99,
    description: 'Samsung Smart Phone, Memory: 126 GB, OS: Android, color: Black',
    image: 'https://m.media-amazon.com/images/I/61U6oC65TTL._AC_SL1500_.jpg',
    rating: 4.5,
    brand:"Samsung",
    category:"Phone",
    like:0,
    link:"https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVZSW5V/ref=sr_1_1?crid=3QRS9O3WIW75E&keywords=samsung&qid=1647151356&sprefix=samsu%2Caps%2C297&sr=8-1"
  }
];