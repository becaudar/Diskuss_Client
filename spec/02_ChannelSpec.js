var User = require('../app/models/channel')

describe("Channel", function() {
  it("New Channel", function() {
    let channel = new Channel("Cat & Dogs", "Miaouuf", "true", "Catty Perry")
    expect(channel.name).toEqual("Cat & Dogs")
    expect(channel.description).toEqual("Miaouuf")
    expect(channel.keep).toEqual("true")
    expect(channel.owner).toEqual("Catty Perry")
  )}

  it("has Name, Description, Keep, Owner and message undefined", function(){
    let channel = new Channel("WatchDogs", "Keep an eye on them", "false", "Catoin")
    expect(channel.Name).toEqual("WatchDogs")
    channel.Name = "WatchCats"
    expect(channel.Name).not.toEqual("WatchCats")

    expect(channel.description).toEqual("Keep an eye on them")
    channel.Description = "Don't keep an eye on them"
    expect(channel.description).toEqual("Don't keep an eye on them")

    expect(channel.keep).toEqual("false")
    channel.keep = "true"
    expect(channel.keep).toEqual("true")

    expect(channel.owner).toEqual("Catoin")
    channel.Owner = "Doggey"
    expect(channel.owner).toEqual("Doggey")
  })

  it("Load, Add and Save Message(s)", function() {
    expect(user.LoadMessage()).not.toBeUndefined(user.message).and.toEqual("Success - message(s) loaded")
    expect(user.AddMessage("nick", "message")).toEqual("Success - message created")
    expect(user.SaveMessage()).toEqual("Success - message(s) saved")
  })
})
