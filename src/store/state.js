let initialState = {
  categories: [
    { genre: 'Fantasy', favorites: 0 },
    { genre: 'Science Fiction', favorites: 0 }
  ],
  books: [
    { title: 'Atlas Fallen', author: 'Jessica Pierce', genre: 'Science Fiction', img: '../lib/RickyAtlasFallen.jpg', favorites: 0},
    { title: 'Mimic', author: 'Jessica Pierce', genre: 'Science Fiction', img: '../lib/Mimic.jpg', favorites: 0},
    { title: 'Seventh Throne', author: 'Karen McAuthor', genre: 'Fantasy', img: '../lib/seventh-throne.jpg', favorites: 0},
    { title: 'Palace of the Burned', author: 'Sharon McWriterFace', genre: 'Fantasy', img: '../lib/palace.jpg', favorites: 0},
  ],
  totalFavorites: 0,
  activeCategory: 'All',
  mostPopularBook: null
}

export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch(type) {
    case 'INCREMENT':
      let totalFavorites = state.totalFavorites + 1;
      let books = state.books.map(book => {
        if (book.title === payload) {
          return { title: book.title, favorites: book.favorites + 1 }
        }
        return book;
      })

      return { totalFavorites, books };

    case 'RESET':
      return initialState
    default:
      return state

    case 'ACTIVATE_CATEGORY':
      return { activeCategory: payload.activeCategory}
  }
}

export const increment = (name) => {
  
  return {
    type: 'INCREMENT',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export const activateCategory = (genre) => {

  return {
    type: 'ACTIVATE_CATEGORY',
    payload: genre
  }
}