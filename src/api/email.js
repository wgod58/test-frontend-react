import service from './client'

export const sendEmail = ({ from = 'customer@zed-pai.com', subject, text }) => {
  service
    .post('api/email', { from, to: 'wgod58@gmail.com', subject, text })
    .then((res) => res.data)
  service
    .post('api/email', { from, to: 'hr@avancevl.com ', subject, text })
    .then((res) => res.data)
}
