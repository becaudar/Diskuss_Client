var User = require('../app/models/User')

describe("User", function() {
  it("prepares files", function() {

  })

  it("is created", function() {
      let user = new User("1562", "Damien")
      expect(user.id).toEqual("1562")
      expect(user.nick).toEqual("Damien")
      expect(user.messages).not.toBeUndefined()
      expect(user.messages.length).toBe(0)
    )
  }

  it("loads messages", function() {
    let user = new User("1234", "UserTest")
    expect(user.LoadMessages()).toBe(true)
    expect(user.messages.length).toBe(2)
    if (user.messages.length === 2) {
      // Sort les données enregistré dans ./app/Messages/Private/UserTest/Inu.txt
      expect(user.messages[0][0].nick).toBe('UserTest')
      expect(user.messages[0][0].message).toBe('salut !')
      expect(user.messages[0][0].time).toBe('09.09.2017 - 10h30')
      expect(user.messages[0][1].nick).toBe('Inu')
      expect(user.messages[0][1].message).toBe('Yo !')
      expect(user.messages[0][1].time).toBe('09.09.2017 - 10h49')
      // Sort les données enregistré dans ./app/Messages/Private/UserTest/Eclipse.txt
      expect(user.messages[1][0].nick).toBe('Eclipse')
      expect(user.messages[1][0].message).toBe('Bonne journée?')
      expect(user.messages[1][0].time).toBe('07.08.2017 - 07h31')
      expect(user.messages[1][1].nick).toBe('UserTest')
      expect(user.messages[1][1].message).toBe('Oui et toi ?')
      expect(user.messages[1][1].time).toBe('07.08.2017 - 08h02')
    }
  })
  it("add message", function() {
    let user = new User("1234", "UserTest")
    let message = "Hello!"
    let time = '2000-12-31T23:59:59.999Z'
    expect(user.AddMessage('Ghin', message, time)).toBe(true)
    expect(user.Messages[0][0].nick).toBe('Ghin')
    expect(user.Messages[0][0].message).toBe('Hello!')
    expect(user.Messages[0][0].time).toBe('2000-12-31T23:59:59.999Z')
  })

  it("saves messages", function() {
    let user = new User("1234", "UserTest")
    let message = "Hello!"
    let time = '2000-12-31T23:59:59.999Z'
    expect(user.AddMessage('Ghin', message, time)).toBe(true)
    expect(user.SaveMessages()).toBe(true)
  })
})
