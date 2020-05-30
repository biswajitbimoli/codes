import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetups: [
      {
        url: "https://cdn.britannica.com/26/84526-004-FE8A09B5.jpg",
        id: "1",
        title: "Meetup in Mumbai",
        location: 'location',
        description: 'This is description text for the demo Meetup title',
        date: new Date('2020-02-05')
      },
      {
        url: "https://i.ytimg.com/vi/bO1-XfpS9W4/maxresdefault.jpg",
        id: "2",
        title: "Meetup in Delhi",
        location: 'location',
        description: 'This is description text for the demo Meetup title',
        date: new Date('2020-02-05')
      },
      {
        url:
          "https://th.bing.com/th/id/OIP.Sz12RP_7t7qcoREn827M1wHaFj?pid=Api&rs=1",
        id: "3",
        title: "Meetup in Bangalore",
        location: 'location',
        description: 'This is description text for the demo Meetup title',
        date: new Date('2020-02-05')
      },
      {
        url:
          "http://3.bp.blogspot.com/-rd3_JbyISiM/UQJ4I95H3tI/AAAAAAAAA3Y/WO9H4fuSAto/s1600/charminar_2.jpg",
        id: "4",
        title: "Meetup in Hyderabad",
        location: 'location',
        description: 'This is description text for the demo Meetup title',
        date: new Date('2020-02-05')
      }
    ],
    users: {
      id: 1,
      registeredMeetups: ['sghlgsjkg']
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.meetups.push(payload)
    }
  },
  actions: {
    createMeetup({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        url: payload.url,
        id: "5"
      }
      commit('createMeetup', meetup)
    }
  },
  modules: {
  },
  getters: {
    loadedMeetups: (state) => {
      return state.meetups.reverse()
    },
    featuredMeetups: (state, getters) => {
      return getters.loadedMeetups.slice(0, 5)
    },
    individualMeetup: (state) => {
      return (meetId) => {
        return state.meetups.find((meet)=> {
          return meet.id === meetId
        })
      }
    }
  }

})
