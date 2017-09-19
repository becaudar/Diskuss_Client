var Client = require('../app/models/Client')
var User = require('../app/models/User')
var Channel = require('../app/models/Channel')

describe("Client", function() {
      it("is created", function() {
        let client = new Client(let user = new User("1234", "Jean"))
        expect((client.CurrentUser).Id).toEqual("1234")
        expect((client.CurrentUser).Nick).toEqual("Jean")
        expect(client.CurrentChannel).toBeUndefined()
        expect(client.ListUsers).toBeUndefined()
        expect(client.ListChannels).toBeUndefined()
        expect(client.VersionClient).toEqual("v0.1")
      })

      it("has a ListUsers", function() {
        let client = new Client(let user = new User("1597", "Vodka"))
        expect(client.ListUsers).toBeUndefined()
        let user1 = new Client("1010", "Nani!")
        let user2 = new Client("2020", "Saru")
        let user3 = new Client("3030", "Inu")
        client.ListUsers = [user1, user2, user3]
        expect((client.ListUsers[0]).Id).toEqual("1010")
        expect((client.ListUsers[0]).Nick).toEqual("Nani!")

        expect((client.ListUsers[1]).Id).toEqual("2020")
        expect((client.ListUsers[1]).Nick).toEqual("Saru")
        expect((client.ListUsers[2]).Id).toEqual("3030")
        expect((client.ListUsers[2]).Nick).toEqual("Inu")
      })

      it("has a ListChannels", function() {
        let client = new Client(let user = new User("1678", "RedBull"))
        expect(client.ListChannels).toBeUndefined()
        let channel1 = new Channel("Nems", "Chinese food", true, "Haru")
        let channel2 = new Channel("McDo", "Fat food", false, "McGregor")
        client.ListChannels = [channel1, channel2]
        expect((client.ListChannels[0]).Name).toEqual("Nems")
        expect((client.ListChannels[0]).Description).toEqual("Chinese food")
        expect((client.ListChannels[0]).Keep).toEqual(true)
        expect((client.ListChannels[0]).Owner).toEqual("Haru")
        expect((client.ListChannels[1]).Name).toEqual("McDo")
        expect((client.ListChannels[1]).Description).toEqual("Fat food")
        expect((client.ListChannels[1]).Keep).toEqual(false)
        expect((client.ListChannels[1]).Owner).toEqual("McGregor")
      })

      it("can change the theme", function() {
        expect(client.ChangeTheme("Blanc")).toEqual()
      })

      it("can quit Diskuss", function() {
        expect(client.QuitDiskuss()).toEqual()
      })
