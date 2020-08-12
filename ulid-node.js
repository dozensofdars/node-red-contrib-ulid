const ULID = require('ulid')

module.exports = function (RED) {
  function ULIDNode(config) {
    RED.nodes.createNode(this, config)
    const node = this
    node.on('input', function (msg, send, done) {
      send =
        send ||
        function () {
          node.send.apply(node, arguments)
        }

      msg.ulid = ULID.ulid()
      send(msg)

      if (done) done()
    })
  }
  RED.nodes.registerType('ulid', ULIDNode)
}
