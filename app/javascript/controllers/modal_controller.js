import { Controller } from 'stimulus'
import { useDispatch } from 'stimulus-use'

const setUserRoom = (state, user, roomId = null) => ({
  ...state,
  user: {
    ...state.user,
    rooms: [roomId]
  },
  people: {
    ...state.people,
    [user.id]: {
      ...(state.people[user.id]),
      rooms: roomId ? [roomId] : [],
    }
  }
})

export default class ModalController extends Controller {
  connect() {
    useDispatch(this)
  }

  joinRoom(event) {
    const target = event.currentTarget
    const { user, rooms } = state

    const roomId = target.dataset.meeting

    // FIXME: melhorar a forma como mudamos o estado
    const room = {
      ...rooms[roomId],
      people: [...rooms[roomId].people, user.id],
    }

    state = setUserRoom(state, user, roomId)

    Object.entries(state.rooms).forEach(([id, room]) => {
      const inRoom = state.rooms[id].people.includes(user.id)
      if (!inRoom) return

      state.rooms[id] = {
        ...room,
        people: room.people.filter(id => id !== user.id)
      }
    })

    state.rooms = { ...state.rooms, [roomId]: { ...room } }

    modal.hide()
    // TODO: abrir a reunião em uma nova aba
    window.open(room.url, '_blank', '', false)
    // TODO: enviar notificação que pessoa entrou na sala

    // TODO: se tiver musica e estiver tocando, pausar musica

    this.dispatch("joinRoom", { id: roomId, ...room })
  }
}
