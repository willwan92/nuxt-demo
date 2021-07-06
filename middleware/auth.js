export default function ({ route, redirect, store }) {
  if (!store.state.token) {
    redirect('/login?redirect=' + route.path)
  }
}