const login = async (parent, args, context, info) => {
  context.setCookie('session', '')

  return {
    role: 'ANONYMOUS',
  }
}

export default login
