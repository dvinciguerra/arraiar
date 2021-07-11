// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { Modal } from "bootstrap"
import { v4 as uuidv4 } from 'uuid'

global.state = {
  rooms: {
    "6e0f6f0d-6dfc-4f7e-89ce-cf0faa9a8e95": {
      slug: 'firepit',
      name: 'Fogueira',
      url: 'https://meet.google.com/rqx-xgps-vaf',
      people: ["834793ee-9421-4f6a-b869-f401372cf7a1"]
    },
    "28178d9b-d7fa-4390-b608-382d21498f40": {
      slug: 'sound',
      name: 'Músicas',
      people: []
    },
    "d822cfa9-c0d4-4e85-bca9-22966e7717af": {
      slug: 'tent-green',
      name: 'Barraca Verde e Branco',
      url: 'https://meet.google.com/brh-zeqt-mms',
      people: []
    },
    "eb3b9d90-5601-4379-b096-f5676c8e4da5": {
      slug: 'tent-blue',
      name: 'Barraca Azul e Roxo',
      people: []
    },
    "80689c98-e66f-44ad-9683-15d07c7ef137": {
      slug: 'tent-purple',
      name: 'Barraca Lilás e Branco',
      people: []
    },
    "dd4f66fc-2948-4d90-85b7-60c709280b7d": {
      slug: 'tent-red',
      name: 'Barraca Vermelha e Amarela',
      people: []
    },
  },
  people: {
  },
  user: {
    id: "89064a1b-6974-4986-8bab-eb49783d873e",
    rooms: []
  }
}

Rails.start()
ActiveStorage.start()

import "controllers"

// globals
document.addEventListener('DOMContentLoaded', () => {
  global.modal = new Modal(document.getElementById('modal-meeting'))

  const setNewUser = (state, name) => {
    const userId = uuidv4()

    state.people[userId] = {
      name,
      rooms: [],
    }

    state.user = {
      id: userId,
      rooms: [],
    }

    return state.people[userId]
  }

  const name = window.prompt('Nome de usuário')
  state = setNewUser(state, name)
})
