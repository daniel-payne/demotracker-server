const batchStates = (parent, args, context, info) => {
  const ids = parent.id

  if (!ids) {
    return
  }

  const loader = context.loadStates

  return loader.load(ids).then((data) => {
    if (data) {
      data.sort((a, b) => (a.name > b.name ? 1 : -1))
    }

    return data
  })
}

export default batchStates
