const expect = require('chai').expect
const axios = require('axios').default

describe('Testing configurations', ()=>{

  it('Should respond to a usage request', (done)=>{
    axios.get('http://localhost:3000/cv/help/aminusbconfig')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('AMinusBConfig')
        done()
      })
  })
  
  it('Should check board temp', (done)=>{
    axios.get('http://localhost:3000/cv/boardtemp/0')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should configure A minus B', (done)=>{
    axios.post('http://localhost:3000/cv/aminusbconfig/1/15/0/1')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change the DMOS settings', (done)=>{
    axios.post('http://localhost:3000/cv/configDMOS/Auto/10')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change the DMOS settings back', (done)=>{
    axios.post('http://localhost:3000/cv/configDMOS/Frame/4')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })
})


describe('Turning Dolby decode over SDI on and off', ()=>{
  it('Should should change the Dolby settings', (done)=>{
    axios.post('http://localhost:3000/cv/configDolby/0/1')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change the Dolby settings', (done)=>{
    axios.post('http://localhost:3000/cv/configDolby/1/1')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change the Dolby settings', (done)=>{
    axios.post('http://localhost:3000/cv/configDolby/0/0')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change the Dolby settings', (done)=>{
    axios.post('http://localhost:3000/cv/configDolby/1/0')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })
})

describe('Cycle through all play modes', ()=>{
  it('Should should change to repeat', (done)=>{
    axios.post('http://localhost:3000/cv/PlayMode/repeat')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to ping', (done)=>{
    axios.post('http://localhost:3000/cv/PlayMode/ping')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to alternate', (done)=>{
    axios.post('http://localhost:3000/cv/PlayMode/alternate')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to once', (done)=>{
    axios.post('http://localhost:3000/cv/PlayMode/once')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })
})

describe('Cycle through all view modes', ()=>{
  it('Should should change to B', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/B')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to Side', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/Side?horizontal=1&splitPoint=540')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to Side', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/Side?horizontal=0&splitPoint=960')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to Side', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/Side')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to seamless', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/seamless?horizontal=1&splitPoint=540')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to seamless', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/seamless?horizontal=0&splitPoint=960')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to seamless', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/seamless')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to mirror', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/mirror?horizontal=1&splitPoint=540')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to mirror', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/mirror?horizontal=0&splitPoint=960')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })
  it('Should should change to mirror', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/mirror')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to aminusb', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/aminusb')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })

  it('Should should change to A', (done)=>{
    axios.post('http://localhost:3000/cv/ViewMode/A')
      .then((response) => {
        console.log(response.data)
        expect(response.data).to.contain('Success')
        done()
      })
  })



})