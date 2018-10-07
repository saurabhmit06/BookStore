import booktodo from './bookReducer'

const payload = {
    books: {
        book:[
        {
            authors: { author: { id: "18542", name: "Eric S. Raymond", role: null } },
            average_rating: "3.80",
            description: "description",
            edition_information: null,
            format: "Hardcover",
            id: { type: "integer", content: "104744" },
            image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
            isbn: "1565927249",
            isbn13: "9781565927247",
            large_image_url: null,
            link: "https://www.goodreads.com/book/show/104744.The_Cathedral_the_Bazaar",
            num_pages: "279",
            publication_day: "8",
            publication_month: "10",
            publication_year: "1999",
            published: "1999",
            publisher: "O'Reilly Media",
            ratings_count: "3317",
            small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            text_reviews_count: { type: "integer", content: "8" },
            title: "The Cathedral & the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary",
            title_without_series: "The Cathedral & the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary",
            uri: "kca://book/amzn1.gr.book.v1.kHUUCkrx4O11cXf9i_qQCQ",
            work: { id: "100993", uri: "kca://work/amzn1.gr.work.v1.tViXLaH3BL0v38d6PcdEOQ" },

        }]
    }
};
describe('booktodo reducer', () => {
    it('should handle initial state', () => {
        expect(
            booktodo(undefined, {})
        ).toEqual({"books": [], "error": null, "loading": false})
    })

    it('should handle FETCH_BOOKS_SUCCESS', () => {
        expect(
            booktodo([], {
                type: 'FETCH_BOOKS_SUCCESS',
                payload: payload
            })
        ).toEqual(
            {
                books:  payload.books.book,
                loading: false,
            }
        )
    })
})