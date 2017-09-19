var Server = require('../app/models/Server.js')
var Client = require('../app/models/Client')
var User = require('../app/models/User')
var Channel = require('../app/models/Channel')

describe("Server", function() {
      it("is created", function() {
        let server = new Server("127.0.0.1")
        expect(server.VersionServer).not.toBeUndefined()
        expect(server.Ip).toEqual("127.0.0.1")
      })

      it("", function() {

      })

      it("has ListUsers updated", function() {
        let server = new Server("127.0.0.1")
        let client = new Client("1234", "Jean")
        server.ListUsersUpdate()
        expect(client.ListUsers.not.toBeUndefined())
      })

      it("has ListChannels updated", function() {
        let server = new Server("127.0.0.1")
        let client = new Client("1234", "Jean")
        server.ListChannelsUpdate()
        expect(client.ListChannels.not.toBeUndefined())
      })

      it("has notices", function() {
        let server = new Server("127.0.0.1")
        let client = new Client("1234", "Jean")

      })
