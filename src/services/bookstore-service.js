
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'The MacArthur Bible Commentary',
      author: 'John MacArthur',
      price: 19.2,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51cTzjgtL3L._SX353_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'The Supremacy of God in Preaching',
      author: 'John Piper',
      price: 12,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51sCBvNzB1L._SX322_BO1,204,203,200_.jpg'},
    {
      id: 3,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 4,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(this.data)
        reject(new Error('Somthing bad happened!'));
      }, 700);
    })
  }

}