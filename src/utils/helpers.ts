export const noScroll = {
  on: () => {
    const body = document.querySelector('body')

    if (body) {
      body.style.overflow = 'hidden'
    }
  },
  off: () => {
    const body = document.querySelector('body')

    if (body) {
      body.style.overflow = 'inherit'
    }
  },
}
