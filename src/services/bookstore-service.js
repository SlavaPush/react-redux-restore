export default class BookstoreService {

    data = [
        {
            id: 1,
            title: "You Don't Know JS",
            author: 'Kyle Simpson',
            price: 100,
            coverImage: 'https://miro.medium.com/max/500/0*wNwIsj7-6X7aHEmw.jpg'
        },
        {
            id: 2,
            title: 'Eloquent Javascript',
            author: 'Marijn Haverbeke',
            price: 150,
            coverImage: 'https://eloquentjavascript.net/img/cover.jpg'
        },
        {
          id: 3,
          title: 'JavaScript',
          author: 'David Flanagan',
          price: 250,
          coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71WzJARrAwL.jpg'
        },
        {
          id: 4,
          title: 'JavaScript: Design Patterns',
          author: 'Eddy Osmany',
          price: 300,
          coverImage: 'https://akamaicovers.oreilly.com/images/0636920025832/lrg.jpg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                // reject(new Error('Error'))
            }, 700);
        })
    }
}
