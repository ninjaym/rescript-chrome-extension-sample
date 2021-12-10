let count = Svelte.writable(0)

let incrementCount = () => {
  count.update((value) => {
    value + 1
  })
}
