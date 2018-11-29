import chai, { assert, expect } from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server'

chai.use(chaiHttp)

after(function (done) {
  process.exit()
  done()
})

describe('Routes:', function () {
  it("Health check '/'", function (done) {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        expect(res).to.have.status(404)
        done()
      })
  })
  it("Health check '/health'", function (done) {
    chai
      .request(server)
      .get('/health')
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        expect(res).to.have.status(200)
        expect(res.body).to.have.ownProperty('status')
        expect(res.body.status).to.be.a('string')
        done()
      })
  })
})
