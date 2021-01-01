const replaceParameters = (find, replace, query) => {
  let substitution = replace

  if (Array.isArray(substitution)) {
    substitution = substitution
      .map((item) => {
        if (isNaN(item)) {
          return `'${item}'`
        }
        return item
      })
      .join(',')
  } else if (isNaN(substitution)) {
    substitution = `'${substitution}'`
  }

  if (substitution !== undefined) {
    const exp = `:${find}`
    const regex = new RegExp(exp, 'g')

    return query.replace(regex, substitution)
  } else {
    return query
  }
}

export default replaceParameters
