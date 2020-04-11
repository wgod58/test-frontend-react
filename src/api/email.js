import service from './client'

export const sendEmail = ({
  from = 'customer@zed-pai.com',
  to = 'wgod58@gmail.com',
  subject,
  text,
}) =>
  service.post('api/email', { from, to, subject, text }).then((res) => res.data)
