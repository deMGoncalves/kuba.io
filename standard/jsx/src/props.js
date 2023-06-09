class Props {
  static stringfy (attrs) {
    return Object
      .entries({ ...attrs })
      .map(([key, value]) => `${key}='${value}'`)
      .join(' ')
  }
}

export default Props
