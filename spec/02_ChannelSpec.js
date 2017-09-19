var Channel = require('../app/models/Channel')

describe("Channel", function() {
  it("prepares files", function() {

  })

  it("is created", function() {
      let channel = new Channel("Cat & Dogs", "Miaouuf", true, "Catty Perry")
      expect(channel.Name).toEqual("Cat & Dogs")
      expect(channel.Description).toEqual("Miaouuf")
      expect(channel.Keep).toEqual(true)
      expect(channel.Owner).toEqual("Catty Perry")
      expect
    )
  }

  it("loads messages", function() {
    let channel = new Channels("TestChannel", "testing", false, "UserTest")
    expect(channel.LoadMessages()).toBe(true)
    expect(channel.messages.length).toBe(2)
    if (channel.messages.length === 2) {
      // Sort les données enregistré dans ./app/Messages/Channel/ChannelTest.txt
      expect(channel.messages[0][0].nick).toBe('UserTest')
      expect(channel.messages[0][0].message).toBe('salut !')
      expect(channel.messages[0][0].time).toBe('09.09.2017 - 10h30')
      expect(channel.messages[0][1].nick).toBe('Inu')
      expect(channel.messages[0][1].message).toBe('Yo !')
      expect(channel.messages[0][1].time).toBe('09.09.2017 - 10h49')
    }
  })
  it("add message", function() {
    let channel = new channel("1234", "ChannelTest")
    let message = "Hello!"
    let time = '2000-12-31T23:59:59.999Z'
    expect(channel.AddMessage('Ghin', message, time)).toBe(true)
    expect(channel.Messages[0][0].nick).toBe('Ghin')
    expect(channel.Messages[0][0].message).toBe('Hello!')
    expect(channel.Messages[0][0].time).toBe('2000-12-31T23:59:59.999Z')
  })

  it("saves messages", function() {
    let channel = new channel("1234", "ChannelTest")
    let message = "Hello!"
    let time = '2000-12-31T23:59:59.999Z'
    expect(channel.AddMessage('Ghin', message, time)).toBe(true)
    expect(channel.SaveMessages()).toBe(true)
  })
})
