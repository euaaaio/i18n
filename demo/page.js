import { params } from '../index.js'
import { format, i18n } from './i18n.js'

let messages = i18n('page', {
  desc: params('Today is {date}'),
  title: 'I18n demo'
})

let title = document.querySelector('h1')
let desc = document.querySelector('span')

messages.subscribe(t => {
  let { time } = format.get()
  title.innerText = t.title
  desc.innerText = t.desc({
    date: time(new Date(), {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  })
})
