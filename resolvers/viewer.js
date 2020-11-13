const viewer = (parent, args, context, info) => {
  if (context.session) {
    return {
      id: 568457,
      role: 'AUTHENTICATED',
      session: context.session,
    }
  }

  return {}
}

export default viewer
