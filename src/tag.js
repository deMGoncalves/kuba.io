class Tag {
  static isSelfClose (children) {
    return (children?.length == 0)
  }
}

export default Tag
