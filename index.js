module.exports = function nodeToObject(node, r_) {
  var r = r_ || {}
  var split = (node.key || '/').split('/').filter(Boolean)
  var key = split[split.length - 1]

  if (node.dir) {
    r[key] = {}
    node.nodes.forEach(function(childNode) { nodeToObject(childNode, r[key]) })
  }
  else {
    r[key] = node.value
  }

  return r
}
