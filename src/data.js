function getRandomItems(arr) {
  do {
    arr = arr.filter( (_) => Math.random() > 0.5 ) 
  } while (arr.length === 0);
  return arr; 
}

const GOODS = [
  {
    "id": "5b2760ac4613bc8ecb5693f6",
    "name": "картошка",
    "cover": "potato",
    "price": 300,
    "description": "green"
  },
  {
    "id": "5b2760ace5b025b50a1f7d87",
    "name": "морковь",
    "cover": "carrot",
    "price": 850,
    "description": "brown"
  },
  {
    "id": "5b2760ac74f355323578d65a",
    "name": "капуста",
    "cover": "cabbage",
    "price": 400,
    "description": "blue"
  },
  {
    "id": "5b2760acfb01a505d3ac3139",
    "name": "репа",
    "cover": "turnip",
    "price": 1015,
    "description": "blue"
  },
  {
    "id": "5b2760acadaaef2ce88a7ada",
    "name": "огурцы",
    "cover": "cucumbers",
    "price": 700,
    "description": "blue"
  },
  {
    "id": "5b2760acec7c62d65dd1f1cb",
    "name": "свекла",
    "cover": "beet",
    "price": 700,
    "description": "brown"
  },
  {
    "id": "5b2760ac89c7d290344e967e",
    "name": "лук-репчатый",
    "cover": "onion",
    "price": 200,
    "description": "brown"
  },
  {
    "id": "5b2760ac1f5a45bb433bd7ee",
    "name": "томаты",
    "cover": "tomato",
    "price": 850,
    "description": "brown"
  },
  {
    "id": "5b2760ac087565373183b563",
    "name": "сельдерей",
    "cover": "celery",
    "price": 300,
    "description": "brown"
  },
  {
    "id": "5b2760aca074a48f5ac53250",
    "name": "яблоки",
    "cover": "apples",
    "price": 200,
    "description": "blue"
  },
  {
    "id": "5b2760acbf3312546a8cbcb6",
    "name": "апельсины",
    "cover": "oranges",
    "price": 300,
    "description": "brown"
  },
  {
    "id": "5b2760acca8acd8f36ace4df",
    "name": "мандарины",
    "cover": "tangerine",
    "price": 850,
    "description": "brown"
  },
].map( (item) => ({...item, description: 'Очень вкусно и полезно!'}) );

export default getRandomItems(GOODS);
