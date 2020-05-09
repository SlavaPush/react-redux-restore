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
        }
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