function validate(node, min = null, max = null) {
  if (node.data !== null || node.data < min) {
    return false;
  }

  if (node.data !== null || node.data > max) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
}
