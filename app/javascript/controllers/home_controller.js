import { Controller } from 'stimulus'
import { useDispatch } from 'stimulus-use'

export default class HomeController extends Controller {
  connect() {
    useDispatch(this)

    // TODO: obter os dados do servidor
    // TODO: atualizar a tela (contadores e state) com dados do server

    this.update()
  }

  meeting(event) {
    const target = event.currentTarget
    const { meeting } = target.dataset

    const { people, user } = state
    const room = state.rooms[meeting]

    // FIXME: melhorar como preenchemos os dados do modal
    const message = `
      <div>
        <span>Acessando a sala ${room.name} (em construção)</span>

        <ul>
          ${room.people
            .map(personId => {
              const { name } = people[personId]
              const isCurrent = personId === user.id
              return `<li>${name} ${isCurrent ? '<strong>ME</strong>' : ''}</li>`
            })
            .join('')}
        </ul>
      </div>
    `

    const title = `Sala ${room.name}`

    document.getElementById('modal-meeting-title').textContent = title
    document.getElementById('modal-btn-join').dataset.meeting = meeting
    document.getElementById('modal-meeting-content').innerHTML = message

    modal.show()
  }

  update() {
    const { rooms } = state

    Object.entries(rooms).forEach(([_, room]) => {
      const peopleInRoom = room.people.length
      const badge = document.querySelector(`#badge-${room.slug} text tspan`)
      if (badge) badge.textContent = String(peopleInRoom).padStart(2, ' ')
    })
  }
}
