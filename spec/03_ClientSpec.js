var User = require('../app/models/client')

describe("Client", function() {
  it("has version, currentUser", function() {
    let channel = new Channel("name", "description", "keep", "owner")
    expect(channel.name).toEqual("name")
    expect(channel.description).toEqual("description")
    expect(channel.keep).toEqual("keep")
    expect(channel.owner).toEqual("owner")
  )}

  it("Load, Add and Save Message(s)", function() {
    expect(user.LoadMessage()).not.toBeUndefined(user.message).and.toEqual("Success - message(s) loaded")
    expect(user.AddMessage("nick", "message")).toEqual("Success - new channel.txt created")
    expect(user.SaveMessage()).toEqual("Success - message saved")
  })
})
