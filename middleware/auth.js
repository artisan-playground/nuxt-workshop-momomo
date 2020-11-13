// import {Context} from '@nuxt/types'

// function auth({ route, store, redirect }) {
//   if (
//     route.path !== '/login' &&
//     route.path !== '/linklogin' &&
//     route.path !== '/' &&
//     !store.state.user.userData &&
//     process.env.WITH_AUTH === 'true'
//   ) {
//       redirect('/login')
//   }
// }

// export default auth

// import {Context} from '@nuxt/types'

function auth({ route, store, redirect }) {
  if (route.path !== '/login' && !store.state.user.userData) {
    redirect('/login')
  }
}

export default auth
