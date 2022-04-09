'''
name=models.CharField(max_length=200)
    categoryId=models.CharField(max_length=100)
    price=models.FloatField(default=0)
    description= models.TextField(default='')
    count=models.IntegerField(default=0)
    is_active=models.BooleanField(default=False)

    phone-1
    laptop-2
    headset-3
    'categoryId':4,
'''
products = [
  {
    'name': 'IPhone 11 Pro Max',
    'categoryId':1,
    'price': 499.99,
    'description': 'Smart Phone, Memory: 64GB, OS: IOS 12, color : Midnight Green',
    'count': 4,
    'is_active': True
    },
  {
    'name': 'IPhone 12 Pro Max',
    'categoryId':1,
    'price': 49.60,
    'description': 'Apple Smart Phone, Memory: 256GB, OS: IOS 12, color: Pacific Blue',
    'count': 3,
    'is_active': True
  },
  {
    'name': 'Iphone 7',
    'categoryId':1,
    'price': 189.99,
    'description': 'Apple Smart Phone, Memory: 32GB, OS: IOS, color: Black',
    'count': 5,
    'is_active': True
  },
  {
    'name': 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop ',
    'categoryId':2,
    'price': 429.99,
    'description': 'Gaming Laptop, Hard Disk Size: 256 GB, OS: Windows 11, color : Black',
    'count': 6,
    'is_active': True
    },
  {
    'name': 'Apple MacBook Air Laptop 2020',
    'categoryId':2,
    'price': 729.99,
    'description': 'Laptop, Hard Disk Size: 256 GB, OS: Mac OS, color : Silver',
    'count': 6,
    'is_active': True
  },
  {
    'name': 'SENZER headset SG500',
    'categoryId':3,
    'price': 29.99,
    'description': 'Gaming Headset with Noise Cancelling Microphone, color : Black',
    'count': 7,
    'is_active': True
  },
  {
    'name': 'BENGOO headset SG500',
    'categoryId':3,
    'price': 49.99,
    'description': 'Gaming Headset with Noise Cancelling Microphone, color : Black',
    'count': 7,
    'is_active': True
  },
  {
    'name': 'HyperX headset SG500',
    'categoryId':3,
    'price': 68.99,
    'description': 'Gaming Headset with Noise Cancelling Microphone, color : Black',
    'count': 7,
    'is_active': True
  },
  {
    'name': 'Razer headset SG500',
    'categoryId':3,
    'price': 39.99,
    'description': 'Gaming Headset with Noise Cancelling Microphone, color : Green',
    'count': 7,
    'is_active': True
  },
  {
    'name': 'HP Flagship 15.6',
    'categoryId':2,
    'price': 769.99,
    'description': 'Laptop, Hard Disk Size: 1 TB, OS: Windows 11, color : Spruce Blue',
    'count': 7,
    'is_active': True
    },
  {
    'name': 'Turtle Beach Recon 200 Gen 2',
    'categoryId':3,
    'price': 29.99,
    'description': 'Gaming Headset with Noise Cancelling Microphone, color : White',
    'count': 8,
    'is_active': True
  },
  {
    'name': 'Fiodio LED Gaming Keyboard',
    'categoryId':4,
    'price': 46.11,
    'description': 'Keyboard Gaming, Connectivity Technology:	USB,Special Feature: Lighting, color : Black',
    'count': 8,
    'is_active': True
    }
];