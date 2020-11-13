const login = async (parent, args, context, info) => {
  if (args.username === process.env.SESSIONUSER && args.password === process.env.SESSIONPASSWORD) {
    const session = Math.random().toString().substring(2)
    context.setCookie('session', session)

    return {
      id: 100,
      role: 'AUTHENTICATED',
      session,
    }
  }
}

export default login
